var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    var formattedTime = moment(message.created_at).format('h:mm a');
    
    // template setup
    var template = $('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        created_at: formattedTime
    });

    $('#messages').append(html);
});

socket.on('newLocationMessage', function(message) {
    var formattedTime = moment(message.created_at).format('h:mm a');
    
    // template setup
    var template = $('#location-message-template').html();
    var html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        created_at: formattedTime
    });

    $('#messages').append(html);
});

$('#message-form').on('submit', function(e) {
    e.preventDefault();

    var messageInput = $('[name="message"]');
    socket.emit('createMessage', {
        from: 'Kieran',
        text: messageInput.val()
    }, function(response) {
        messageInput.val('');
        console.log(response);
    });
});

var locationButton = $('#send-location');
locationButton.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation not available');
    }

    locationButton.attr('disabled', 'disabled').text('Sending...');

    navigator.geolocation.getCurrentPosition(function(position) {
        locationButton.removeAttr('disabled').text('Send Location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        locationButton.removeAttr('disabled');
        alert('Unable to fetch location');
    });
});