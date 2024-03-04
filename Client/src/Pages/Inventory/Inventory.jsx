import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:3036/api/inventory");
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div style={{margin: "20px", fontFamily: "Arial, sans-serif"}}>
      <h1 style={{marginBottom: "20px", textAlign: "center", color: "#333"}}>
        Inventory
      </h1>
      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead style={{backgroundColor: "#343a40", color: "#fff"}}>
            <tr>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>PRODUCT NAME</th>
              <th style={tableHeaderStyle}>PRODUCT DESCRIPTION</th>
              <th style={tableHeaderStyle}>PRICE</th>
              <th style={tableHeaderStyle}>IMAGE</th>
              <th style={tableHeaderStyle}>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td style={tableCellStyle}>{item.id}</td>
                <td style={tableCellStyle}>{item.ProductName}</td>
                <td style={tableCellStyle}>{item.ProductDescription}</td>
                <td style={tableCellStyle}>{item.Price}</td>
                <td style={tableCellStyle}>
                  <img
                    src={item.Image}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    alt=""
                  />
                </td>
                <td style={tableCellStyle}>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "12px",
  textAlign: "left",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

export default Inventory;
