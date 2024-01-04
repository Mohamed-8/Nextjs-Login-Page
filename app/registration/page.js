import "../../public/page.css"

export const metadata = {
    title: 'Registration',
    description: 'Generated by create next app',
  }

export default function registration() {
  return (
  <main>
  <div className='registration'>
   <h2>Registration Form</h2>
 <form>
  <div>
   <div>
    <label className="fname">First Name</label> 
    <input type="text" name="fname" required/>
    </div>
    <div>
    <label className="lname">Last Name</label>
    <input type="text" name="lname" required/>
    </div>
    <div>
    <label className="email">Email</label>
    <input type="email" name="email" required/>
    </div>
    <label className="pass">Password</label>
    <input type="password" name="pass" required/>
    <label className="cpass">Confirm Password</label>
    <input type="password" name="cpass" required/>
    <button type="submit">Register</button>
    <br/>
  </div>
 </form>
 </div>
 </main>
  )
}