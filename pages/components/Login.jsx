import React from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

//three props are used to configure and control the behavior of the Formik form component:
// 1 initialValues:
// 2 validationSchema:
// 3 onSubmit:

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const FormikSchema = Yup.object({
  name: Yup.string().min(2).max(10).required("please enter your name"),
  email: Yup.string().email().required("please enter your Email"),
  password: Yup.string().min(6).required("please enter your password"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "password must Match"
  ),
});

const FormikForm = () => {
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: FormikSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        router.push(`/home`);
      },
    });

  return (
    <div className="flex flex-column justify-content-center align-items-center p-d-flex p-flex-column p-jc-center p-ai-center h-screen formBgImage">
      <div className="overlay"></div>
      <div className="formBg justify-content-center p-jc-center p-ai-center w-3 flex flex-column border-round-2xl px-5 py-5 absolute">
        <h1 style={{ color: "#e50914" }}>Sign Up</h1>
        <form className={""} onSubmit={handleSubmit}>
          <label className="text-yellow-50 font-bold">Name</label>
          <br />
          <InputText
            type="name"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <div className="text-red-500">{errors.name}</div>
          ) : (
            <div></div>
          )}
          <br />
          <label className="text-yellow-50 font-bold">Email</label>
          <br />
          <InputText
            type="email"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <div className="text-red-500">{errors.email}</div>
          ) : (
            <div></div>
          )}
          <br />
          <label className="text-yellow-50 font-bold">Password</label>
          <br />
          <InputText
            type="password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <div className="text-red-500">{errors.password}</div>
          ) : (
            <div></div>
          )}
          <br />
          <label className="text-yellow-50 font-bold">Confirm Password</label>
          <br />
          <InputText
            type="password"
            name="confirm_password"
            autoComplete="off"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <div className="text-red-500">{errors.confirm_password}</div>
          ) : (
            <div></div>
          )}
          <br />
          <div className="flex justify-content-center align-items-center">
            <Button
              label="Submit"
              type="submit"
              style={{ background: "#e50914", border: "1px solid #e50914" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormikForm;
