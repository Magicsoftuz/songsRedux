export const selectSongAction = (data) => {
  return {
    type: "SELECTED",
    payload: data,
  };
};

export const addSongAction = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const getPostAction = async () => {
  const data = await fetch("url");
  return {
    type: "LIST",
    payload: data,
  };
};
