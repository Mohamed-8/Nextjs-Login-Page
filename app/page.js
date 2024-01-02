import Image from 'next/image'
import "../public/page.css"


export default function Home() {
  return (
<main>
<div className='login'>
   <h2>Login Form</h2>
<form>
  <div>
    <label className="uname">Username</label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <label className="psw">Password</label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <div> 
    <button type="submit">Login</button>
    </div>
  </div>
  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
</main>
  )
}
