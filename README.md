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
   - ```get('/u/:shortUrl')``` Access the original URL via the alias.
   - ```get('/api/top')``` Get the 10 most accessed URL's.


### Web Diagram
#### 1. Shorten URL
![Shorten URL](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgU2hvcnRlbiBVUkwKCkNsaWVudC0-QXBpOiBSZXF1aXNpdGEgbyBlbmN1cnRhbWVudG8gZGEAKQVBcGktPkRhdGFiYXNlOiBWZXJpZmljYSBzZSBqw6EgZXhpc3RlIGFsaWFzIG5vIGJhbmNvACUQQ2FzbyBuw6NvACkGYSwgc2FsdmEgAF0FAG4IZGEAZgYAgRgGAC4Hc2FsdmUATwksIHJldG9ybgAoEg&s=default)

#### 2. Retrieve URL
![Retrieve URL](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgUmV0cmlldmUgVXJsCgpDbGllbnQtPkFwaTogUmVxdWlzaXRhIGEgVVJMIG9yaWdpbmFsIGEgcGFydGlyIGRvIGFsaWFzCkFwaS0-RGF0YWJhc2U6IFByb2N1cmEgbyBvYmpldG8gbmEgYmFzZSBkZSBkYWRvcwoAJAgAZAdDYXNvIGV4aXN0YSwgcmV0b3JuADQKAFgGAIEVBjogUmVkaXJlY2lvbgCBAgUAgQ0O&s=default)
