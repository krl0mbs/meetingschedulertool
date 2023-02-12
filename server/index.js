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

app.get("/api/meetings/allInfo", (req,res)=>{
    db.query("SELECT * FROM roominfo", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/allIds", (req,res)=>{
    db.query("SELECT id, room_num FROM roominfo", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/singleInfo", (req,res)=>{
    const id = req.query.id;
    console.log(id);
    db.query(`SELECT * FROM roominfo WHERE id = ?`, id, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

app.get("/api/meetings/filterCapacity", (req,res)=>{
    const min = req.query.min;
    console.log(min);
    db.query(`SELECT room_num FROM roominfo WHERE capacity >= ?`, min, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

app.get("/api/meetings/filterDisplay", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE display = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/filterNetworkA", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE networkA = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/filterNetworkB", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE networkB = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/filterVidtelecon", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE vidtelecon = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/filterBuilding1", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE building1 = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/filterBuidling2", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE building2 = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/filterBuilding3", (req,res)=>{
    db.query(`SELECT room_num FROM roominfo WHERE building3 = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
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