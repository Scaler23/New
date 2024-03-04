const {con} = require("../databaseInstance");

exports.login = (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  con.query(
    "SELECT * FROM user WHERE name = ? AND password = ?",
    [name, password],
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

exports.register = (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  // Check if any of the required fields are empty
  if (!email || !name || !password) {
    return res.status(400).send({message: "Please fill out all fields"});
  }

  // Proceed with database insertion if all fields are filled out
  con.query(
    "INSERT INTO user (email, name, password) VALUES (?, ?, ?)",
    [email, name, password],
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
