// This file contains all SQL code that is passed to the MySQL server thorugh API calls

// These constants are used to ensure a local environment is achieved
const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const sql = require('mysql');

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Query used to update the availability for a room
app.post("/api/meetings/updateMeetings", (req,res)=>{
    db.query("USE meetingdb", (err,result)=>{
        if(err) {
            console.log(err)
        } 
    })
    console.log('hello');
    const room = req.body.room;
    const time = req.body.time.toString();
    console.log(room);
    console.log(time);
    db.query(`UPDATE meetings SET \`${time}\` = 1 WHERE ID = ?`, room, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
    })
})

// Gets all reservations for a room given the selected date
app.get("/api/meetings/selectDay", (req,res)=>{
    db.query("USE meetingdb", (err,result)=>{
        if(err) {
            console.log(err)
        } 
    })
    const date = req.query.day;
    console.log(date);
    db.query(`SELECT * FROM meetings WHERE date = ?`, date, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

// Deprecated API call to return all entries in the meetings table (can be used for debugging)
app.get("/api/meetings/all", (req,res)=>{
db.query("SELECT * FROM meetings", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Connects the node to the MySQL server
app.get("/api/meetings/connect", (req,res)=>{
db.query("USE meetingdb", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send({"message": "Success"})
});    });

// Deprecated API call to create entry in meetings table. Can be modified to create entries in other tables
app.post("/api/meetings/post", (req,res)=>{
const name = req.body.name;
console.log(name);
db.query("INSERT INTO meetings (name) VALUES (?)",[name], (err,result)=> {
    if(err) {
       console.log(err)
       } 
       console.log(result)
    })
})

// Returns all filter related attributes for all rooms
app.get("/api/meetings/allInfo", (req,res)=>{
    db.query("SELECT * FROM roominfo", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

// API CALLS BELOW THIS POINT ARE RELATED TO THE FILTER FUNCTION

// Gets all rooms with capacity greater than or equal to some variable x (min)
app.get("/api/meetings/filterCapacity", (req,res)=>{
    const min = req.query.min;
    console.log(min);
    db.query(`SELECT * FROM roominfo WHERE capacity >= ?`, min, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

// Gets all rooms with a display
app.get("/api/meetings/filterDisplay", (req,res)=>{
    db.query(`SELECT * FROM roominfo WHERE display = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        }
        console.log(result) 
        res.send(result)
    })
})

// Gets all rooms with the specified network
app.get("/api/meetings/filterNetwork", (req,res)=>{
    const net = req.query.net;
    db.query(`SELECT * FROM roominfo WHERE network = ?`, net, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

// Gets all rooms with video/telecon capabilities
app.get("/api/meetings/filterVidtelecon", (req,res)=>{
    db.query(`SELECT * FROM roominfo WHERE vidtelecon = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

// Gets all rooms in the specified building
app.get("/api/meetings/filterBuilding", (req,res)=>{
    const build = req.query.build;
    db.query(`SELECT * FROM roominfo WHERE building = ?`, build, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})


// Gets all rooms with the specified connectivity type
app.get("/api/meetings/filterConnectivity", (req,res)=>{
    const con = req.query.con;
    db.query(`SELECT * FROM roominfo WHERE connectivity = ?`, con, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

app.listen(PORT);