import { Box, Typography } from "@mui/material";

import { DataTable } from "./Table";
import { CURRENT_USER } from "allConstants";
import { useContext } from "react";
import { ColumnSortAndOrderContext } from "contexts/ColumnSortAndOrderContext";

export const Dashboard = ({ onLogoutClick }: { onLogoutClick: () => void }) => {
  const { resetColumnOrder, onSaveToStorage } = useContext(
    ColumnSortAndOrderContext
  );

  return (
    <Box>
      <Box className="header">
        <span>
          {/* hardcoding it since no login logic is in place */}
          username: <i>@{CURRENT_USER.username}</i>
        </span>
        <button className="button light" onClick={onLogoutClick}>
          Logout
        </button>
      </Box>
      <Box className="container">
        <Box className="flex spaceBetween fullWidth" pt={3} pb={2}>
          <Typography variant="h4">Registered Users</Typography>
          <Box className="flex justifyRight spacing-medium">
            <button className="button" onClick={onSaveToStorage}>
              Save
            </button>
            <button className="button" onClick={resetColumnOrder}>
              Reload
            </button>
          </Box>
        </Box>
        <Box width="100%">
          <DataTable />
        </Box>
      </Box>
    </Box>
  );
};
