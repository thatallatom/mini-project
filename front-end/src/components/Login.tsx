import { Link } from "react-router-dom";

export default function Register() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="header">
          <h2>Login</h2>
        </div>

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
          </table>
          <div className="input-group">
            <button type="submit" name="login_user" className="btn">
              Login
            </button>
          </div>
          <p>
            Not yet a member? <Link to="/Register">Sign Up</Link>
          </p>
        </form>
      </body>
    </html>
  );
}
