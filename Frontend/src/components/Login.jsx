import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft'; // For the second social button (Microsoft/Windows logo)
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // For the select dropdown
import { Link } from 'react-router-dom';

const Login = () => {
  // NOTE: Keyframes, pseudo-selectors, and the complex background definition MUST remain in a <style> block
  // as React inline styles cannot handle them.
  const necessaryCss = `
    .form-input {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        transition: box-shadow 0.3s ease;
    }
    .form-input:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(135, 55, 224, 0.4), 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    .login-button {
        transition: transform 0.2s ease-in-out;
    }
    .login-button:hover {
        transform: scale(1.03);
    }
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
  `;

  // Define complex styles as JS objects
  const bodyStyle = {
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(135deg, #3660E1, #8737E0)',
  };

  const glassmorphismCardStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  };

  const loginButtonStyle = {
    background: 'linear-gradient(90deg, #3660E1, #8737E0)',
  };

  // The custom background overlay/illustration CSS is difficult to replicate with just inline styles,
  // but we can try to simplify the placement and structure using Tailwind classes combined with JS objects.
  const backgroundOverlayStyle = {
      // Replicating the background-overlay and abstract-shape in JS is overly complex.
      // We rely on the parent div classes and relative/absolute positioning.
      filter: 'blur(30px)', 
  }


  return (
    <div style={bodyStyle}>
      <style>{necessaryCss}</style>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        
        {/* Abstract Background Elements (Styled partially via inline styles and classes) */}
        <div className="background-overlay" style={backgroundOverlayStyle}></div>
        <div 
            className="abstract-shape"
            style={{ 
                position: 'absolute',
                width: '300px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                top: '10%',
                left: '5%',
                transform: 'rotate(30deg)',
            }}
        ></div>
        <div className="background-illustration"></div> 

        <div className="relative z-10 w-full max-w-md p-8 sm:p-10 fade-in-up" style={glassmorphismCardStyle}>
          <div className="text-center mb-8">
            <div className="inline-block p-1 bg-white/20 rounded-full mb-4">
              {/* NOTE: You should use a local path or import the image correctly in a React project */}
              <img alt="College Logo" className="w-20 h-20 rounded-full" src="./images/logo.jpg" />
            </div>
            <h1 className="text-2xl font-bold text-white">Prestige University</h1>
            <p className="text-sm text-gray-200">Excellence in Education</p>
          </div>
          
          <form>
            {/* Full Name or Email */}
            <div className="mb-4">
              <input className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 form-input" id="fullname" placeholder="Full Name or Email" type="text" />
            </div>
            
            {/* Password */}
            <div className="mb-4">
              <input className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 form-input" id="password" placeholder="Password" type="password" />
            </div>
            
            {/* Role Select Dropdown */}
            <div className="relative mb-4">
              <select className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 form-input appearance-none" id="role" defaultValue="Student">
                <option>Student</option>
                <option>Faculty</option>
                <option>Admin</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {/* Replaced material-symbols-outlined with MUI Icon */}
                <KeyboardArrowDownIcon />
              </div>
            </div>
            
            {/* Checkbox and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-200">
                <input className="form-checkbox h-4 w-4 rounded bg-white/30 border-transparent focus:ring-purple-500 text-purple-500" type="checkbox" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a className="text-sm text-gray-200 hover:text-white" href="#">Forgot Password?</a>
            </div>
            
            {/* Login Button */}
            <button className="w-full text-white font-bold py-3 px-4 rounded-full login-button shadow-lg" type="submit" style={loginButtonStyle}>
              Login
            </button>
          </form>
          
          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="mx-4 text-sm text-gray-200">OR</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>
          
          {/* Social Buttons with MUI Icons */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center w-12 h-12 bg-white/90 text-gray-800 rounded-full transition-transform hover:scale-110">
              {/* Replaced Google SVG with MUI GoogleIcon */}
              <GoogleIcon className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-white/90 text-gray-800 rounded-full transition-transform hover:scale-110">
              {/* Replaced Microsoft SVG with MUI MicrosoftIcon */}
              <MicrosoftIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Register Link */}
          <p className="text-center text-sm text-gray-200 mt-8">
            Don’t have an account?
            <Link
                to="/signup"
                className="font-bold text-white hover:underline"
            >
                Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;