const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const sql = require('mysql');

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

app.get("/api/meetings/distinct", (req,res)=>{
db.query("SELECT DISTINCT room FROM meetings", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

app.get("/api/meetings/reservations", (req,res)=>{
db.query("SELECT * FROM meetings", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

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

// Below here is unused code that stays to help understand what is going on

app.get("/api/meetings/all", (req,res)=>{
db.query("SELECT * FROM meetings", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

app.get("/api/meetings/one", (req,res)=>{
    res.send({"message": "Success"});
});

app.get("/api/meetings/connect", (req,res)=>{
db.query("USE meetingdb", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send({"message": "Success"})
});    });

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

app.listen(PORT);
// // Route to get one post
// app.get("/api/getFromId/:id", (req,res)=>{
// const id = req.params.id;
//  db.query("SELECT * FROM posts WHERE id = ?", id, 
//  (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
//     res.send(result)
//     });   });

// // Route for creating the post
// app.post('/api/create', (req,res)=> {
// const username = req.body.userName;
// const title = req.body.title;
// const text = req.body.text;
// db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//    if(err) {
//    console.log(err)
//    } 
//    console.log(result)
// });   })

// // Route to like a post
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//    console.log(err)   } 
//    console.log(result)
//     });    
// });

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
// const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } }) })

// app.listen(PORT, ()=>{
//     console.log(`Server is running on ${PORT}`)
// })