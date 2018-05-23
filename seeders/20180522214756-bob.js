'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('bob', [
      {
        name: 'boby',
        age: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bobson',
        age: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'boberella',
        age: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bobbette',
        age: 9000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
      
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('bob', {
      where: {
        
      }
    }, {});
  }
};
