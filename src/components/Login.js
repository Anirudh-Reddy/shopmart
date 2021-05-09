import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../styles/Login.css'
import {auth} from '../firebase'
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(e){
       e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
       .then(auth=>{
         //logged in, redirected to home page
         history.push('/')
       }).catch(e=>{
           alert(e.message)
       })
    }
    function register(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
          alert('Account successfully created!! Click on Sign In')
        }).catch(e=>{
            alert(e.message)
        })
    }
    return (
        <div className='login'>        
            <div className='login__container'>
            <Link to='/'>
             <img className='login__logo'>
             </img>    
            </Link>
              <h1>Shopmart</h1>
              <form>
                <input value={email} placeholder='E-mail'
                 onChange={(e)=>setEmail(e.target.value)} type='email'/>
                <input value={password} placeholder='Password'
                 onChange={(e)=>setPassword(e.target.value)} type='password'/>
                <button type='submit' onClick={login}
                 className='login__signInButton'>Sign In</button>
              </form>
              {/* <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p> */}
              <button type='submit' onClick={register}
              className='login__registerButton'>Create your account</button>
            </div>
        </div>
    )
}

export default Login
