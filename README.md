# Desafio-Bemobi
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

 - Make sure you have Node.js and npm installed on your machine.
 - Make sure you have Docker and Docker Compose installed on your machine.

### Installation

1. Clone the repository.

2. Create a .env in the project root with your desired port. Copy the .env.example.

2. run 
```sh
   npm install
   docker-compose up -d
   npm run start
```

3. test
```sh
   npm run test
```

### Available routes
   - ```put('/api/create?url={url}&CUSTOM_ALIAS={customAlias}')``` Create a short URL.
   - ```get('/api/retrieve/:shortUrl')``` Access the original URL via the alias.
   - ```get('/api/top')``` Get the 10 most accessed URL's.
