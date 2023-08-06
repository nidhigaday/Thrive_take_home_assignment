/**
 * json-server package reads the data from the db.json file and sets up RESTful API endpoints based on the data keys.
 * Since the db.json file contains the users array, json-server automatically creates an endpoint /users for the users data.
 */

import { UsersResponse } from "../allTypes";

const baseUrl = "http://localhost:5000";

export const fetchUsers = async (page = 1) => {
  const url = new URL(`${baseUrl}/users`);
  url.searchParams.append("page", String(page));

  try {
    const response = await fetch(String(url));
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: UsersResponse = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching data", e);
    throw e;
  }
};
