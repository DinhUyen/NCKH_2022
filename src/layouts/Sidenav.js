import icon from '../assets/images/favicon.png'
export default function SideNav(){
    return(
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center ">
    
    <img  src={icon} style={{width:'90%'}}/>
      <i className="w3-bar-item w3-padding-large">Version 0.1.5</i>
    <a  className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-solid fa-home w3-xxlarge"></i>
      <p>HOME</p>
    </a>
  
    
  
    <a  className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-solid fa-lock-open w3-xxlarge"></i>
      <p>LOGIN</p>
    </a>

  </nav>
    )
}