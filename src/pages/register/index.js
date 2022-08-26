import SideNav from "../../layouts/Sidenav"
export default function Register(){
    return(
    <>
      <SideNav/>
      <form autocomplete='off' className='form' method="POST">
    <div className='control'>
      <h1>
        Register
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
    <div className='control block-cube block-input'>
        <input name='password' placeholder='Confirm password' type='confirm_password' id="confirm_password"/>
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
        Create Account
      </div>
    </button>
  <br/>
       <div className="alert alert-danger" role="alert">
       </div>
  </form>
    </>
    )
}