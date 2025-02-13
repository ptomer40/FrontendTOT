
import{Link,Outlet} from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/products'>Show Products</Link></li>
            </ul>
            
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar