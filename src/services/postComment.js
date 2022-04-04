import { API_URL } from "./settings";

export default function postComment({ comment }) {
  const URL = `${API_URL}`;

  fetch(URL, { method: "POST", body: comment })
    .then((response) => response.json())
    .then((response) => console.log);
}
