module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('myPokemons', [
      {
        id: 9,
        name: 'Blastoise Mantap',
        url: 'https://pokeapi.co/api/v2/pokemon/9/',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        rename_ctr: 0,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('myPokemons', null, {});
  },
};
