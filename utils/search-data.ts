export const searchData = (data, searchValue: string) => {
  return data.filter(({ title }) =>
    title?.label?.toLowerCase().includes(searchValue?.toLowerCase())
  );
};