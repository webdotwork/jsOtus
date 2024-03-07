/* eslint-disable jest/no-disabled-tests */
import supertest from "supertest";
// import urls from "../framework/config/urls";
import creds from "../framework/config/creds";
import urls from "../framework/config/index";
import Login from "../framework/services/login.service";
import api from "../framework/services";

/**
 * test with supertest and jest import from urls
 */
// eslint-disable-next-line jest/expect-expect, jest/no-disabled-tests
test.skip("testing auth api pluto cluster", async () => {
  const body = {
    loginName: creds.login,
    passwordHash: creds.passwdhash,
    machineId: creds.machineid,
  };
  const r = await supertest(urls.dev)
    .post("api/Admin/Login/v2/Login")
    .set("Accept", "application/json")
    .send(body);
  expect(r.status).toBe(200);
});

/**
 * test with services import
 */
// eslint-disable-next-line jest/expect-expect, jest/no-disabled-tests
test.skip("testing2 auth api pluto cluster", async () => {
  const body = {
    loginName: "fail!",
    passwordHash: "fail!",
    machineId: "fail!",
  };
  const r = await Login.post(body);
  expect(r.status).toBe(400);
});

/**
 * test with constructor api import
 */

beforeAll(async () => {
  const body = {
    loginName: creds.login,
    passwordHash: creds.passwdhash,
    machineId: creds.machineid,
  };
  const { headers } = await api().Login().loginUser(body);
  const cookies = headers["set-cookie"];
  console.log(cookies);
  // eslint-disable-next-line jest/expect-expect
  test("testing3 auth api pluto cluster", async () => {
    const r = await api().Login().loginUser(body);
    expect(r.status).toBe(200);
  });
  test("testing4 get user prop pluto cluster", async () => {
    const r = await api().Login().getUserProp(cookies);
    expect(r.status).toBe(200);
    // console.log(r.message);
  });
  test.skip("testing5 auth api pluto cluster", async () => {
    const r = await api().Login().logoutUser();
    expect(r.status).toBe(200);
    // console.log(r.message);
  });
});
