import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import {auth} from '../firebase'
const Header = () => { 
  const [{basket,user},dispatch] = useStateValue();
  function login(){
    if(user){
      if(window.confirm('Are you sure you want to logout?'))
      auth.signOut();
      dispatch({
        type:'CLEAR_BASKET',
    })
    }
  }
    return (
        <nav className='header'>
         <Link to='/'>
           <h3 className='header__logo'>Shopmart</h3>
         </Link>
         <div className='header__search'>
          <input type='text' className='header__searchInput' />
          <SearchIcon className='header__searchIcon'/>
         </div>
         <div className='header__nav'>
           <Link to={!user && '/login'} className='header__link'>
            <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign out' : 'Sign In'}</span>
            </div>
           </Link>
           <Link to='/' className='header__link'>
            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
            </div>
           </Link>
           {/* <Link to='/' className='header__link'>
            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>
           </Link> */}
           <Link to='/checkout' className='header__link'>
           <div className='header__optionBasket'>
             <ShoppingBasketIcon/>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
           </div>
           </Link>
         </div>
        </nav>
    )
}
export default Header
