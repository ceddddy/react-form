 import { useState } from "react"
import React from 'react'
 
 const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const loginHandler = (event) => {
    let outPut = setEmail(event.target.value).
   // event.preventDefault()
    console.log(outPut);
  }

  const formHandler = () => {}

   return (
    <div className="container">
    <h2>Login Page</h2>
    <form action="/action_page.php" onChange={formHandler}>
<div className="mb-3 mt-3">
  <label htmlFor="email" className="form-label">Email:</label>
  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={loginHandler}/>
</div>
<div className="mb-3">
  <label htmlFor="pwd" className="form-label">Password:</label>
  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password}/>
</div>

<button type="submit" className="btn btn-primary"  >Login</button>
</form>
  </div>
   )
 }
 
 export default Login