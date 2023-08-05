export type DBUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  registeredDate: string;
};

export type UsersResponse = {
  data: DBUser[];
  total: number;
  page: number;
  totalPages: number;
};

export type TableUser = DBUser & {
  fullName: string;
  dsr: number;
};

export type SortType = "asc" | "desc";

export type TableColumnType = {
  key: string;
  label: string;
  sortType: SortType;
  isSorting: boolean;
};

export type TableRowType = {
  [key: string]: any;
};
