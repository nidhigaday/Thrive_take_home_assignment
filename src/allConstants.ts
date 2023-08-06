import { TableColumnType } from "./allTypes";

export const TABLE_COLUMNS: TableColumnType[] = [
  {
    key: "id",
    label: "ID",
    sortType: "asc",
    isSorting: true,
  },
  {
    key: "firstName",
    label: "First Name",
    sortType: "asc",
    isSorting: false,
  },
  {
    key: "lastName",
    label: "Last Name",
    sortType: "asc",
    isSorting: false,
  },
  {
    key: "fullName",
    label: "Full Name",
    sortType: "asc",
    isSorting: false,
  },
  {
    key: "email",
    label: "Email",
    sortType: "asc",
    isSorting: false,
  },
  {
    key: "registeredDate",
    label: "Registered Date",
    sortType: "asc",
    isSorting: false,
  },
  {
    key: "dsr",
    label: "DSR",
    sortType: "asc",
    isSorting: false,
  },
];

export const CURRENT_USER = {
  id: 78,
  username: "breitenberg",
  email: "Ashleigh.Spinka@email.com",
  role: "admin",
};
