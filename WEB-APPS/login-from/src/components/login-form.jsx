import { useState } from "react";


export const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginClicked, setLoginClicked] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = event => { 
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setLoginClicked(true)
    }
    const handleReset = (event) => {
        setUsername('');
        setPassword('');
        setLoginClicked(false);
      };

      if (loginClicked) {
        alert(`Logging in with username: ${username} and password: ${password}`);
        setLoginClicked(false);
      }


      return (
        <form onSubmit={handleLogin}>
            <div className="text-center mb-3">
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} className="form-control" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="form-control" />
      </label>
      <br />
      <button type="submit" className="btn btn-primary btn-floating mx-1 bg-success text-white m-1">Submit</button>
      </div>
    </form>
      )
    

}
