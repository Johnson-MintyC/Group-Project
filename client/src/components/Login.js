import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

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
  const googleSuccess=(res)=>{
    console.log(res)
  }
  const googleFailure=()=>{
    console.log('Google Sign in was unsuccessful')
  }

  return (
    <div className="auth-wrapper">
          <div className="auth-inner">
    <form onSubmit={handleSubmit} >
      <h3>Sign In</h3>
      <div className='mb-3'>
        <label htmlFor="username">Username</label>
        <input
          className='form-control'
          placeholder='Username'
          value={fields.username}
          onChange={handleChange}
          name="username"
          type="text"
          id="username"
        />
      </div>
      <div className='mb-3'>
        <label htmlFor="password">Password</label>
        <input
          value={fields.password}
          onChange={handleChange}
          name="password"
          type="password"
          id="password"
          className='form-control'
          placeholder='Enter password'
        />

      </div>
      {warnning&&<Alert key={'danger'} variant={'danger'}>{warnning}</Alert>}
      <div className='d-grid'>
      <input type="submit" value="Login" />
      </div>
      <p className='forgot-password text-right'>
        No account yet? <Link to="/register">Register here</Link>
      </p>
    </form>
    </div>
        </div>
  );
};

export default Login;
