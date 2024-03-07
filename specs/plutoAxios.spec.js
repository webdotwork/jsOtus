import axios from "axios";
// import loginWithAx from "../framework/services/loginWithAx";
// import Login from "../framework/services/loginWithAx";
import api from "../framework/services";
import { UserFixture } from "../framework/fixtures/index";

// eslint-disable-next-line jest/no-commented-out-tests
// describe('Users', () => {
//   let token
//   let userId
//   let newUser
// let newUser

// beforeAll(async () => {
//   newUser = UserFixture.generateUserCredentials()
// });

const config = {
  baseURL: process.env.TEST_BASE_API_URL,
  machineId: process.env.TEST_MACHINE_ID,
  username: process.env.TEST_USERNAME,
  password: process.env.TEST_PASSWORD,
};

const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: () => true,
});

describe("Авторизация", () => {
  it.skip("Успешная авторизация", async () => {
    const response = await client.post("/api/Admin/Login/v2/Login", {
      loginName: config.username,
      passwordHash: config.password,
      machineId: config.machineId,
    });
    expect(response.status).toBe(200);
    // expect(response.data.result).toBe("User authorized successfully.");
    // expect(response.data.token).toBeDefined();
  });
});

// eslint-disable-next-line jest/no-commented-out-tests
// it('Авторизован ли пользователь?', async () => {
//   const responseCreateUser = await UserService.create(newUser)
//   userId = responseCreateUser.data.userID

//   const { data: authorizedBeforeLogin } =
//     await AuthService.authorized(newUser)

//   const responseToken = await AuthService.generateToken(newUser)
//   token = responseToken.data.token

//   const { data: authorizedAfterLogin } = await AuthService.authorized(newUser)

//   expect(authorizedBeforeLogin).toBe(false)
//   expect(authorizedAfterLogin).toBe(true)
// })

// axios.interceptors.request.use(
//   config => {
//       const token = localStorage.getItem('auth_token');
//       if (token) {
//           config.headers['Authorization'] = 'Bearer ' + token;
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//   },
//   error => {
//       Promise.reject(error)

describe("Авторизация2", () => {
  // let cookies;
  // beforeAll(async () => {
  //   const body = {
  //     loginName: config.username,
  //     passwordHash: config.password,
  //     machineId: config.machineId,
  //   };
  //   const response = await api().Login().loginUser(body);
  //   const cookies = response.headers;

  //   // for (let key in cookies) {
  //   //   // let value = cookies[key];
  //   //   console.log(key);
  //   // }
  //   console.log(cookies);

  //   // console.log(response.headers);
  //   // const data = Object.keys(response);
  //   // console.log(data);
  // });
  it.skip("Успешная авторизация", async () => {
    const body = {
      loginName: config.username,
      passwordHash: config.password,
      machineId: config.machineId,
    };
    const response = await api().Login().loginUser(body);
    // console.log(response);
    const cookies = response.headers;
    // const data = Object.keys(cookies);
    console.log(cookies);
    console.log(response);
    expect(response.status).toBe(200);
    // expect(response.data.result).toBe("User authorized successfully.");
    // expect(response.data.token).toBeDefined();
  });
  it.skip("спешная авторизация@@", async () => {
    const body = {
      loginName: UserFixture.generateUserCredentials().userName,
      passwordHash: UserFixture.generateUserCredentials().password,
      machineId: UserFixture.generateUserCredentials().machineid,
    };
    const response = await api().Login().loginUser(body);
    // console.log(response);
    // const cookies = response.headers;
    // const data = Object.keys(cookies);
    // console.log(cookies);
    // console.log(data);
    expect(response.status).toBe(200);
    // expect(response.data.result).toBe("User authorized successfully.");
    // expect(response.data.token).toBeDefined();
  });
  it.skip("авторизация@@", async () => {
    // const body = {
    //   loginName: UserFixture.generateUserCredentials().userName,
    //   passwordHash: UserFixture.generateUserCredentials().password,
    //   machineId: UserFixture.generateUserCredentials().machineid,
    // };
    const response = await api().Login().logoutUser();
    // console.log(response);
    // const cookies = response.headers;
    // const data = Object.keys(cookies);
    // console.log(cookies);
    // console.log(data);
    expect(response.status).toBe(200);
    // expect(response.data.result).toBe("User authorized successfully.");
    // expect(response.data.token).toBeDefined();
  });
});
