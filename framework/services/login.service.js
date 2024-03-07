import supertest from "supertest";
import urls from "../config/urls";

const Login = {
  loginUser: async (body) => {
    const response = await supertest(urls.dev)
      .post("api/Admin/Login/v2/Login")
      .set("Accept", "application/json")
      .send(body);
    return {
      headers: response.headers,
      status: response.status,
      data: response.body,
    };
  },
  logoutUser: async (cookies) => {
    const response = await supertest(urls.dev)
      .get("api/Admin/Login/Logout")
      .set("Accept", "*/*")
      .send(cookies);
    return {
      headers: response.headers,
      status: response.status,
      data: response.body,
    };
  },
  // eslint-disable-next-line no-dupe-keys
  getUserProp: async (cookies) => {
    const response = await supertest(urls.dev)
      .post("api/Admin/Login/GetProfile")
      .set("Accept", "application/json")
      .send(cookies);
    return {
      headers: response.headers,
      status: response.status,
      data: response.body,
    };
  },
};
export default Login;
