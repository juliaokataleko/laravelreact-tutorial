import { Link } from "react-router-dom"

export default function Signup() {

  const onSubmit = (ev: any) => {

  }

  return (
    <div className="login-signup-form animated fadeInDowm">
      <div className="form">

        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Sign up for free</h1>
          <input type="text" placeholder="Full name" name="name" id="name" />
          <input type="text" placeholder="Email" name="email" id="email" />
          <input type="password" name="password" placeholder="Password" id="password" />
          <input type="password" name="password_confirmation" placeholder="Password confirmation" id="password_confirmation" />
          <button className="btn btn-block">Signup</button>

          <p className="message">
            Already registred? <Link to="/login">Sign in</Link>
          </p>

        </form>

      </div>
    </div>
  )
}
