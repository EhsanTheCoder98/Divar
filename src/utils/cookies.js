const cookies = (token) => {
  document.cookie = `accessToken=${token.accessToken}; max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken=${token.refreshToken}; max-age=${
    30 * 24 * 60 * 60
  }`;
};

const getCookie = (cookieNmae) => {
  const accessToken = document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieNmae);
  return accessToken.split("=")[1];
};

export { cookies, getCookie };
