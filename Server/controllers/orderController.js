const {con} = require("../databaseInstance");

con.connect(function (err) {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});

exports.checkOrders = (req, res) => {
  con.query("SELECT * FROM userformdetails", (err, result) => {
    if (err) {
      console.error("Error occurred while logging in:", err);
      return res.status(500).send({message: "Error occurred while logging in"});
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.status(401).send({message: "Wrong email or password"});
      }
    }
  });
};

exports.checkOrder = (req, res) => {
  const id = req.body.id;
  const order_id = req.body.order_id;

  con.query(
    "SELECT * FROM userformdetails WHERE id = ? AND order_id = ?",
    [id, order_id],
    (err, result) => {
      if (err) {
        console.error("Error occurred while logging in:", err);
        return res
          .status(500)
          .send({message: "Error occurred while logging in"});
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.status(401).send({message: "Wrong email or password"});
        }
      }
    }
  );
};

exports.addOrder = (req, res) => {
  const id = req.body.id;
  const order_id = req.body.order_id;
  const user_id = req.body.user_id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const contact = req.body.contact;
  const item = req.body.item;
  const dimensions = req.body.dimensions;
  const LocationFrom = req.body.LocationFrom;
  const LocationTo = req.body.LocationTo;
  const DropOffWarehouse = req.body.DropOffWarehouse;
  const consigneeName = req.body.consigneeName;
  const receiverContact = req.body.receiverContact;
  const receiveraddress = req.body.receiveraddress;
  const modeSelection = req.body.modeSelection;
  const deliveryDate = req.body.deliveryDate;
  const price = req.body.price;
  const fee = req.body.fee;
  const totalAmount = req.body.totalAmount;
  const status = req.body.status;
  const created_at = req.body.created_at;
  const updated_at = req.body.updated_at;

  if (!req.body.order_id) {
    res.status(400).send({message: "I see no order here boss"});
  }
  con.query(
    "INSERT INTO userformdetails (order_id, user_id, firstname, lastname, email, contact, item, dimensions, LocationFrom, LocationTo, DropOffWarehouse, consigneeName, receiverContact, receiveraddress, modeSelection, deliveryDate, price, fee, totalAmount, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      order_id,
      user_id,
      firstname,
      lastname,
      email,
      contact,
      item,
      dimensions,
      LocationFrom,
      LocationTo,
      DropOffWarehouse,
      consigneeName,
      receiverContact,
      receiveraddress,
      modeSelection,
      deliveryDate,
      price,
      fee,
      totalAmount,
      status,
    ],
    (err, result) => {
      if (err) {
        console.error("Error occurred while registering user:", err);
        return res
          .status(500)
          .send({message: "Error occurred while registering user"});
      } else {
        console.log("User registered successfully");
        return res.status(200).send(result);
      }
    }
  );
};
