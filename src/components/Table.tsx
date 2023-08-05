import { useContext } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, Skeleton } from "@mui/material";

import { ColumnSortAndOrderContext } from "contexts/ColumnSortAndOrderContext";
import { SortedDataContext } from "contexts/SortedDataContext";
import { TableColumnType, TableUser } from "types";

import { DraggableColumn } from "./DraggableColumn";
import { TableFooter } from "./TableFooter";

export const DataTable = () => {
  const { data, error } = useContext(SortedDataContext);
  const { columns } = useContext(ColumnSortAndOrderContext);

  if (error) {
    return <Box>Something went wrong! Please try again.</Box>;
  }

  if (!data?.length) {
    return <Skeleton variant="rounded" width="100%" height={700} />;
  }

  return (
    <Box sx={{ border: "1px solid #898989", borderRadius: 2 }}>
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
    </Box>
  );
};
