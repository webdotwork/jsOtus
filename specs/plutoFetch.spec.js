/* eslint-disable jest/no-disabled-tests */
// import urls from "../framework/config/urls";
import creds from "../framework/config/creds";
import urls from "../framework/config/index";
// import Login from "../framework/services/loginWithFetch";
import api from "../framework/services";

/**
 * test with supertest and jest import from urls
 */
// eslint-disable-next-line jest/expect-expect, jest/no-disabled-tests
test.skip("testing auth api pluto cluster", async () => {
  const response = await fetch(`${urls.dev}api/Admin/Login/v2/Login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      loginName: creds.login,
      passwordHash: creds.passwdhash,
      machineId: creds.machineid,
    }),
  });
  expect(response.status).toBe(200);
});

/**
 * test with services import
 */
// eslint-disable-next-line jest/expect-expect, jest/no-disabled-tests
test.skip("testing2 auth api pluto cluster", async () => {
  const response = await fetch(`${urls.dev}api/Admin/Login/v2/Login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      loginName: "fail!",
      passwordHash: "fail!",
      machineId: "fail!",
    }),
  });
  expect(response.status).toBe(400);
});

/**
 * test with constructor api import
 */

// eslint-disable-next-line jest/expect-expect
test("testing3 auth api pluto cluster", async () => {
  const body = {
    loginName: creds.login,
    passwordHash: creds.passwdhash,
    machineId: creds.machineid,
  };
  const r = await api().Login().loginUser(body);
  expect(r.status).toBe(200);
});
test("testing4 get prop api pluto cluster", async () => {
  const r = await api().Login().getUserProp();
  expect(r.status).toBe(200);
  // console.log(r.message);
});
test("testing5 logout api pluto cluster", async () => {
  const r = await api().Login().logoutUser();
  expect(r.status).toBe(200);
  // console.log(r.message);
});
