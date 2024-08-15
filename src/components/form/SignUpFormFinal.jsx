import { Form, Field, ErrorMessage, Formik, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string().required("Required"),
      //   lastName: Yup.string().required("Required"),
      //   email: Yup.string().email().required("Required"),
      //   intro: Yup.string().required("Required"),
      //   job: Yup.string().required("Required"),
      //   terms: Yup.boolean().oneOf(
      //     [true],
      //     "Please check the term and condition"
      //   ),
      // })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
      autoComplete="off"
    >
      {(formik) => {
        console.log("TCL: SignUpFormFinal -> status", status);
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto">
            {/* FIRSTNAME */}
            <MyInput
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>

            {/* LAST NAME */}

            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>

            {/* EMAIl */}

            <MyInput
              label="Email address"
              name="email"
              placeholder="Enter your email address"
              id="email"
              type="email"
            ></MyInput>

            {/* INTRO */}

            <MyTextArea
              label="Introduce yourself "
              name="intro"
              placeholder="Enter your Introduce yourself "
              id="intro"
            ></MyTextArea>

            {/* JOB */}

            <MySelectBox
              label="Select your job "
              name="job"
              placeholder="Enter your job yourself "
              id="job"
            >
              <option value="FE">Frontend Developer</option>
              <option value="BE">Backend Developer</option>
              <option value="FullStack">Fullstack</option>
            </MySelectBox>

            {/* terms */}
            <MyCheckbox name="terms" id="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckbox>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

// useField
// destructuring
//rest parameter
// spead operator
const MyInput = ({ label, ...props }) => {
  // {label, name, placeholder, classname}
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        // nên sử dụng cahs này khi không biết có bao nhiêu props
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  // {label, name, placeholder, classname}
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        // nên sử dụng cahs này khi không biết có bao nhiêu props
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // {label, name, placeholder, classname}
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
