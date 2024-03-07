// Book store
// eslint-disable-next-line no-unused-vars
export async function createUser(userName, password) {
  const response = await fetch("https://bookstore.demoqa.com/Account/v1/User", {
    method: "post",
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

// eslint-disable-next-line no-unused-vars
export async function tokenGen(userName, password) {
  const response = await fetch(
    "https://bookstore.demoqa.com/Account/v1/GenerateToken",
    {
      method: "post",
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    },
  );
  return response;
}

// Petstore
// eslint-disable-next-line prettier/prettier, no-unused-vars
export async function createNewUser(
  id,
  username,
  firstName,
  lastName,
  email,
  password,
  phone,
  userStatus,
) {
  const response = await fetch("https://petstore.swagger.io/v2/user", {
    method: "post",
    body: JSON.stringify({
      id: id,
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      userStatus: userStatus,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

// eslint-disable-next-line no-unused-vars
export async function loginUser(username, password) {
  const response = await fetch(
    `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
    {
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
  );
  return response;
}

// eslint-disable-next-line no-unused-vars
export async function createPet(id, category, name, photoUrls, tags, status) {
  const response = await fetch("https://petstore.swagger.io/v2/pet", {
    method: "post",
    body: JSON.stringify({
      id: id,
      category: category,
      name: name,
      photoUrls: photoUrls,
      tags: tags,
      status: status,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response;
}
