import { DBUser, TableUser } from "allTypes";
import { getDateDiff } from "./getDateDiff";

export const generateTableData = (rawData: DBUser[]): TableUser[] => {
  return rawData.map((item) => {
    return {
      ...item,
      fullName:
        item.firstName && item.lastName
          ? `${item.firstName} ${item.lastName}`
          : "",
      dsr: getDateDiff(item.registeredDate),
    };
  });
};
