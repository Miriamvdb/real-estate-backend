"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          id: 1,
          refNumber: "91-016-2757",
          address: "New Orleans, Dapin, 56",
          m2: 88,
          price: 886000,
          bedRooms: 3,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          refNumber: "87-958-4717",
          address: "Xitou, Gulseth, 324",
          m2: 47,
          price: 779000,
          bedRooms: 4,
          agentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          refNumber: "44-388-0184",
          address: "Fuhai, Weeping Birch, 19",
          m2: 103,
          price: 291000,
          bedRooms: 2,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          refNumber: "95-163-6022",
          address: "Xianxi, Portage, 51841",
          m2: 44,
          price: 313000,
          bedRooms: 2,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          refNumber: "89-528-9644",
          address: "Mangusu, Riverside, 42",
          m2: 77,
          price: 383000,
          bedRooms: 4,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          refNumber: "92-975-8427",
          address: "Liutao, Esker, 6878",
          m2: 77,
          price: 189000,
          bedRooms: 4,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          refNumber: "66-173-1511",
          address: "Yeri, Porter, 2698",
          m2: 101,
          price: 659000,
          bedRooms: 3,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          refNumber: "45-541-3985",
          address: "Sagaing, Cottonwood, 9355",
          m2: 47,
          price: 350000,
          bedRooms: 4,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          refNumber: "12-086-2602",
          address: "Yuanbao, Ridgeway, 7797",
          m2: 48,
          price: 161000,
          bedRooms: 2,
          agentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          refNumber: "10-525-3618",
          address: "Płoniawy-Bramura, Goodland, 42847",
          m2: 44,
          price: 606000,
          bedRooms: 1,
          agentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
  },
};
