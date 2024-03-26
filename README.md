# Food Delivery App

## Description

This food delivery app backend is designed to provide RESTful API endpoints for calculating dynamic delivery costs based on factors such as distance, item type, and delivery zone. It uses Node.js and PostgreSQL to offer scalable and efficient backend service.

## Features

- Dynamic pricing based on delivery distance, item type, and zone.
- REST API for calculating delivery costs.
- Input validation for API requests.
- Integration with PostgreSQL for data persistence.

## Getting Started

### Prerequisites

- Node.js (version 12.x or later recommended)
- PostgreSQL (version 12.x or later recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/vvijayk1999/food-delivery-app.git
   cd food-delivery-app
   ```

2. Install dependencies:
   
   ```bash
   npm install
   ```

3. Set up the database:
    * Create a PostgreSQL database.
    * Use the schema provided in schema.sql to set up your tables.
    * Configure your database connection details in `.env` based on `.env.example`.

4. Run the server:
   ```bash
   npm start
   ```

## API Documentation
The API endpoints for calculating delivery costs are documented below:

### Calculate Delivery Cost
* POST /api/delivery/cost
* Body:
  ```json
  {
    "zone": "central",
    "organization_id": "005",
    "total_distance": 12,
    "item_type": "perishable"
  }
  ```
* Response:
  ```json
  {
    "total_price": 20.5
  }
  ```

## Testing

Run the automated test suite using the following command:

```bash
npm test
```

## Deployment
Instructions for deploying the application to a production environment.

* Ensure environment variables are set for production in .env.
* More details on deployment steps specific to the platform (e.g., Heroku, AWS).\
  
