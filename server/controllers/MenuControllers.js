const menuModel = require("../models/MenuSchema");
const menuControllers = {
  getMenu: (req, res) => {
    menuModel.find({}, (err, products) => {
      if (err) {
        res.json({ err: err.message });
      } else {
        res.json({ products: products });
      }
    });
  },
};
module.exports = menuControllers;
