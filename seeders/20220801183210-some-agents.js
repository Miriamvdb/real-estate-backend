"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "agents",
      [
        {
          id: 1,
          firstName: "Clemmy",
          lastName: "Soulsby",
          email: "csoulsby@reelestate.nl",
          phoneNumber: "+7 269 520 0268",
          languages: ["English", "Catalan", "Spanish", "French"],
          motto: "envisioneer mission-critical interfaces",
          imageUrl:
            "https://azbigmedia.com/wp-content/uploads/2018/11/real-estate-agent.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "Helga",
          lastName: "Spracklin",
          email: "hspracklin@reelestate.nl",
          phoneNumber: "+56 413 467 0171",
          languages: ["English", "Dutch", "Bislama", "German"],
          motto: "deliver next-generation synergy",
          imageUrl:
            "https://homezlog.com/wp-content/uploads/2019/07/realtor.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("agents", null, {});
  },
};
