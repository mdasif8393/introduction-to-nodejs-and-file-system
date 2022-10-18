const fs = require('fs');


const readStream = fs.createReadStream('./data.txt');



readStream.on('data', (chunk) => {
    console.log('..........');
    console.log(chunk)
})

readStream.on('open', () => {
    console.log("Stream is open")
})

setTimeout(() =>{
    readStream.pause('pause')
    console.log("Stream is paused now")
},15)

setTimeout(() =>{
    readStream.resume();
    console.log("Stream is resuming now")
},8000)