export const calcDateCreation = (data: string) =>
  data.slice(0, 10).split("-").reverse().join(".");
