import { useContext } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ColumnSortAndOrderContext } from "contexts/ColumnSortAndOrderContext";
import { SortedDataContext } from "contexts/SortedDataContext";
import { TableColumnType, TableUser } from "allTypes";

import { DraggableColumn } from "./DraggableColumn";
import { TableFooter } from "./TableFooter";
import { Skeleton } from "./Skeleton";

export const DataTable = () => {
  const { data, error, isFetching } = useContext(SortedDataContext);
  const { columns } = useContext(ColumnSortAndOrderContext);

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  if (isFetching || !data?.length) {
    return <Skeleton />;
  }

  return (
    <div className="tableWrapper">
      <DndProvider backend={HTML5Backend}>
        <table className="fullWidth">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <DraggableColumn key={col.key} index={index} column={col} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item: TableUser, index) => (
              <tr key={index}>
                {columns.map(({ key }: TableColumnType) => (
                  <td key={key}>{item[key as keyof TableUser]}</td>
                ))}
              </tr>
            ))}
            <TableFooter />
          </tbody>
        </table>
      </DndProvider>
    </div>
  );
};
