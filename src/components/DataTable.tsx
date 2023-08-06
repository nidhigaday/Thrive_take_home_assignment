import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DraggableColumn } from "./DraggableColumn";
import { TABLE_COLUMNS } from "../allConstants";
import { TableUser, TableColumnType } from "../allTypes";
import { TableFooter } from "./TableFooter";

export const DataTable = () => {
  const columns = TABLE_COLUMNS;
  return (
    <div style={{ border: "1px solid #898989", borderRadius: 2 }}>
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
            {[].map((item: TableUser, index) => (
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
