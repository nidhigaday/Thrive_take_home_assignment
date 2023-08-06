import { useContext } from "react";

import { DataTable } from "components";
import { CURRENT_USER } from "allConstants";
import { ColumnSortAndOrderContext } from "contexts/ColumnSortAndOrderContext";

export const Dashboard = ({ onLogoutClick }: { onLogoutClick: () => void }) => {
  const { resetColumnOrder, onSaveToStorage } = useContext(
    ColumnSortAndOrderContext
  );

  return (
    <div>
      <div className="header">
        <span>
          {/* hardcoding it since no login logic is in place */}
          username: <i>@{CURRENT_USER.username}</i>
        </span>
        <button className="button light" onClick={onLogoutClick}>
          Logout
        </button>
      </div>
      <div className="container">
        <div className="flex spaceBetween fullWidth" pt={3} pb={2}>
          <h4>Registered Users</h4>
          <div className="flex justifyRight spacing-medium">
            <button className="button" onClick={onSaveToStorage}>
              Save
            </button>
            <button className="button" onClick={resetColumnOrder}>
              Reload
            </button>
          </div>
        </div>
        <div className="fullWidth">
          <DataTable />
        </div>
      </div>
    </div>
  );
};
