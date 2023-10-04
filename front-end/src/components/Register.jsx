import { Link } from "react-router-dom";

export default function Register() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register Page</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div className="header">
          <h2>Register</h2>
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
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input type="email" name="email" />
              </td>
            </tr>
            <tr className="input-group">
              <td>
                <label htmlFor="password_1">Password</label>
              </td>
              <td>
                <input type="password" name="password_1" />
              </td>
            </tr>
            <tr className="input-group">
              <td>
                <label htmlFor="password_2">Confirm Password</label>
              </td>
              <td>
                <input type="password" name="password_2" />
              </td>
            </tr>
          </table>
          <div className="input-group">
            <button type="submit" name="reg_user" className="btn">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </body>
    </html>
  );
}
