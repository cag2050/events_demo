import {EventEmitter} from "events"

let ee = new EventEmitter()
// addListener等价于on
// ee.addListener('message', function (text) {
ee.on('message', function (text) {
    console.log(text)
})
ee.emit('message', 'hello world')
