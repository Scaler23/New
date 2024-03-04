import React from "react";

const TransactionComponent = ({data}) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <h5>Updates</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="row py-5">
                <div className="col-12">
                  <div className="d-flex justify-content-between px-3 mb-2">
                    <div>
                      <span>
                        <i className="bx bxs-package"></i>
                      </span>
                      Packing
                    </div>
                    <div>
                      <span>
                        <i className="bx bxs-chevrons-right"></i>
                      </span>
                      Picked up
                    </div>

                    <div>
                      <span>
                        <i className="bx bxs-user-check"></i>
                      </span>
                      Delivered
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "4%"}}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <h5 className="my-4">Transaction Information</h5>
                <div className="col-sm-12 col-lg-4">
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Consignee</p>
                    <span>Integrated Computer Systems</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Email:</p>
                    <span>ics@gmail.ics.com.ph</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Address:</p>
                    <span>#146 antipolo city</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Contact:</p>
                    <span>09693259563</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Price:</p>
                    <span>P 120,000.00</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Shop:</p>
                    <span>KaldaganPH</span>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Product:</p>
                    <span>Lenovo Iphone</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Reference No:</p>
                    <span>adDpamds@924220240302</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Delivery Date:</p>
                    <span>Feb 22, 2024</span>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="_text-muted ">Quantity:</p>
                    <span>12</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-danger">Cancel</button>
                    <button className="btn btn-primary">Delivered</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionComponent;
