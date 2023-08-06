export const sortData = <T>(data: T[], key: string, sortType = "asc") => {
  const sortedData = data.sort((a: T, b: T) => {
    if (
      typeof a[key as keyof T] === "string" &&
      typeof b[key as keyof T] === "string"
    ) {
      return sortType === "asc"
        ? String(a[key as keyof T]).localeCompare(String(b[key as keyof T]))
        : String(b[key as keyof T]).localeCompare(String(a[key as keyof T]));
    } else if (
      typeof a[key as keyof T] === "number" &&
      typeof b[key as keyof T] === "number"
    ) {
      return sortType === "asc"
        ? Number(a[key as keyof T]) - Number(b[key as keyof T])
        : Number(b[key as keyof T]) - Number(a[key as keyof T]);
    }
    return 0;
  });

  return sortedData;
};
