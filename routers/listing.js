const { Router } = require("express");
const Listing = require("../models").listing;
const router = new Router();

// Feature 4: http :4000/listings
router.get("/", async (req, res, next) => {
  try {
    const allListings = await Listing.findAll();
    res.send(allListings);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// export the router
module.exports = router;
