import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import './login.css'
const Login = (props) => {
  const navigate=useNavigate()
  const [fields, setFields] = useState({ username: "", password: "" });
 const [warnning,setWarnning]=useState(null)
  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    const data = await res.json();
    if(data.authorised){
      navigate('/marketplace')
      props.handleLogin(data.authorised);
    }else{
      setWarnning(data.msg)

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <div className="username">
        <label htmlFor="username">Username</label>
        <br></br>
        <input className="inputBox"
          value={fields.username}
          onChange={handleChange}
          name="username"
          type="text"
          id="username"
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <br></br>
        <input className="inputBox"
          value={fields.password}
          onChange={handleChange}
          name="password"
          type="password"
          id="password"
        />
      </div>
      <p>{warnning&&warnning}</p>
      <input className="button" type="submit" value="Login" />
      <p><br></br>
        No account yet? <Link to="/register">Register here</Link>
      </p>
    </form>
  );
};

export default Login;
