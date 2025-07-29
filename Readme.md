# 📌 Bajaj Finserv API Assignment – Full Stack Developer Intern


It processes an array and returns numbers (odd/even), alphabets, special characters, sum, and a concatenated string in the required format.

> Since this API is hosted on free service on render, so the first request might take up a minute or two because render freezes the free instances if it is sitting idle and starts them again when the first request comes 

## 🚀 Tech Stack

* **Node.js** (Runtime)
* **Express.js** (Framework)
* **CORS** (Cross-Origin Support)

## 📂 Project Structure

```bash
├── controllers/
│   └── data.controller.js     # Contains API logic
├── routes/
│   └── data.routes.js         # API routes
├── utils/
│   └── ApiResponse.js         # Standard response format
├── index.js                   # Entry point
├── package.json
└── README.md

```


## Hosted API URL

👉 Deployed URL : https://bajaj-task-assignment.onrender.com/

## API Endpoint
+ Post : /bhfl

```bash
Request body : 

{
  "data": ["a", "1", "334", "4", "R", "$"]
}

```

```bash
Response body ( Success ) : 

{
  "statusCode": 200,
  "data": {
    "is_success": true,
    "user_id": "anshul_sharma_29042004",
    "email": "anshul5010.be22@chitkarauniversity.edu.in",
    "roll_number": "2211985010",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
  },
  "message": "Data processed successfully",
  "success": true,
  "is_success": true
}

```
```bash
Response body ( Failure ) : 

{
  "statusCode": 400,
  "data": {
    "is_success": false,
    "user_id": "anshul_sharma_29042004",
    "email": "anshul5010.be22@chitkarauniversity.edu.in",
    "roll_number": "2211985010"
  },
  "message": "Please send the data as array",
  "success": false,
  "is_success": false
}

```

