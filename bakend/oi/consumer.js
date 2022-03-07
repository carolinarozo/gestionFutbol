module.exports = {
    start: (io) => {
        io.on('connection', (socket) => {
            console.log('user connected' + socket.id)
            socket.on('disconnect', () => {
                console.log('user desconnect' + socket.id)

            })
            socket.on('newProducto', (data) => {
                console.log(data)
                io.sockets.emit('creadoProducto', data)
            })



        })

    }
}