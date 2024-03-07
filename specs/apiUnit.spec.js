import { createUser, tokenGen } from "../src/apis.js";
import { createNewUser, loginUser, createPet } from "../src/apis.js";
// // Book store
// async function createUser(userName, password) {
//   const response = await fetch("https://bookstore.demoqa.com/Account/v1/User", {
//     method: "post",
//     body: JSON.stringify({
//       userName: userName,
//       password: password,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response;
// }

// async function tokenGen(userName, password) {
//   const response = await fetch(
//     "https://bookstore.demoqa.com/Account/v1/GenerateToken",
//     {
//       method: "post",
//       body: JSON.stringify({
//         userName: userName,
//         password: password,
//       }),
//       headers: { "Content-Type": "application/json" },
//     },
//   );
//   return response;
// }

// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
describe("3 api tests bookstore service with user", () => {
  it("Создание пользователя успешно", async () => {
    const response = await createUser("otusQA", "1q2!3W4e");
    const data = await response.json();
    expect(response.status).toBe(201);
    // expect(data.code).toBe(0);
    console.log(data);
  });
  test("Создание пользователя c ошибкой, логин уже используется", async () => {
    const response = await createUser("otusQA", "1q2!3W4E");
    const data = await response.json();
    expect(response.status).toBe(406);
    expect(data.code).toBe("1204");
    expect(data.message).toBe("User exists!");
  });
  it("Создание пользователя c ошибкой, пароль не подходит", async () => {
    const response = await createUser("otusQA2", "1q");
    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.code).toBe("1300");
    // eslint-disable-next-line prettier/prettier
    expect(data.message).toContain(
      "Password must be eight characters or longer",
    );
  });
});

// // Генерация токена успешно
// // Генерация токена c ошибкой

describe("2 api tests bookstore service with token", () => {
  it("Генерация токена успешно", async () => {
    const response = await tokenGen("otusQA", "1q2!3W4E");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.status).toBe("Success");
    expect(data.result).toContain("User authorized successfully.");
    console.log(data.token);
  });
  test("Генерация токена c ошибкой", async () => {
    const response = await tokenGen("otusQ-A", "1q2!3W4E");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.status).toBe("Failed");
    expect(data.result).toContain("User authorization failed.");
    console.log(data);
  });
});

// // Petstore
// // eslint-disable-next-line prettier/prettier
// async function createNewUser(
//   id,
//   username,
//   firstName,
//   lastName,
//   email,
//   password,
//   phone,
//   userStatus,
// ) {
//   const response = await fetch("https://petstore.swagger.io/v2/user", {
//     method: "post",
//     body: JSON.stringify({
//       id: id,
//       username: username,
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       phone: phone,
//       userStatus: userStatus,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response;
// }

// async function loginUser(username, password) {
//   const response = await fetch(
//     `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
//     {
//       method: "get",
//       headers: { "Content-Type": "application/json" },
//     },
//   );
//   return response;
// }

// async function createPet(id, category, name, photoUrls, tags, status) {
//   const response = await fetch("https://petstore.swagger.io/v2/pet", {
//     method: "post",
//     body: JSON.stringify({
//       id: id,
//       category: category,
//       name: name,
//       photoUrls: photoUrls,
//       tags: tags,
//       status: status,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   return response;
// }
describe("PETSTORE create user", () => {
  test("create user", async () => {
    // eslint-disable-next-line prettier/prettier
    const response = await createNewUser(
      0,
      "petlower",
      "John",
      "Doe",
      String,
      "!q2Q123qwer",
      String,
      0,
    );
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.code).toBe(200);
    console.log(data);
  });
});

describe("PETSTORE login user", () => {
  test("login user", async () => {
    // eslint-disable-next-line prettier/prettier
    const response = await loginUser("petlower", "!q2Q123qwer");
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.code).toBe(200);
    expect(data.message).toContain("logged in");
    console.log(data);
  });
});

// NOT working :(
describe("PETSTORE", () => {
  test("add a pet", async () => {
    // eslint-disable-next-line prettier/prettier
    const response = await createPet(
      0,
      { id: 0, name: "mypet" },
      ["string"],
      [{ id: 0, name: "mypet" }],
      "available",
    );
    const data = await response.json();
    expect(response.status).toBe(200);
    console.log(data);
  });
});
