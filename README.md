## Thrive take home assignment

Welcome to Thrive take home assignment.

## Completed by

Name: **Nidhi Gaday**\
Email: **nidhi.gaday@gmail.com**

> Please make sure your system has stable version of Node installed. This project was developed with following:
>
> - Node: **_v18.7.0_**
> - npm: **_v9.8.1_**

## To start the project:

> **_This project requires mock data and a server to support the app. Please follow the instructions below:_**

1. `npm run generate`: Generates the mock data
2. `npm run server`: initiates the server at http://localhost:5000
3. `npm run start`: Runs the app in development mode. [http://localhost:3000](http://localhost:3000)

# System Design

## Requirements:

Build a data table application using React and Typescipt.

- build a table for 500 data rows using fake data from [casual](https://www.npmjs.com/package/casual) library
- table must have these columns - is, firstName, lastName, email, city, refisteredDate, fullName, dsr (days since registered)
- able to click and drag the columns
- each column should be sortable (client side only)
- pagination
- a library or custom table can be used
- login with a mock user
- save column order to localstorage and reset it

## Architecture

<img width="943" alt="image" src="https://github.com/nidhigaday/Thrive_take_home_assignment/assets/10281667/771cdb9b-5a6e-46fe-bfc5-4ef4c870bf51">

#### COMPONENTS:

1. Server: Provides with an api to return data
2. Controller: Controls the flow of data within application and makes network api requests
3. Client Store: Stores data needed by entire application
   - table data
   - current page
   - column sorting
   - column order
4. UI: Displays required content
   - table rows
   - pagination
   - column dragability
   - column sortability
   - buttons to save/reset column order

## Data Modals

**_Backend Server:_**

Registered User data modal

- id
- first name
- last name
- email
- city
- registered date

**_Client:_**

Registered User data modal:

- id
- first name
- last name
- full name
- email
- city
- registered date
- dsr (date since registered)

Table sorting data modal:

- column id
- sort type (asc, desc)

Table order data modal:

- column id
- order

## Interface (API) Definition

| Source        | Destination | Type       | Functionality               |
| ------------- | ----------- | ---------- | --------------------------- |
| Backend erver | Controller  | HTTP       | fetch raw table data        |
| Controller    | UI          | Javascript | handles data flow           |
| UI            | controller  | Javascript | handles client interactions |

## Optimization & User experience

- Code spilitting: increases performance by making components more granular and reduce re-render range
- loading indicators and skeletons: until data is available to render, a skeleton is implemented to display, improves performance, since this is a light weight app, the impact is not significant
- error handling: better ux and easier to debug, handles network requests
- memoization
- caching: in this particular assignment, since its a light weight app, localstorage is used to cache sorted table data. If a same page is requested, it populates data from cache, improving app performance
- all cached data in localstorage is cleared when user logs out ensuring secure session

**_PAGINATION_**

There are 3 types of paginations:

1. Infinite Scroll
2. Offset based

> Chosen Method: Offset based

Reason:

- Infinite scroll is best suited for continuous fetching. Also, since we are performing sorting on client side, it will require to sort through `n` number of items which increases the lag because of increased time complexity [O(nlgn)]
- Cursor based pagination is the best approach when we have data that is being updated frequently. It sustains the location in db and makes user experience more seamless. In this assignment, we are using a mock data and not SQL request, I chose to not use this. Nevertheless, this would be my preferred method.
- Offset based is the best approach here, since we have a cap on the number of data entries we will require and sorting needs to be done on visible page entries only.

## Testing

I did not add any unit/integration/e2e tests for the application.
