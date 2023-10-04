import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="header">
      <h2>Login</h2>
      <form action="register_db.php" method="post">
        <table>
          <tr>
            <td className="input-group">
              <label htmlFor="username">Username</label>
            </td>
            <td>
              <input type="text" name="username" />
            </td>
          </tr>
          <tr className="input-group">
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input type="password" name="password" />
            </td>
          </tr>
          <tr className="input-group">
            <td colSpan="2" align="right">
              <button>Login</button>
            </td>
          </tr>
        </table>
        <p>
          Not yet a member? <Link to="/Register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
