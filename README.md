# Universal Store Take Home Assessment
This project is a take-home assignment for a Senior Full Stack Developer position at Universal Store. This repo contains three docker containers for three different microservices. 
- Catalog
- Inventory
- Frontend

All three services have been setup and configured to run via docker-compose.
docker-compose up --build

## Assumptions and Justifications
I assumed I was freely able to use libraries in the implementation. Therefore I decided to use React Query for data loading
and axios for network requests. This is a lot simpler and foolproof vs rolling my own implementation.

I also had issues running the already implemented test framework on the client side so I ended up refactoring it to use
ts-jest as its pretty straightforward to get working.

I put various env configs into the docker compose file as they weren't too sensitive such as the server and client urls.
But if these fields were more sensitive i'd extract them into an .env file that wouldn't be committed to source code and
add documentation to the readme as to how to get the application running and where to source the secrets.

I also implemented cors handling on the servers as they seemed to be missing them so I was unable to make client side requests.
It should be well configured and only allow requests from the desired client.

## Catalog
The catalog service is a simple REST API that provides a list of products. The service is written in Node.js and uses Express.js as the web framework. The service is configured to run on port 3000.
The service contains two main files: 
- app.ts: This file runs the express server that serves the API. You'll need to update it to implement a new /catalog endpoint
- seed.ts: This file inserts test data into the database. You'll need to update it to inject data matching whatever model you choose for the catalog.
### The catalog service provides the following endpoints that need to be implemented:
- GET /catalog - Returns a list of products
## Inventory
The inventory service is a simple REST API that provides the inventory of products. The service is written in Node.js and uses Express.js as the web framework. The service is configured to run on port 4000.
- app.ts: This file runs the express server that serves the API. This has already been implemented.
- seed.ts: This file inserts test data into the database. This has already been implemented.
### The inventory service provides the following endpoints:
- GET /inventory - Returns a list of inventory items
- GET /inventory/:sku - Returns a single inventory item by sku
## Product Landing Page
The frontend service is a simple React application that consumes the Catalog and Inventory services. The service is configured to run on port 8080.
The Product Landing Page service needs to be updated to display a list of products that are in stock. This will require querying both the catalog and inventory services then aggregating the data to determine the eligibility.

## Tasks to complete
- [x] Create a model for Catalog items.
- [x] Implement seed.ts so that it populates the database.
- [x] Implement the catalog service api so that it returns a list of all catalog items using the model you've created.
- [x] Update the PLP service to query your new catalog service on load.
- [x] Render the image, title, sku, remaining quantity and price of each item in the catalog if it has more than 0 stock.

## Assessment Criteria
- [ ] Clean, well-structured TypeScript code following best practices and conventions.
- [ ] Follow a test driven approach
- [ ] An elegant solution that minimizes tight coupling.
- [ ] Clear and comprehensive documentation of code and decisions made.
- [ ] Type annotations and strict typing.
