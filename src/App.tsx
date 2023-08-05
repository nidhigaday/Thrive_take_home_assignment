import "./App.css";

import { Suspense, useState, useEffect } from "react";

import { Login } from "pages";
import { FallbackLoading, Dashboard } from "components";
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
    <Suspense fallback={<FallbackLoading />}>
      <div id="App">
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
    </Suspense>
  );
}

export default App;
