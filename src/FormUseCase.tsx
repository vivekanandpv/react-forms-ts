import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface CustomerRegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  gender: string;
}

const FormUseCase = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .max(20, 'First name cannot be more than 20 characters'),
    lastName: Yup.string()
      .required('Last name is required')
      .max(20, 'Last name cannot be more than 20 characters'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    username: Yup.string()
      .required('Username is required')
      .max(20, 'Username cannot be more than 20 characters'),
    gender: Yup.string().required('Gender is required'),
  });

  const formikInstance = useFormik<CustomerRegistrationForm>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      gender: '',
    },
    onSubmit: (d, { resetForm }) => {
      console.log('form submitted', d);
      resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <h4>Customer Registration Form</h4>
      <form onSubmit={formikInstance.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            value={formikInstance.values.firstName}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.errors.firstName ? (
            <p className='form-text text-danger'>
              {formikInstance.errors.firstName}
            </p>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            value={formikInstance.values.lastName}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.errors.lastName ? (
            <p className='form-text text-danger'>
              {formikInstance.errors.lastName}
            </p>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            id='email'
            name='email'
            value={formikInstance.values.email}
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.errors.email ? (
            <p className='form-text text-danger'>
              {formikInstance.errors.email}
            </p>
          ) : null}
        </div>

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

        <div className='form-check my-4'>
          <input
            className='form-check-input'
            type='radio'
            name='gender'
            id='male'
            value='male'
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          <label className='form-check-label' htmlFor='male'>
            Male
          </label>
        </div>
        <div className='form-check my-4'>
          <input
            className='form-check-input'
            type='radio'
            name='gender'
            id='female'
            value='female'
            onChange={formikInstance.handleChange}
            onBlur={formikInstance.handleBlur}
          />
          <label className='form-check-label' htmlFor='female'>
            Female
          </label>
        </div>

        <button type='submit' className='btn btn-primary me-3 mt-4'>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormUseCase;
