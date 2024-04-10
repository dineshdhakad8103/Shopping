import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronics'
import MenCloth from './MenCloth'
import WomenClothCloth from './WomenCloth'
import Item from './Item'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/mencloths">Men Cloths</NavLink>
            </li>
            <li>
              <NavLink to="/women cloths">Women Cloths</NavLink>
            </li>
          </ul>
        </div>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/jwellery' element={<Jwellery></Jwellery>}></Route>
        <Route path='/electronics' element={<Electronics></Electronics>}></Route>
        <Route path='/mencloths' element={<MenCloth ></MenCloth>}></Route>
        <Route path='/women cloths' element={<WomenClothCloth></WomenClothCloth>}></Route>
        <Route path='/item' element={<Item></Item>}></Route>
       </Routes>
      </div>
    </nav>
  )
}

export default Navbar