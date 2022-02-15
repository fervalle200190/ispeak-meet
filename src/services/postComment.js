import { API_URL } from "./settings";

export default function createComment({ comment }) {
  const URL = `${API_URL}`;

  fetch(URL, { method: "POST", body: comment })
    .then((response) => response.json())
    .then((response) => console.log);
}
