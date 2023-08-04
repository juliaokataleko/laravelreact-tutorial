import { Link } from "react-router-dom"

export default function Forgot() {

  const onSubmit = (ev: any) => {

  }

  return (
    <div className="login-signup-form animated fadeInDowm">
      <div className="form">

        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Recover your account</h1>
          <p>To start, inform your email to receive a link</p>
          <input type="text" placeholder="Your email" name="email" id="email" />
          
          <button className="btn btn-block">Send</button>

          <p className="message">
            Already registred? <Link to="/login">Sign in</Link>
          </p>

        </form>

      </div>
    </div>
  )
}
