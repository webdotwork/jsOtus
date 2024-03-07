// import Login from "./login.service";
// import Login from "./loginWithFetch";
import Login from "./loginWithAx";

const api = () => ({
  Login: () => ({ ...Login }),
});
export default api;
