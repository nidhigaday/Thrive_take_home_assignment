import "./App.css";

import { useState, useEffect } from "react";

import { Login } from "pages";
import { Dashboard } from "components";
import { ColumnSortAndOrderContextProvider } from "contexts/ColumnSortAndOrderContext";
import { SortedDataContextProvider } from "contexts/SortedDataContext";
import { CURRENT_USER } from "allConstants";

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(
    Boolean(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (isLoggedIn && !currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(CURRENT_USER));
    }

    if (!isLoggedIn) {
      localStorage.clear();
    }
  }, [isLoggedIn]);

  return (
    <div id="App" className="fullViewHeight fullwidth">
      {isLoggedIn ? (
        <ColumnSortAndOrderContextProvider>
          <SortedDataContextProvider>
            <Dashboard onLogoutClick={() => setLoggedIn(false)} />
          </SortedDataContextProvider>
        </ColumnSortAndOrderContextProvider>
      ) : (
        <Login onClick={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
