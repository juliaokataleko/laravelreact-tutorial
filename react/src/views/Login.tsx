import { Link } from "react-router-dom"

export default function Login() {

  const onSubmit = (ev: any) => {
    ev.preventDefault()
  }

  return (
    <div className="login-signup-form animated fadeInDowm">
      <div className="form">

        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>
          <input type="text" placeholder="Email" name="email" id="email" />
          
          <Link to="/forgot">Forgot password?</Link>
          <input type="password" name="password" placeholder="Password" id="password" />
         
          <button className="btn btn-block">Login</button>

          <p className="message">
            Not registred? <Link to="/signup">Create an account</Link>
          </p>

        </form>

      </div>
    </div>
  )
}
