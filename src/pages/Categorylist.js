import React from "react";
import { Table } from "antd";
import { FiEdit, FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const Categorylist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const pCatState = useSelector((state) => state.pCategory.pCategories);
  
  console.log(pCatState);
  const data1 = [];
  for (let i = 0; i <  pCatState.length; i++) {
    data1.push({
      key: i + 1,
      name: pCatState[i].title,
      action: (
        <>
          <Link to="/" className="mt-3 fs-3 text-danger">
            <FiEdit />
          </Link>
          <Link to="/" className="mt-3 fs-3 text-danger">
            <FiDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Categorylist;
