import { useState } from "react";

export default function ExternalRegisterPage() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = ({ target }) => setName(target.value);
  const handleBirthday = ({ target }) => setBirthday(target.value);
  const handlePhone = ({ target }) => setPhone(target.value);
  const handleCountry = ({ target }) => setCountry(target.value);
  const handleCity = ({ target }) => setCity(target.value);
  const handleOccupation = ({ target }) => setOccupation(target.value);
  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="flex min-w-[20rem] flex-col items-center justify-center rounded-xl border-gray-200 bg-white p-5 px-10 shadow-sm">
          <h1 className=" m-1 font-Barlow text-5xl font-medium text-primary">
            i<span className="text-accent">.</span>speak
          </h1>
          <h2 className="m-1 text-2xl">Registro de Alumno</h2>
          <span>
            Completa tus datos y crea tu usuario y contraseña para acceder al
            portal.
          </span>
          <form className="mt-2 flex w-full flex-col gap-1">
            <label className="font-medium">Nombre y Apellido</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="name"
              value={name}
              onChange={handleName}
            />
            <label className="font-medium">Fecha de Nacimiento</label>
            <input
              type="date"
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              name="birthday"
              value={birthday}
              onChange={handleBirthday}
            />
            <label className="font-medium">Celular</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="phone"
              value={phone}
              onChange={handlePhone}
            />
            <label className="font-medium">Pais</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="country"
              value={country}
              onChange={handleCountry}
            />
            <label className="font-medium">Ciudad</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="city"
              value={city}
              onChange={handleCity}
            />
            <label className="font-medium">Ocupacion</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="occupation"
              value={occupation}
              onChange={handleOccupation}
            />
            <label className="font-medium">Email</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <label className="font-medium">Contraseña</label>
            <input
              className="min-h-[2rem] rounded-sm border border-gray-200 px-2"
              type="text"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <div className="flex w-full justify-center">
              <button className="mt-5 flex h-11 w-40 items-center justify-center rounded-3xl bg-accent p-2 font-Barlow text-primary">
                registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
