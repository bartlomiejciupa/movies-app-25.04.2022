import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db";
import { useState } from "react";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const loginUserWithCredits = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((response) => {
      console.log('login', response, response.user);
      setInputEmail('');
      setInputPassword('');
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    loginUserWithCredits(inputEmail, inputPassword);
    
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          id="email"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          id="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;