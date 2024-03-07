import { setupCache, buildMemoryStorage } from "axios-cache-interceptor";
import axios from "axios";

// setupCache(axios, {
//   // You don't need to to that, as it is the default option.
//   storage: buildMemoryStorage(
//     /* cloneData default=*/ false,
//     /* cleanupInterval default=*/ false,
//     /* maxEntries default=*/ false,
//   ),
// });

export function authHeader() {
  let token = JSON.parse(window.localStorage.getItem("access_token_default"));

  if (token !== null && token !== "" && token !== undefined) {
    return {
      "Content-Type": "application/json",
      Authorization: "localStorage && localStorage.getItem('access_token')
      ? 'Bearer ' + localStorage.getItem('access_token')
      : null,
      'Content-Type': 'application/json',
    };
  } else {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
}
