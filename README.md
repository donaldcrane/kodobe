# kodobe

Kodobe ...
# Documentation

A detailed documentation of the api can be found here: [API Documentation](https://documenter.getpostman.com/view/11971882/UVXqEsXN)

Heroku url: [Click here](https://donald-kodobe.herokuapp.com/)

Title : Dynamic Data Mapper
Create a web service that is accessible via REST API with JSON data transfer. The
service should support the following functionality:

1. Supports creation of a data specification for an external data for such that it
will map fields of the external data to data types (Restrict Data type to string,
integer and timestamp)

2. Supports retrieval of data for a particular Data Provider

3. supports definition of query rules to retrieve from data using these conditions

* eqc: equalsIgnoreCase (string)
* eq: equalsTo (timestamp and integer)
* lt: lessThan timestamp and integer)
* gt: greaterThan )any field timestamp and integer

**Run Project Locally**

* Clone the project
* cd into the project's folder and run npm install to install dependencies
* Create a .env file and add these keys (PORT) and (DATABASE_URL)
* Run npm run dev to start the server


# HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods:

* POST Create a resource
* GET Get a resource or list of resources
* For POST, the body of your request must be a JSON payload.
