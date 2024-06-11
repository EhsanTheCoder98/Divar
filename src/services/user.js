import api from "../configs/api";

const userProfile = () => {
  const user = api.get(`/user/whoami`, {
    headers: { Authorization: `bearer ${getCookie("accessToken")}` },
  });
  return user;
};

export { userProfile };
