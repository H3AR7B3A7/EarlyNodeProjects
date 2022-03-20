const http = require("http")
const WebSocketServer = require("websocket").server
let connection = null

const httpServer = http.createServer((req, res) => {
    console.log("Received request")
})

const webSocket = new WebSocketServer({
    httpServer: httpServer
})

webSocket.on("request", request => {
    connection = request.accept(null, request.origin)
    connection.on("open", () => {
        console.log("Connection opened")
    })
    connection.on("close", () => {
        console.log("Connection closed")
    })
    connection.on("message", message => {
        console.log(`Message received: ${message.utf8Data}`)
    })

    sendHeartbeat()
})

httpServer.listen(8080, () => {
    console.log("Server started")
})

function sendHeartbeat() {
    connection.send(`Heartbeat: ${new Date().toISOString()}`)
    setTimeout(sendHeartbeat, 3000)
}
