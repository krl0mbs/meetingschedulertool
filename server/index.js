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

// app.get("/api/meetings/singleInfo", (req,res)=>{
//     const id = req.query.id;
//     console.log(id);
//     db.query(`SELECT * FROM roominfo WHERE id = ?`, id, (err,result)=> {
//         if(err) {
//             console.log(err)
//         } 
//         console.log(result)
//         res.send(result)
//     })
// })

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

app.get("/api/meetings/filterDisplay", (req,res)=>{
    db.query(`SELECT * FROM roominfo WHERE display = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        }
        console.log(result) 
        res.send(result)
    })
})

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

// app.get("/api/meetings/filterNetworkB", (req,res)=>{
//     db.query(`SELECT room_num FROM roominfo WHERE networkB = 1`, (err,result)=> {
//         if(err) {
//             console.log(err)
//         } 
//         console.log(result)
//         res.send(result)
//     })
// })

app.get("/api/meetings/filterVidtelecon", (req,res)=>{
    db.query(`SELECT * FROM roominfo WHERE vidtelecon = 1`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.send(result)
    })
})

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

// app.get("/api/meetings/filterBuidling2", (req,res)=>{
//     db.query(`SELECT room_num FROM roominfo WHERE building2 = 1`, (err,result)=> {
//         if(err) {
//             console.log(err)
//         } 
//         console.log(result)
//         res.send(result)
//     })
// })

// app.get("/api/meetings/filterBuilding3", (req,res)=>{
//     db.query(`SELECT room_num FROM roominfo WHERE building3 = 1`, (err,result)=> {
//         if(err) {
//             console.log(err)
//         } 
//         console.log(result)
//         res.send(result)
//     })
// })

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

app.post("/api/meetings/addMeeting", (req,res)=>{
    db.query("USE meetingdb", (err,result)=>{
        if(err) {
            console.log(err)
        } 
    })
    const room = req.body.room;
    const date = req.body.date;
    const email = req.body.email;
    const t7 = req.body.t7;
    const t75 = req.body.t75;
    const t8 = req.body.t8;
    const t85 = req.body.t85;
    const t9 = req.body.t9;
    const t95 = req.body.t95;
    const t10 = req.body.t10;
    const t105 = req.body.t105;
    const t11 = req.body.t11;
    const t115 = req.body.t115;
    const t12 = req.body.t12;
    const t125 = req.body.t125;
    const t13 = req.body.t13;
    const t135 = req.body.t135;
    const t14 = req.body.t14;
    const t145 = req.body.t145;
    const t15 = req.body.t15;
    const t155 = req.body.t155;
    const t16 = req.body.t16;
    const t165 = req.body.t165;
    const t17 = req.body.t17;
    db.query(`INSERT INTO meetingsUser (room, date, email, \`7\`, \`7.5\`, \`8\`, \`8.5\`, \`9\`, \`9.5\`, \`10\`, \`10.5\`, \`11\`, \`11.5\`, \`12\`, 
    \`12.5\`, \`13\`, \`13.5\`, \`14\`, \`14.5\`, \`15\`, \`15.5\`, \`16\`, \`16.5\`, \`17\`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
        ?, ?, ?, ?, ?, ?, ?, ?) `, room, date, email, t7, t75, t8, t85, t9, t95, t10, t105, t11, t115, t12, t125, t13, t135, t14, t145, t15, t155, 
        t16, t165, t17, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        console.log(result)
    })
})

app.get("/api/meetings/allRes", (req,res)=>{
    db.query(`SELECT * FROM meetingsUser`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/emailRes", (req,res)=>{
    const email = req.query.email;
    db.query(`SELECT * FROM meetingsUser WHERE email = ?`, email, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/distRes", (req,res)=>{
    db.query(`SELECT DISTINCT email FROM meetingsUser`, (err,result)=> {
        if(err) {
            console.log(err)
        } 
        res.send(result)
    })
})

app.get("/api/meetings/password", (req,res)=>{
    const email = req.query.email;
    db.query(`SELECT password FROM users WHERE email = ?`, email, (err,result)=> {
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