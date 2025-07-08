"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterUser } from "@/app/lib/queries";
const RegistrationForm = () => {
  const {
    mutateAsync: register,
    isLoading,
    isError,
    isSuccess,
    data,
  } = useRegisterUser();
  console.log("checkdata", data);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invaild email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "password must be at least 6 characters")
        .required("password is required"),
    }),
    // onSubmit: (values) => {
    //   console.log("formddata", values);
    //     register(values)
    //     alert(data?.message || "Registration succcessful");
    //     formik.resetForm();
    // },
    onSubmit: async (values) => {
      try {
        const data = await register(values); // Wait for the register to complete
        console.log("Returned data:", data);
        alert(data?.message || "Registration successful");
        formik.resetForm(); // Reset form after successful submission
      } catch (error) {
        alert("Registration failed");
        console.error(error);
      }
    },
  });

  return (
    <>
      <div className="registration-page">
        <h2 className="main-heading">Registration</h2>
        <form
          onSubmit={formik?.handleSubmit}
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              className="form-input"
            />
            {formik.touched.name && formik.errors.name && (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="name">Password</label>
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>
          {isLoading ? (
            <button type="submit" className="form-submit">
              Loading.....
            </button>
          ) : (
            <button type="submit" className="form-submit">
              Submit
            </button>
          )}
          {/* <button type="submit" className="form-submit">Submit</button> */}
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
