#!/usr/bin/env node

const API_URL = "https://jsonplaceholder.typicode.com";

function simpleFetchUsers(uid) {
  fetch(API_URL + "/users/" + String(uid))
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// simpleFetchUsers(1);

function betterFetchUsers(uid) {
  if (typeof uid != "number") {
    throw new Error("Value must be an integer");
  }

  let url = API_URL + "/users/" + String(uid);

  return fetch(url)
    .then((response) => {
      if (response.status != 200) {
        throw new Error("Bad response from api");
      }
      return response.json();
    })
    .then((json) => {
      return JSON.stringify(json);
    })
    .catch((error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    });
}
betterFetchUsers(1).then((data) => console.log(data));
