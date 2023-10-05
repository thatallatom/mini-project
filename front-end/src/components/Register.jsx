import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("");
    console.log(inputs);
  };

  return (
    <div className="header">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label>Username</label>
            </td>
            <td>
              <input type="text" name="username" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input type="text" name="email" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input type="text" name="password_1" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Confirm Password</label>
            </td>
            <td>
              <input type="text" name="password_2" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="right">
              <button>Register</button>
            </td>
          </tr>
        </table>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
}
