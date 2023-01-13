import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@1.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'user 1',
        email: 'user1@1.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'user 2',
        email: 'user2@1.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;