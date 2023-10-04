import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((value) => ({....values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="header">
      <h2>Register</h2>

      <form onSubmit={handleSubmit} action="register_db.jsx" method="post">
        <table>
          <tr>
            <td className="input-group">
              <label>Username</label>
            </td>
            <td>
              <input type="text" name="username" onChange={handleChange} />
            </td>
          </tr>
          <tr className="input-group">
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input type="text" name="email" onChange={handleChange} />
            </td>
          </tr>
          <tr className="input-group">
            <td>
              <label htmlFor="password_1">Password</label>
            </td>
            <td>
              <input
                type="text"
                name="password_1"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className="input-group">
            <td>
              <label htmlFor="password_2">Confirm Password</label>
            </td>
            <td>
              <input
                type="text"
                name="password_2"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className="input-group">
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
