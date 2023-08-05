import { TABLE_COLUMNS } from "allConstants";
import { ReactElement, useState, createContext } from "react";
import { SortType, TableColumnType } from "types";
import { updateLocalStorageData } from "utils";

type ColumnSortAndOrderContextValueType = {
  columns: TableColumnType[];
  onColumnOrderChange: (newOrder: TableColumnType[]) => void;
  onSortChange: (key: string, sortType?: SortType) => void;
  sortedColumn: TableColumnType;
  onSaveToStorage: () => void;
  resetColumnOrder: () => void;
};

export const ColumnSortAndOrderContext =
  createContext<ColumnSortAndOrderContextValueType>(
    {} as ColumnSortAndOrderContextValueType
  );

export const ColumnSortAndOrderContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const order = JSON.parse(localStorage.getItem("order") ?? "{}");
  const [orderedColumns, setColumnOrder] = useState<TableColumnType[]>(
    Object.keys(order).length !== 0 ? order : TABLE_COLUMNS
  );

  return (
    <ColumnSortAndOrderContext.Provider
      value={{
        columns: orderedColumns,
        onColumnOrderChange: (newOrder) => setColumnOrder(newOrder),
        sortedColumn:
          orderedColumns.find((item) => item.isSorting) ?? TABLE_COLUMNS[0],
        onSortChange: (key: string, sortType = "asc") =>
          setColumnOrder(
            orderedColumns.map((item) => ({
              ...item,
              isSorting: key === item.key ? true : false,
              sortType,
            }))
          ),
        onSaveToStorage: () =>
          localStorage.setItem("order", JSON.stringify(orderedColumns)),
        resetColumnOrder: () => {
          updateLocalStorageData("order", JSON.stringify(TABLE_COLUMNS));
          setColumnOrder(TABLE_COLUMNS);
        },
      }}
    >
      {children}
    </ColumnSortAndOrderContext.Provider>
  );
};
