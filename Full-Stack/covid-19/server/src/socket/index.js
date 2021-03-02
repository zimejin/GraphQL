import socket from 'socket.io'
import intiHttp from 'http'
import app from '../../src'


const http = intiHttp.createServer(app)
const io = socket(http)

io.on('connection', (socket) => {
  console.log('client connected');
  dataUpdate(socket);
});

function dataUpdate(socket) {
  socket.emit('dataupdate', 
  Array.from({length: 8}, 
  ()=> Math.floor(Math.Random() * 40)))

  setTimeout(()=> {
    dataUpdate(socket)
  }, 2000)
}