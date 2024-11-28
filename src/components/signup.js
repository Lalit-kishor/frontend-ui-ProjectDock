import 'bootstrap/dist/css/bootstrap.min.css';
// Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const Signup = () => {

  // const [details, setDetails] = new useState({
  //     username: '',
  //     email: '',
  //     password: ''
  // });

  // const handleChange = (e)=> {
  //   const {name, value} = e.target;
  //   setDetails((prev)=>{
  //     return {...prev, [name]: value}
  //   })
  // };
  const navigate = useNavigate();

  const handleSignup = async (details)=>{
    // e.preventDefault();

    const signupData = {
      username: details.username,
      email: details.email,
      password: details.password
    }

    // sending the collected data to the /signup endpoint

    try{

      const response = await fetch('http://localhost:5000/api/user/signup', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(signupData)
      });

      if (!response.ok) {
        const errorText = await response.text(); // get error details if not JSON
        console.error("Fetch Error:", errorText);
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      alert(data.message);

      navigate('/home');
      
    } catch(err){
      console.log('Error occured: ', err);
    }
  }

  return (
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className='card p-4 shadow' style={{ width: '100%', maxWidth: '400px'}}>

          <h2 className='text-center mb-4'>Sign Up</h2>

          <Formik 
            initialValues={{
              username: '',
              email: '',
              password: ''
            }}

            validationSchema = {yup.object({
              username: yup.string().required('Username is required'),
              email: yup.string().email('Invalid email format').required('Email is required'),
              password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
            })}

            onSubmit={handleSignup}
          >

            <Form>
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Username*</label>
                <Field name='username' id='username' type='text' className='form-control' placeholder='Enter username' />
                <ErrorMessage name='username' component='div' className='text-danger'></ErrorMessage>
              </div>

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

              <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>

              <hr className='my-3' />

              <button type="button" className="btn btn-secondary w-100 mb-2" onClick={()=>{ navigate('/login') }}>Already have an account? Log in</button>

              <button className="btn btn-outline-primary w-100 mb-3">
                <i className="bi bi-google"></i> Sign up with Google
              </button>
            </Form>

          </Formik>
        </div>
      </div>
  )
};

export default Signup;
  
//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
//         <h2 className="text-center mb-4">Sign Up</h2>

//         <form>
//           {/* Username field */}
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username*</label>
//             <input type="text" className="form-control" id="username" placeholder="Enter your username" required name="username" onChange={handleChange} />
//           </div>

//           {/* Email field */}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email*</label>
//             <input type="email" className="form-control" id="email" placeholder="Enter your email" required name="email" onChange={handleChange} />
//           </div>

//           {/* Password field */}
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password*</label>
//             <input type="password" className="form-control" id="password" placeholder="Enter your password" required name="password" onChange={handleChange} />
//           </div>

//           {/* Signup button */}
//           <button type="submit" className="btn btn-primary w-100 mb-3" onClick={handleSignup}>Sign Up</button>

//           {/* Divider */}
//           <hr className="my-3" />

//           {/* Login button */}
//           <button type="button" className="btn btn-secondary w-100" onClick={onLoginClick}>Already have an account? Log in</button>

//           {/* Signup with Google button */}
//           <button className="btn btn-outline-primary w-100 mb-3 mt-2">
//             <i className="bi bi-google"></i> Sign up with Google
//           </button>
          
//         </form>
//       </div>
//     </div>
//   );
// };
