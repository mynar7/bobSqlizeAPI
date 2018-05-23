# bobSqlizeAPI
A test project for working with sequelize
This is a CRUD/REST test API. You can create, update, delete, and get JSON data.

## Usage
This site has NO frontend currently. There is no HTML!! You will have to use a tool like [Postman](https://www.getpostman.com/) to interact with the data. See "Routes" for route information.

When you hit a route, the response will be whatever sequelize returns by default, sent back as JSON data. 

A typical "get" response will look like this:
[
  {
  "id": 1,
  "name": "Valhalla",
  "age": 99999,
  "createdAt": "2018-05-23T00:27:30.000Z",
  "updatedAt": "2018-05-23T00:27:30.000Z"
  }
]

## Routes
To hit the api routes, attach the following to the end of this url: 
[https://awesome-bob-api.herokuapp.com/](https://awesome-bob-api.herokuapp.com/)

**Example:** to "get" all the data you would use [https://awesome-bob-api.herokuapp.com/api](https://awesome-bob-api.herokuapp.com/api)

* GET: 
  * /api
    * This returns all the data
  * /api/young
    * This returns all data with age <= 100
* POST: 
  * /api/new
    * this route allows an insert. Provide **name**, and **age** parameters, id and timestamps are auto-generated
* PUT: 
  * /api/:id#
    * allows editing of an entry. Insert the id# in ":id#", (eg, when id = 10, use: /api/10). Please provide name and age as above
* DELETE: 
  * /api/:id#
    * acts the same as post, provide an id# to delete
