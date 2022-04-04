import { API_URL } from "./settings";

export default function postComment({ comment }) {
  const URL = `${API_URL}/Comentarios/Create`;
  console.log(comment);
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
    .then((response) => response.json())
    .then((response) => console.log);
}
