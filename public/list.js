let socket = io();
let roomList = document.getElementById("room-list");

document.addEventListener("DOMContentLoaded", () =>{
  socket.emit("connection");
  var nickName = prompt("Nickname : ");
  localStorage.setItem('nickname', nickName);
});

socket.on("roomlist", rooms =>{
  let li = document.createElement("li");
  rooms.forEach((room, i) => {
    li.innerHTML = `${room}`;
    roomList.append(li);
  });
});

socket.on("createRoom", (roomName)=>{
  localStorage.setItem("room", roomName);
  location.href = `${location.origin}/main.html`;
});

socket.on("join", (roomName)=>{
  localStorage.setItem("room", roomName);
  location.href = `${location.origin}/main.html`;
})

roomList.addEventListener("click", (e)=>{
  let roomName = e.target.innerHTML; 
  console.log(e.target.innerHTML);
  socket.emit("join", roomName);
})


document.getElementById("button").addEventListener("click", () =>{
  var roomName = prompt("Room name:");
  socket.emit("createRoom", roomName);
});

