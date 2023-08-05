import { Box, Typography } from "@mui/material";

import { DataTable } from "./Table";
import { CURRENT_USER, TABLE_COLUMNS } from "allConstants";
import { useContext } from "react";
import { ColumnSortAndOrderContext } from "contexts/ColumnSortAndOrderContext";
import { updateLocalStorageData } from "utils";

export const Dashboard = ({ onLogoutClick }: { onLogoutClick: () => void }) => {
  const { columns, onColumnOrderChange } = useContext(
    ColumnSortAndOrderContext
  );
  const onSave = () => {
    localStorage.setItem("order", JSON.stringify(columns));
  };
  const onReload = () => {
    updateLocalStorageData("order", JSON.stringify(TABLE_COLUMNS));
    onColumnOrderChange(TABLE_COLUMNS);
  };
  const onLogout = () => {
    onLogoutClick();
  };

  return (
    <Box>
      <Box className="header">
        <span>
          {/* hardcoding it since no login logic is in place */}
          username: <i>@{CURRENT_USER.username}</i>
        </span>
        <Box className="button" onClick={onLogout}>
          Logout
        </Box>
      </Box>
      <Box className="container">
        <Box className="flex spaceBetween fullWidth" pt={3} pb={2}>
          <Typography variant="h4">Registered Users</Typography>
          <Box className="spacing-medium flex justifyRight">
            <Box className="button" onClick={onSave}>
              Save
            </Box>
            <Box className="button" onClick={onReload}>
              Reload
            </Box>
          </Box>
        </Box>
        <Box width="100%">
          <DataTable />
        </Box>
      </Box>
    </Box>
  );
};
