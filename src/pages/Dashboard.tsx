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
        <div className="flex spaceBetween fullWidth pageTitle">
          <h2>Registered Users</h2>
          <div className="flex justifyRight alignCenter spacing-medium">
            <button className="button" onClick={onSaveToStorage}>
              Save
            </button>
            <button className="button" onClick={resetColumnOrder}>
              Reload
            </button>
          </div>
        </div>
        <div className="fullWidth fullHeight">
          <DataTable />
        </div>
      </div>
    </div>
  );
};
