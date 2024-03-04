const {con} = require("../databaseInstance");

con.connect(function (err) {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});

exports.supplies = (req, res) => {
  const q = "SELECT * FROM product_catalogue";
  con.query(q, (err, data) => {
    if (err) {
      console.log("Error retrieving inventory:", err);
      return res.json(err);
    }
    return res.send(data);
  });
};
