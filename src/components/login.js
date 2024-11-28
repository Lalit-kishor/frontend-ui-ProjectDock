import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (details)=>{
    // e.preventDefault();

    const loginData = {
      email: details.email,
      password: details.password
    }

    // sending the collected data to the /signup endpoint

    try{

      const response = await fetch('http://localhost:5000/api/user/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        alert('Bad credentials');
        const errorText = await response.text(); // get error details if not JSON
        console.error("Fetch Error:", errorText);
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      alert(data.message);

      navigate('/home');
      
    } catch(err){
      console.log('Error occured in catch part of Login Component: ', err);
    }
  }

  return (
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className='card p-4 shadow' style={{ width: '100%', maxWidth: '400px'}}>

          <h2 className='text-center mb-4'>Login</h2>

          <Formik 
            initialValues={{
              email: '',
              password: ''
            }}

            validationSchema = {yup.object({
              email: yup.string().email('Invalid email format').required('Email is required'),
              password: yup.string().required('Password is required')
            })}

            onSubmit={handleLogin}
          >

            <Form>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email*</label>
                <Field name='email' id='email' type='email' className='form-control' placeholder='Enter email' />
                <ErrorMessage name='email' component='div' className='text-danger'></ErrorMessage>
              </div>

              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password*</label>
                <Field name='password' id='password' type='password' className='form-control' placeholder='Enter password' />
                <ErrorMessage name='password' component='div' className='text-danger'></ErrorMessage>
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

              <hr className='my-3' />

              <button className="btn btn-outline-primary w-100 mb-3">
                <i className="bi bi-google"></i> Login with Google
              </button>
            </Form>

          </Formik>
        </div>
      </div>
  )
};

export default Login;
