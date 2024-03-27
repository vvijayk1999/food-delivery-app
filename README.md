# Food Delivery App

**_NOTE:_**  The API is now live at [https://food-delivery-app-5fyj.onrender.com](https://food-delivery-app-5fyj.onrender.com)

## Description

This food delivery app backend is designed to provide RESTful API endpoints for calculating dynamic delivery costs based on factors such as distance, item type, and delivery zone. It uses Node.js and PostgreSQL to offer scalable and efficient backend service.

## Features

- Dynamic pricing based on delivery distance, item type, and zone.
- REST API for calculating delivery costs.
- Input validation for API requests.
- Integration with PostgreSQL.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) (version 20.x or later recommended)
- [PostgreSQL](https://www.postgresql.org/download/) (version 16.x or later recommended)
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
    * Use the schema and data provided in the `init.sql` file to set up your tables.
    * Configure your database connection details in `.env` based on `.env.example`.

4. Run the server:
   ```bash
   npm start
   ```

## API Documentation

The API endpoints for calculating delivery costs are documented below:

### Calculate Delivery Cost

* POST /api/calculate-delivery-cost
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

  
