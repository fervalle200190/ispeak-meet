import { useState } from "react";
import login from "services/login";

import "./styles.css"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault()
    setIsLoading(true)
    login({email, password})
      .then(data => {
        if(data === false) {
          setEmail("")
          setPassword("")
          setIsError(true)
          setIsLoading(false)
          return
        }
        setIsLoading(false)
        window.location.reload(false)
      })

  };

  const handleEmail = ({target}) => setEmail(target.value);
  const handlePassword = ({target}) => setPassword(target.value);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 max-w-md min-w-[24rem] w-4/12 rounded-3xl bg-primary p-10 items-center justify-between h-96 shadow-md">
        <h1 className=" text-6xl text-white font-Barlow">i<span className="text-accent">.</span>speak</h1>
        <div className="flex flex-col gap-1">
        <label className="text-white font-Barlow">Email</label>
          <input
            className="p-1 rounded-sm"
            type="text"
            name="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleEmail}
          />
          <label className="text-white font-Barlow">Password</label>
          <input
            className="p-1 rounded-sm"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        {
          !isError ?
            <></>
          :
            <span className=" text-red-400">Error de email o contrasena</span>
        }
        {
          !isLoading ?
            <button className="rounded-3xl bg-accent text-primary w-40 p-2 font-Barlow h-11 flex items-center justify-center">
            Login
            </button>
          :
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        }
      </form>
    </div>
  );
}
