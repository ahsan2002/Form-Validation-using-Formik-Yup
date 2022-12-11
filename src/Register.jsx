import React from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from './Schema';

const initialValues = {
  email: "",
  password: "",
  confirm_password: ""
}

const Register = () => {


  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,

    onSubmit: (values,action) => {
      console.log("done",values);
      action.resetForm();
    }


  });
  console.log(errors);

  return (
    <>
      <div className="myform">
        <div>
        <form onSubmit={handleSubmit} >
          <input type="email" placeholder='email address' autoComplete='off' name='email' value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} />
           {
            errors.email && touched.email 
            ? <p>{errors.email}</p>
            : null
           }
           <br />
          <input type="password" placeholder='password' autoComplete='off' name='password' value={values.password}
            onChange={handleChange}
            onBlur={handleBlur} />
            {
            errors.password && touched.password 
            ? <p>{errors.password}</p>
            : null
           }
           <br />
          <input type="password" placeholder='confirm password' autoComplete='off' name='confirm_password' value={values.confirm_passworrd}
            onChange={handleChange}
            onBlur={handleBlur} />
            {
            errors.confirm_password && touched.confirm_password 
            ? <p>{errors.confirm_password}</p>
            : null
           }

<br />
    <button type='submit'>Register</button>

        </form>
        </div>
      </div>
    </>
  )
}

export default Register