import React from "react";
import CustomInput from "../components/Custominput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Addprod = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form>
          <CustomInput type="text" label="Enter Product Title" />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addprod;
