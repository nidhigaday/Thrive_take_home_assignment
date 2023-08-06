import { fetchUsers } from "hooks/useFetchUsers";
import {
  ReactElement,
  useState,
  createContext,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { SortType, TableUser, UsersResponse } from "allTypes";
import * as Utils from "utils";
import { ColumnSortAndOrderContext } from "./ColumnSortAndOrderContext";

type SortedDataContextValueType = {
  data?: TableUser[];
  pagination?: Omit<UsersResponse, "data">;
  onSortedColumnChange: (key: string, sortType: SortType) => void;
  onPageChange: (page?: number) => void;
  error: string | null;
  isFetching: boolean;
};

export const SortedDataContext = createContext<SortedDataContextValueType>(
  {} as SortedDataContextValueType
);

/**
 * This context handles data that is to be rendered in the table
 * it fetches, sorts and caches data
 */
export const SortedDataContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const { onSortChange, sortedColumn } = useContext(ColumnSortAndOrderContext);

  const [paginationState, setPaginationState] =
    useState<Omit<UsersResponse, "data">>();
  const [tableData, setTableData] = useState<TableUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setFetching] = useState<boolean>(false);

  const getSortedTableData = useCallback(
    (data: TableUser[], sortType?: SortType, key?: string) => {
      const sortedTableData = Utils.sortData<TableUser>(
        data,
        key ?? sortedColumn.key,
        sortType ?? sortedColumn.sortType
      );

      return sortedTableData;
    },
    [sortedColumn]
  );

  const onSortedColumnChange = (key: string, sortType: SortType) => {
    const sortedTableData = getSortedTableData(tableData, sortType, key);

    onSortChange(key, sortType);
    setTableData(sortedTableData);
    Utils.updateLocalStorageData(
      String(paginationState?.page),
      JSON.stringify(sortedTableData)
    );
  };

  const fetchData = useCallback(
    async (page?: number) => {
      setError(null);
      setFetching(true);
      try {
        const cachedData = Utils.getCachedData(String(page));
        if (cachedData) {
          setTableData(getSortedTableData(cachedData));
          page &&
            setPaginationState({ ...paginationState, page } as Omit<
              UsersResponse,
              "data"
            >);
        } else {
          const { data, ...rest } = await fetchUsers(page);
          const tableData = getSortedTableData(Utils.generateTableData(data));
          localStorage.setItem(String(rest.page), JSON.stringify(tableData));

          setPaginationState(rest);
          setTableData(tableData);
        }
      } catch (e) {
        setError(`Error fetching data: ${e}`); // Set error if fetch fails
      }
      setFetching(false);
    },
    [getSortedTableData, paginationState]
  );

  // fetched initial data
  useEffect(() => {
    if (!tableData.length) {
      fetchData();
    }
  }, [fetchData, tableData]);

  return (
    <SortedDataContext.Provider
      value={{
        data: tableData,
        pagination: paginationState,
        onSortedColumnChange,
        onPageChange: fetchData,
        error,
        isFetching,
      }}
    >
      {children}
    </SortedDataContext.Provider>
  );
};
