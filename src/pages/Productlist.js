import React, { useEffect } from "react";
import { Table } from "antd";
import { FiEdit, FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Productlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error("Error fetching products:", error);
        // You can handle the error here, e.g., display an error message or log it
      }
    };
  
    fetchData();
  }, [dispatch]);

  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
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
  console.log(productState);
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
