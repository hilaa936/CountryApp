## ASP.NET Country API

### Store Countries in Server

i choosed to store the countries list with 'in-memory' collection. because:

- The data is constant and doesn't change frequently, so there's no need for dynamic updates or querying capabilities.
- An in-memory collection provides fast data access and retrieval, which is suitable for small datasets like the list of countries.
- It doesn't require additional dependencies or configuration files, keeping the solution simple and lightweight.

### Best Practice

I Try to use Best Practice for Implementation as much as possible, Although it was not necessary in this simple case.
so I encapsulate the data-fetching logic within a separate service or repository class instead of directly within the controller. This allows for better separation of concerns and improves code maintainability. The controller can then depend on the service or repository through dependency injection.

## React Country App

the app search countries and get details, route to new page for country details on click the country name. using `react-router-dom`

### react-query library

I used `react-query` to handle data fetching and caching. React Query is a popular library for managing server state in React applications, including data fetching, caching, and synchronization.
