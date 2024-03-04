import React, {useEffect, useState} from "react";
import {viewOrders as fetchOrders} from "../api/orderApi";

const UpdatesComponent = ({setIsOpenTransaceUi}) => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await fetchOrders();
        console.log(orders);
        setOrderData(orders);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []);
  return (
    <>
      <div className="row">
        {orderData.map((order) => {
          return (
            <div className=" col-lg-3 col-md-8 col-sm-12 mb-4" key={order.id}>
              <div className="card p-3">
                <p>Consignee: {order.consigneeName}</p>
                <p>Ord No: {order.order_id}</p>
                {order.status === "Pending" ? (
                  <p style={{color: "green"}}>{order.status}</p>
                ) : (
                  <p style={{color: "red"}}>{order.status}</p>
                )}
                <p>Action: </p>
                <div
                  className="card-body d-flex align-self-start gap-2"
                  style={{padding: "0px"}}
                  onClick={() => {
                    setIsOpenTransaceUi(true);
                  }}
                >
                  <button
                    className="p-2 border border-danger bg-danger"
                    style={{
                      borderRadius: "5px",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Cancelled
                  </button>
                  <button
                    className="p-2 border border-success bg-success"
                    style={{
                      borderRadius: "5px",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UpdatesComponent;
