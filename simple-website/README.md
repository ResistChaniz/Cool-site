# Simple Website

This project is a simple static website that demonstrates the use of HTML, CSS, and JavaScript. It includes a local server setup using Node.js to serve the static files.

## Project Structure

```
simple-website
├── public
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── styles.css    # Styles for the website
│   └── js
│       └── main.js       # JavaScript for interactivity
├── server
│   └── server.js         # Node.js server setup
├── package.json          # npm configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) comes with Node.js.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-website
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the local server, run the following command:

```
node server/server.js
```

The server will start and listen on port 3000.

### Accessing the Website

Once the server is running, you can access the website by navigating to:

```
http://localhost:3000
```

If you are using Codespaces, you can access it through the port forwarding feature on port 3000.