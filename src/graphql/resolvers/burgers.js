const burgersData = require("../../data/burgers");

const resolver = {
  Query: {
    getBurgers(_parent, _args, _context) {
      const burgers = burgersData.map((burger) => {
        return {
          id: burger.id,
          name: burger.name,
          price: burger.price,
          description: burger.description ? burger.description : null,
        };
      });

      return burgers;
    },
  },

  Mutation: {
    createBurger(_parent, args, _context) {
      const { id, name, price, description } = args;

      const burger = {
        id: parseInt(id),
        name,
        price,
        description: description ? description : null,
      };

      burgersData.push(burger);

      return burger;
    },
  },

  Burger: {
    brand(parent, _args, _context) {
      if (parent.name.includes("Mc")) {
        return "McDonalds";
      } else {
        return "Burger King";
      }
    },
  },
};

module.exports = resolver;
