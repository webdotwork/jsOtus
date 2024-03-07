// import urls from "../config/urls";

const Login = {
  loginUser: async (body) => {
    const response = await fetch(
      "http://v365.dev.streamlabs/api/Admin/Login/v2/Login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    return {
      headers: response.headers,
      status: response.status,
      data: await response.json(),
    };
  },
  logoutUser: async () => {
    const response = await fetch(
      "http://v365.dev.streamlabs/api/Admin/Login/Logout",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(body),
      },
    );
    return {
      headers: response.headers,
      status: response.status,
      // data: await response.json(),
    };
  },
  getUserProp: async () => {
    const response = await fetch(
      "http://v365.dev.streamlabs/api/Admin/Login/GetProfile",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(body),
      },
    );
    return {
      headers: response.headers,
      status: response.status,
      // data: await response.json(),
    };
  },
};
export default Login;
