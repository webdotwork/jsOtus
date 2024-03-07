// import axios from "axios";
// import loginWithAx from "../framework/services/loginWithAx";
// import Login from "../framework/services/loginWithAx";
import api from "../framework/services";
// import { UserFixture } from "../framework/fixtures/index";
// import creds from "../framework/config/creds";

const config = {
  machineId: process.env.TEST_MACHINE_ID,
  username: process.env.TEST_USERNAME,
  password: process.env.TEST_PASSWORD,
  baseURL: process.env.TEST_BASE_API_URL,
};

describe("Авторизация", () => {
  it("Успешная авторизация", async () => {
    const body = {
      loginName: config.username,
      passwordHash: config.password,
      machineId: config.machineId,
    };
    const response = await api().Login().loginUser(body);
    // console.log(response);
    expect(response.status).toBe(200);
    expect(response.headers).toBeDefined();
  });
  it("авторизация@@", async () => {
    const response = await api().Login().getUserProp();
    expect(response.status).toBe(200);
  });
});
