export const pushLinesToArray = (text) => {
  const lines = text.split("\n");
  const result = [];
  for (let line of lines) {
    result.push(line.trim());
  }

  return result;
};
