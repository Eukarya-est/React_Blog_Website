import "./register.css";

export default function Register() {
  return (
    <div className="Register">
            <span className="RegisterTitle">Register</span>
        <form action="" className="RegisterForm">
            <label>Username</label>
            <input type="text" className="RegisterInput" placeholder="Enter your username..." />
            <label>Email</label>
            <input type="text" className="RegisterInput" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="RegisterInput" placeholder="Enter your password" />
            <button className="registerButton">Register</button>
        </form>
        <div className="registerLoginButton">Login</div>
    </div>
    )
}
