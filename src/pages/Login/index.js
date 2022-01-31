import { useState } from "react";
import login from "services/login";

export default function LoginPage() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault()
    login({email, password})
      .then(data => {
        setUser(data)
      })
  };

  const handleEmail = ({target}) => setEmail(target.value);
  const handlePassword = ({target}) => setPassword(target.value);

  return (
    <div className="flex flex-col gap-5 max-w-xs m-10 bg-primary p-5">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button>Login</button>
      </form>
      <button onClick={() => console.log(user)}>Log</button>
    </div>
  );
}
