import React, { useEffect } from "react";
import CustomInput from "../components/Custominput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { createCategory } from "../features/pcategory/pcategorySlice";

toast.success("Brand Added Successfully");

let schema = yup.object().shape({
  title: yup.string().required("Category name is required"),
});
const Addcat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newCategory = useSelector((state) => state.pCategory);
  const { isSuccess, isError, isLoading, createdCategory } = newCategory;

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Category Added Successfully!");
    }

    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category-list");
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mb-4title">Add Category</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Add Category"
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />
           <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
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
