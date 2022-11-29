const http = require("http");
const express = require("express");
const app = express();
const io = require('socket.io');
// const io2 = require('socket.io')(require("http").createServer(app));

const httpServer = http.createServer(app).listen(4000);
// 4000번 포트에서 서버를 오픈한다.

const socketServer = io(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

// socketServer.on('connect');
socketServer.on('connect', (socket) => {
	socket.on('test', (req) => {
		console.log(req);
	});

	socket.on('matchJoin', (gameSeq) => {
		console.log("join " + gameSeq);
		socket.join(gameSeq);
		// console.log(socket.rooms);
	})

	socket.on('matchInfoUpdate', (gameSeq, gameInfo) => {
		console.log("seq " + gameSeq);
		console.log("info " + gameInfo.score1);
	})

	socket.on('update',(gameSeq, matchInfo) => {
		console.log("seq " + gameSeq);
		console.log("info " + matchInfo.score1);
		// io(httpServer).to(gameSeq).emit('update2', matchInfo);
		// socket.to(gameSeq).emit('update2', matchInfo);
		// socket.to(gameSeq).emit("update2", matchInfo);
		// socket.broadcast.emit('update2', matchInfo);
		// socket.emit('update2', matchInfo);
		// socketServer.to(gameSeq).emit('update2', matchInfo);
		// socket.to(gameSeq).emit('update2', matchInfo);
		let result = gameSeq;
		socketServer.to(result).emit('update2', matchInfo);
	})
});

socketServer.on('disconnect', (socket) => {
	console.log("disconnect");
})