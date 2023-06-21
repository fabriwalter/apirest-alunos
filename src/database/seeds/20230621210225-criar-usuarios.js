/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Walter',
        email: 'walter7@gmail.com',
        password_hash: await bcryptjs.hash('1234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Walter2',
        email: 'walter6@gmail.com',
        password_hash: await bcryptjs.hash('7654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Walter3',
        email: 'walter4@gmail.com',
        password_hash: await bcryptjs.hash('6362662', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
