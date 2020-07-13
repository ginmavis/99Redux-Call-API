var initialState = [
  {
    id: 15,
    name: "Iphone 6 Plus",
    price: 400,
    status: true,
  },
  {
    id: 22,
    name: "Samsung galaxy S7",
    price: 700,
    status: false,
  },
  {
    id: 30,
    name: "Oppo F1S",
    price: 300,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
