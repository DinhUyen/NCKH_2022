import logo from './logo.svg';
import SideNav from './layouts/Sidenav';
import './App.css';
import Login from './pages/login';
import {HashRouter,Switch,Route,Routes} from 'react-router-dom'
import {router} from './routes'
function App() {
  console.log(router.element);
  return (
    <div className='w3-black'>
        <Routes>
         
            {router.map((item,index)=>{
              return(
                <Route key={index} path={item.path} exact={item.exact} element={item.element}/>
              )
            })}
        
        </Routes>
    </div>
  );
}

export default App;
