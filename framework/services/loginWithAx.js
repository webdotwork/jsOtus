import axios from "axios";
// import { config } from "../config";
// import { UserFixture } from "../fixtures/index";
// import { setupCache, buildWebStorage } from "axios-cache-interceptor";
// import { setupCache, buildMemoryStorage } from "axios-cache-interceptor";
// import { authHeader } from "./auth";
import { LocalStorage } from "node-localstorage";

// setupCache(axios, {
//   // You don't need to to that, as it is the default option.
//   storage: buildMemoryStorage(
//     /* cloneData default=*/ false,
//     /* cleanupInterval default=*/ false,
//     /* maxEntries default=*/ false,
//   ),
// });
// Initialize local storage for Node.js environment
const localStorage = new LocalStorage("./scratch");
//
const config = {
  baseURL: process.env.TEST_BASE_API_URL,
};
//

// // Set default headers to common_axios ( as Instance )
// client.defaults.headers.common["Authorization"] = getToken();
// // Check your Header
// console.log(client.defaults.headers);

const getToken = () => {
  return localStorage.getItem("cookies");
};

const setToken = (token) => {
  localStorage.setItem("cookies", token[1]);
};

const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: () => true,
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  //   // "set-cookie": getToken(),
  //   Authorization: localStorage.getItem("cookies"),
  // },
});

client.interceptors.request.use(function (config) {
  const token = getToken();
  config.headers.Authorization = token;
  // config.headers.genericKey = token;
  // config.headers["set-cookie"] = `${localStorage.getItem("cookies")}`;
  // axios.defaults.headers.common["Authorization"] = getToken();
  // console.log(config.headers["set-cookie"]);
  // console.log(axios.defaults.headers.common["Authorization"]);
  return config;
});

// axios.defaults.headers.common["Authorization"] = getToken();

const Login = {
  loginUser: async (body) => {
    try {
      const response = await client.post("/api/Admin/Login/v2/Login", body);
      const newToken = response.headers["set-cookie"];
      setToken(newToken);
      // console.log(response.headers);
      return {
        headers: response.headers,
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getUserProp: async () => {
    // client.defaults.headers.common["set-cookie"] = getToken();
    const response = await client.post("/api/Admin/Login/GetProfile");
    // axios.defaults.headers.common["Authorization"] = getToken();
    console.log(response.headers);
    // console.log(axios.defaults.headers.common["Authorization"]);
    return {
      headers: response.headers,
      status: response.status,
      data: response.body,
    };
  },
};

// client.interceptors.request.use(function (config) {
//   const token = headers.getItem('access_token_default');
//   config.headers.Authorization =  token ? `Bearer ${token}` : '';
//   return config;
// });

// client.interceptors.request.use(async function (config) {
//   try {
//     const token = await AsyncStorage.getItem("access_token_default"); // Assuming you are using AsyncStorage for storing the token
//     config.headers.Authorization = token ? `Bearer ${token}` : "";
//     return config;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// });
// ########################################
// const Login = {
//   loginUser: async (body) => {
//     const response = await client.post("/api/Admin/Login/v2/Login", body);
//     return {
//       headers: response.headers,
//       status: response.status,
//       data: response.body,
//     };
//   },
// getUserProp: async () => {
//   const response = await client.post("/api/Admin/Login/GetProfile", {
//     headers: {
//       Accept: "application/json",
//     },
//     // params: body,
//   });
//   return {
//     headers: response.headers,
//     status: response.status,
//     data: response.body,
//   };
// },
//   logoutUser: async () => {
//     const response = await client.post("/api/Admin/Login/Logout", {
//       headers: {
//         Accept: "application/json",
//         // Authorization: `Bearer ${authToken}`
//       },
//       // params: body,
//     });
//     return {
//       headers: response.headers,
//       status: response.status,
//       data: response.body,
//     };
//   },
// };
export default Login;
// ###############################

// const getUser = async () => {
// const body = {
//   loginName: config.username,
//   passwordHash: config.password,
//   machineId: config.machineId,
// };
//   const response = await client.get("/api/Admin/Login/v2/Login", {
//     headers: {
//       Accept: "application/json",
//     },
//     params: body,
//   });
//   return {
//     headers: response.headers,
//     status: response.status,
//     data: response.data,
//   };
// };

// const createUser = async ({ userName, password }) => {
//   const response = await client.post(`/Account/v1/User`, {
//     userName,
//     password,
//   });

//   return {
//     headers: response.headers,
//     status: response.status,
//     data: response.data,
//   };
// };

// const removeUser = async ({ userId, token }) => {
//   const response = await client.delete(`/Account/v1/User/${userId}`, {
// headers: {
//   Authorization: `Bearer ${token}`,
// },
//   });

//   return {
//     headers: response.headers,
//     status: response.status,
//     data: response.data,
//   };
// };

// export default {
//   get: getUser,
//   create: createUser,
//   remove: removeUser,
// };
