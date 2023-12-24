export const updateSearchParams = (title: string, value: string | number) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (typeof value === "number") {
    value = value.toString();
  }
  searchParams.set(title, value);
  const newPathName = `${window.location.pathname}?${searchParams
    .toString()
    .toLowerCase()}`;

  return newPathName;
};
