var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
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