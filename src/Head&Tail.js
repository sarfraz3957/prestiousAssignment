import React from "react";
import { useState } from "react";

function Head_Tail() {
  const [obj, setObj] = useState("");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [colN, setColN] = useState(1);
  const [list4, setList4] = useState([]);
  const [preV, setPreV] = useState("");
  const [list5, setList5] = useState([]);
  const [notif, setNotif] = useState(false);

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-auto">
          <select
            className="custom-select"
            value={obj}
            style={{ width: "250px" }}
            onChange={(e) => setObj(e.target.value)}
          >
            <option value="">--select a value--</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
          {notif ? <label style={{ color: "red" }}>please select</label> : ""}
          {console.log(obj)}
          {console.log("previous prop:", preV)}
          <button
            type="submit"
            style={{ width: "100px" }}
            onClick={() => {
              if (obj === "") {
                setNotif(true);
              } else if (preV !== "") {
                if (obj === preV) {
                  if (colN === 1) {
                    setList1([...list1, obj]);
                  } else if (colN === 2) {
                    setList2([...list2, obj]);
                  } else if (colN === 3) {
                    setList3([...list3, obj]);
                  } else if (colN === 4) {
                    setList4([...list4, obj]);
                  } else if (colN === 5) {
                    setList5([...list5, obj]);
                  }
                } else if (obj !== preV) {
                  if (colN === 1) {
                    setList2([...list2, obj]);
                    setColN(2);
                  } else if (colN === 2) {
                    setList3([...list3, obj]);
                    setColN(3);
                  } else if (colN === 3) {
                    setList4([...list4, obj]);
                    setColN(4);
                  } else if (colN === 4) {
                    setList5([...list5, obj]);
                    setColN(5);
                  }
                }
              } else {
                setList1([...list1, obj]);
                console.log("1r1c");
              }
              setNotif(false);
              setObj("");
              setPreV(obj);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          {list1[0]}
          <br />
          {list1[1]}
          <br />
          {list1[2]}
          <br />
          {list1[3]}
          <br />
          {list1[4]}
          <br />
        </div>
        <div className="col-auto">
          {list2[0]}
          <br />
          {list2[1]}
          <br />
          {list2[2]}
          <br />
          {list2[3]}
          <br />
          {list2[4]}
          <br />
        </div>
        <div className="col-auto">
          {list3[0]}
          <br />
          {list3[1]}
          <br />
          {list3[2]}
          <br />
          {list3[3]}
          <br />
          {list3[4]}
          <br />
        </div>
        <div className="col-auto">
          {list4[0]}
          <br />
          {list4[1]}
          <br />
          {list4[2]}
          <br />
          {list4[3]}
          <br />
          {list4[4]}
          <br />
        </div>
        <div className="col-auto">
          {list5[0]}
          <br />
          {list5[1]}
          <br />
          {list5[2]}
          <br />
          {list5[3]}
          <br />
          {list5[4]}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Head_Tail;

