const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Kieran',
            room: 'developers'
        },{
            id: '2',
            name: 'Bob',
            room: 'general'
        },{
            id: '3',
            name: 'John',
            room: 'developers'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Kieran',
            room: 'developers'
        }

        const response = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const userId = '1';
        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        const userId = '99';
        const user = users.removeUser(userId);

        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const userId = '2';
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        const userId = '99';
        const user = users.getUser(userId);

        expect(user).toBeUndefined();
    });

    it('should return names for developers room', () => {
        const userList = users.getUserList('developers');

        expect(userList).toEqual(['Kieran', 'John']);
    });

    it('should return names for general room', () => {
        const userList = users.getUserList('general');

        expect(userList).toEqual(['Bob']);
    });
});