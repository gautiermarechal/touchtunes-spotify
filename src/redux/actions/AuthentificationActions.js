export const receiveAccessToken = (data) => ({
  type: "RECEIVE_TOKEN",
  data: data,
});

export const errorAccessToken = () => ({
  type: "ERROR_TOKEN",
});
