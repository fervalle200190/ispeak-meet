const API_URL = "http://45.236.129.192/api";

const USER_DATA = JSON.parse(window.localStorage.getItem("loggedAppUser"));

const USER_ID = USER_DATA.id;

export { API_URL, USER_ID };
