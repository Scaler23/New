import React, {useEffect, useState} from "react";
import TransactionComponent from "../components/TransactionComponent";
import UpdatesComponent from "../components/UpdatesComponent";
import mockdata from "../utils/jsons/mockdata.json";

const Update = () => {
  const [isOpenTransacUi, setIsOpenTransaceUi] = useState(false);
  const [data] = useState(mockdata);

  return (
    <div>
      {/* Conditionally render components based on isOpenTransacUi state */}
      {isOpenTransacUi ? (
        <TransactionComponent data={data} />
      ) : (
        <UpdatesComponent setIsOpenTransaceUi={setIsOpenTransaceUi} />
      )}
    </div>
  );
};

export default Update;
