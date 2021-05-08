import './App.css';
import {useEffect} from 'react'
import {useStateValue} from './StateProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {auth} from './firebase'
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      //user is logged in...
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
     //user is logged out...
     dispatch({
      type:'SET_USER',
      user:null
    })
    } 
   })
   return ()=>{
     //any clean up operations will go here...
     unsubscribe()
   }
  },[])
  console.log(user)
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/checkout'>
         <Header/>
         <Checkout/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
