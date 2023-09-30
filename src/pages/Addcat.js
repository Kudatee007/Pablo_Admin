import React from "react";
import CustomInput from "../components/Custominput";

const Addcat = () => {
  return (
    <div>
      <h3 className="mb-4title">Add Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Add Category" />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
