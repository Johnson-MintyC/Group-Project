import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css'

const Register = (props) => {
  const [fields, setFields] = useState({ username: "", password: "" });
  const [warnning,setWarnning]=useState(null)

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    const data = await res.json();
    console.log(data);
    if(data.authorised){
    navigate("/marketplace")
  }else {
    console.log(data)
    setWarnning(data.msg)
  }


  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
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
      <input className="button" type="submit" value="Register" />
      <div><p>{warnning&&warnning}</p></div>
      <p><br></br>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
};

export default Register;
