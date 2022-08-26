import SideNav from "../../layouts/Sidenav"
import { NavLink } from "react-router-dom"
import './login.css'
export default function Login(){
    return(
        <>
          <SideNav/>
          <form  className='form'>
        <div className='control'>
          <h1>
            Sign In
          </h1>
        </div>
        <div className='control block-cube block-input'>
          <input name='username' placeholder='Username' type='text' id="username"/>
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
        </div>
        <div className='control block-cube block-input'>
          <input name='password' placeholder='Password' type='password' id="password"/>
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
        </div>
        
        <button className='btn block-cube block-cube-hover' type='submit'>
          <div className='bg-top'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'></div>
          </div>
          <div className='bg'>
            <div className='bg-inner'></div>
          </div>
          <div className='text'>
            Log In
          </div>
        </button>
      
           <div className="alert alert-danger" role="alert">
           </div>
        <div className='control register' >
            {/* <a style="text-decoration: none;color: rgb(0 212 255);" href="register.html">Register</a> */}
            <NavLink className="redirect" to="/register">Register</NavLink>
        </div>
      </form>
        </>
    )
}