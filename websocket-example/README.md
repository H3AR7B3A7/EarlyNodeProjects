# Websocket

This is a very basic websocket implementation.
The objective was to explore websockets using Node.

## Project Creation

> mkdir websocket-example
> cd websocket-example
> touch index.js
> npm init -y
> npm install websocket

## Start Server

> npm start

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

---

Date of creation: 3-20-2022
