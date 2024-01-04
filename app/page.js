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
    <input type="text" name="uname" required/>
    <label className="psw">Password</label>
    <input type="password" name="psw" required/>
    <button type="submit">Login</button>
  </div>
  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
    <br/>
    <div className="create">Don't have an Account yet?<a href="/registration">create one!</a></div>
  </div>
 </form>
 </div>
 </main>
  )
}
