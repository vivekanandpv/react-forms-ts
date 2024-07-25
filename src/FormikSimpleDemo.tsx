import { useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface LoginForm {
  username: string;
  password: string;
}

const FormikSimpleDemo = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .email('Yup: Please enter a valid email')
      .required('Yup: User name is required')
      .max(20, 'Yup: Username cannot be more than 20 characters'),
    password: Yup.string()
      .required('Yup: Password is required')
      .min(8, 'Yup: Password should be minimum 8 characters'),
  });

  const formikInstance = useFormik<LoginForm>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (d, { resetForm }) => {
      console.log('form submitted', d);
      resetForm();
    },
    onReset: () => {
      console.log('form resetting');
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <h4>Formik Simple Form Demo</h4>
      <form onSubmit={formikInstance.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            value={formikInstance.values.username}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.errors.username ? (
            <p className='form-text text-danger'>
              {formikInstance.errors.username}
            </p>
          ) : null}
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={formikInstance.values.password}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.errors.password ? (
            <p className='form-text text-danger'>
              {formikInstance.errors.password}
            </p>
          ) : null}
        </div>

        <button type='submit' className='btn btn-primary me-3'>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormikSimpleDemo;
