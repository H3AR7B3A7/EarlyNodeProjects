# Websocket

> mkdir websocket-example
> cd websocket-example
> touch index.js
> npm init -y
> npm install websocket

## Postman

- Start the server (in debug)

- In Postman:

> New -> Websocket Request

- Connect to:

> ws://localhost:8080

- Receive heartbeat in postman

- Send a simple text message

- Receive the message on the server

## In Browser Console

_This might not work due to security rules..._

let ws = new WebSocket("ws://localhost:8080")
ws.onmessage = message => console.log(`Message: ${message.data}`)