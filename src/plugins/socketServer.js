"use strict";

const http = require('http');
const fs =require('fs');
const socketio = require('socket.io');
const express = require('express');
const multer = require('multer');


const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

// __dirname = 현제폴더 주소
// use(express.static(__dirname+'../public'));


server.listen(3000,function () {
   console.log('serverOpen');
});



(function (app) {

    app.get('/',function (request,response) {
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('<h1>Hello World</h1>')
    });
    
    app.post('/upload',function (request,response) {

    })

}(app));

(function(io){
    // Client 처음 시작후 바로연결
    io.on('connection',function (socket) {
        console.log("연결되었습니다");

        (function(socket){
            socket.on('message', function(data){
                console.log(data.name);
                console.log(data.message);
            });
        }(socket));

        (function (socket) {
            socket.on('fileupload',function (data) {
                console.log('파일업로드');
                console.log(__dirname);
            })
        }(socket));
    });
}(io));








