const express = require("express");
const router = express.Router();

const User = require("../models/user");
const listingsStore = require("../store/listings");
const auth = require("../middleware/auth");

router.get("/:id", auth, (req, res) => {
  const userId = parseInt(req.params.id);
  const getUserById = (id) => User.find((user) => user.id === id);
  const user = getUserById(userId);
  if (!user) return res.status(404).send();

  const listings = listingsStore.filterListings(
    listing => listing.userId === userId
  );

  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    listings: listings.length,
  });
});

module.exports = router;
