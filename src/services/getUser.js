import { API_URL, USER_ID } from "./settings";

export default function getUser() {
  const URL = `${API_URL}/Usuario/GetById/${USER_ID}`;
  console.log(USER_ID);

  return fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      const data = response;
      console.log(data);
      return data;
    });
}
