// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMailForward } from '@fortawesome/free-solid-svg-icons';
// import swal from 'sweetalert';
// import ProfileForm from './ProfileForm';

// const Login = () => {
    
//   const navigate = useNavigate();
//   // const LoginHandler = () => {
//   //   navigate('/OTP');

//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const [preFilledValues, setPreFilledValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     dob: '',
//   });

//   const handleSignUpClick = () => {
//     setIsSignUpMode(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpMode(false);
//   };

//   const handleToggleChange = () => {
//     setUser_type(prevUserType => (prevUserType === 2 ? 1 : 2));
//   };

//   const [resumeFile, setResumeFile] = useState(null);

//   // Handle resume file change
//   const handleResumeChange = (e) => {
//     const file = e.target.files[0];
//     setResumeFile(file);
//   };





 
 

//   async function RegisterUser(credentials) {
//     console.log('cred' + credentials);
//     return fetch('http://localhost:8000/auth/register/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     }).then(data => data.json());
//   }

//   async function LoginUser(credentials) {
//     console.log('cred' + credentials);
//     return fetch('http://localhost:8000/auth/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     }).then(data => data.json());
//   }

//   useEffect(() => {
//     const container = document.querySelector('.login-container');

//     if (isSignUpMode) {
//       container.classList.add('sign-up-mode');
//     } else {
//       container.classList.remove('sign-up-mode');
//     }
//   }, [isSignUpMode]);

//   const [email, setemail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [user_type, setUser_type] = useState(1);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const currentDate = new Date();
//     const userDOB = new Date(dateOfBirth);
//     const ageDiff = currentDate - userDOB;
//     const age = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365));
//     console.log(age);

//     if (age <= 13) {
//       swal({
//         title: 'Failed',
//         text: 'You must be at least 13 years old to register.',
//         icon: 'error'
//       });
//       return;
//     }

//     console.log(dateOfBirth);
//     const dob = dateOfBirth;
//     const response = await RegisterUser({
//       email,
//       username,
//       password,
//       dob,
//       user_type
//     });
    
  
//     if ('token' in response) {
//       swal({
//         title: 'Success',
//         text: response['message'],
//         icon: 'success',
//         buttons: false,
//         timer: 2000
//       }).then(() => {
//         localStorage.setItem('token', response['token']);
//         localStorage.setItem('email', email);
//         if(user_type==2 && response['mhp_is_verified']===false){
//           navigate('/verify-resume');      
//         }
//         else{
//           navigate('/OTP');
//         }
        
//       });
//     } else {
//       swal({
//         title: 'Failed',
//         text: response['message'],
//         icon: 'error'
//       });
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await LoginUser({
//       email,
//       password
//     });
//     if ('token' in response) {
//       swal({
//         title: 'Success',
//         text: response['message'],
//         icon: 'success',
//         buttons: false,
//         timer: 2000
//       }).then(() => {
//         localStorage.setItem('token', response['token']);
//         localStorage.setItem('email', email);
//         navigate('/home');
//       });
//     } else {
//       swal({
//         title: 'Failed',
//         text: response['message'],
//         icon: 'error'
//       });
//     }
//   };
//   const options = [
//     'one', 'two', 'three'
//     ];
//     const defaultOption = options[0];

//   return (
//     <div>
//       <div className="login-container">
//         <div className="forms-container">
//           <div className="signin-signup">
//             <form action="#" className="sign-in-form" onSubmit={handleLogin}>
//               <h2 className="title">Sign in</h2>
//               <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <FontAwesomeIcon icon={faMailForward} />
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   onChange={e => setemail(e.target.value)}
//                 />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-lock"></i>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </div>
//               <input type="submit" value="Login" className="button solid" />

//               <p className="social-text">Or Sign in with social platforms</p>
//               <div className="social-media">
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-google"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </form>
//             <form className="sign-up-form" noValidate onSubmit={handleSignup}>
//               <h2 className="title">Sign up</h2>
//               <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   onChange={e => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-envelope"></i>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   onChange={e => setemail(e.target.value)}
//                 />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <input type="date" placeholder="Date of Birth"
//                   onChange={e => setDateOfBirth(e.target.value)} />
//               </div>

//               <div className="input-field">
//                 <i className="fas fa-lock"></i>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </div>
              
//               <div className="input-field">
//               <label className="toggle-label">Are you a MHP?</label>
//               <div className="toggle-switch">
//                 <input
//                   type="checkbox"
//                   checked={user_type === 2}
//                   onChange={handleToggleChange}
//                   id="toggle-switch"
//                 />
//                 <label htmlFor="toggle-switch" className="toggle-slider"></label>
//               </div>
//             </div>


//             {/* Add Resume Option */}
//   {user_type === 2 && (
//     <div className="input-field">
      
//       <label htmlFor="resume">Upload Resume</label>
//       <input
//         type="file"
//         id="resume"
//         name="resume"
//         onChange={handleResumeChange} 
//       />
//     </div>
//   )}

             
              
// {isSignUpMode && (
//                 <ProfileForm preFilledValues={preFilledValues} userType={user_type} />
//               )}
//               <input type="submit" className="button" value="Sign up"  />
//               <p className="social-text">Or Sign up with social platforms</p>
//               <div className="social-media">
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-google"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="panels-container">
//           <div className="panel left-panel">
//             <div className="content">
//               <h3>New here ?</h3>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
//               <button className="button transparent" id="sign-up-btn" onClick={handleSignUpClick}>
//                 Sign up
//               </button>
//             </div>
//             <img src="img/log.svg" className="image" alt="" />
//           </div>
//           <div className="panel right-panel">
//             <div className="content">
//               <h3>One of us ?</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
//               <button className="button transparent" id="sign-in-btn" onClick={handleSignInClick}>
//                 Sign in
//               </button>
//             </div>
//             <img src="img/register.svg" className="image" alt="" />
//           </div>
//         </div>
//       </div>
     

//     </div>

//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import Config from '../config.json'



const Login = () => {
  const navigate = useNavigate();
  // const LoginHandler = () => {
  //   navigate('/OTP');
  // };
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleToggleChange = () => {
    setUser_type(prevUserType => (prevUserType === 1 ? 2 : 1));
  };

  // const [resumeFile, setResumeFile] = useState(null);

  // Handle resume file change
  // const handleResumeChange = (e) => {
  //   const file = e.target.files[0];
  //   setResumeFile(file);
  // };





 
 

  async function RegisterUser(credentials) {
    console.log('cred' + credentials);
    return fetch(`${Config.url}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(data => data.json());
  }

  async function LoginUser(credentials) {
    console.log('cred' + credentials);
    return fetch(`${Config.url}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(data => data.json());
  }

  useEffect(() => {
    const container = document.querySelector('.login-container');

    if (isSignUpMode) {
      container.classList.add('sign-up-mode');
    } else {
      container.classList.remove('sign-up-mode');
    }
  }, [isSignUpMode]);

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [user_type, setUser_type] = useState(1);

  const handleSignup = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const userDOB = new Date(dateOfBirth);
    const ageDiff = currentDate - userDOB;
    const age = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365));
    console.log(age);

    if (age <= 13) {
      swal({
        title: 'Failed',
        text: 'You must be at least 13 years old to register.',
        icon: 'error'
      });
      return;
    }

    console.log(dateOfBirth);
    const dob = dateOfBirth;
    const name = username;
    const response = await RegisterUser({
      email,
      name,
      password,
      dob,
      user_type
    });
    
  
    if ('token' in response) {
      swal({
        title: 'Success',
        text: response['message'],
        icon: 'success',
        buttons: false,
        timer: 2000
      }).then(() => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('email', email);
        if(user_type==2 && response['mhp_is_verified']===false){
          navigate('/verify-resume');      
        }
        else{
          navigate('/OTP');
        }
        
      });
    } else {
      swal({
        title: 'Failed',
        text: response['message'],
        icon: 'error'
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await LoginUser({
      email,
      password
    });
    if ('token' in response) {
      swal({
        title: 'Success',
        text: response['message'],
        icon: 'success',
        buttons: false,
        timer: 2000
      }).then(() => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('email', email);
        navigate('/home');
      });
    } else {
      swal({
        title: 'Failed',
        text: response['message'],
        icon: 'error'
      });
    }
  };
  const options = [
    'one', 'two', 'three'
    ];
    const defaultOption = options[0];

  return (
    <div>
      <div className="login-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <FontAwesomeIcon icon={faMailForward} />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={e => setemail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Login" className="button solid" />

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form className="sign-up-form" noValidate onSubmit={handleSignup}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={e => setemail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="date" placeholder="Date of Birth"
                  onChange={e => setDateOfBirth(e.target.value)} />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              
              <div className="input-field">
              <label className="toggle-label">Are you a MHP?</label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={user_type===2}
                  onChange={handleToggleChange}
                  id="toggle-switch"
                />
                <label htmlFor="toggle-switch" className="toggle-slider"></label>
              </div>
            </div>
              

              <input type="submit" className="button" value="Sign up"  />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <button className="button transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
              <button className="button transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;