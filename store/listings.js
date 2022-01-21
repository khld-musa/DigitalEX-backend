const listings = [
  {
    id: 201,
    title: "Bitcoin cash",
    images: [{ fileName: "bch" }],
    price: 100,
  },
  {
    id: 3,
    title: "Bitoin",
    images: [{ fileName: "btc" }],
    price: 1200,
  },
  {
    id: 1,
    title: "Ethereum",
    images: [
      { fileName: "eth" },
    ],
    price: 1000,

  },
  {
    id: 2,
    title: "BNB",
    images: [{ fileName: "bnb" }],
    price: 100,
  },
  {
    id: 102,
    title: "Trx",
    images: [{ fileName: "trx" }],
    price: 300,
  },
  {
    id: 101,
    title: "Usdt",
    images: [{ fileName: "usdt" }],
    price: 350,
  },
  {
    id: 4,
    title: "sol",
    images: [{ fileName: "sol" }],
    price: 950,
  },
  {
    id: 6,
    title: "ltc",
    images: [{ fileName: "Ltc" }],
    price: 50,
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
