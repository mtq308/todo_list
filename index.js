import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

const taskArrayWork = [];
const taskArray = [];

app.get("/", (req, res) => {
    res.render("index.ejs", 
    {taskDisplay: taskArray});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", 
    {taskWorkDisplay: taskArrayWork});
});

app.post("/submit", (req, res) => {
    let taskCreated = req.body["task"];
    if (taskCreated) {
        taskArray.push(taskCreated);
    } else {
        console.log("Unable to push to array!");
    }
    res.render("index.ejs",
        { taskDisplay: taskArray });
});

app.post("/work/submit", (req, res) => {
    let taskCreated = req.body["taskWork"];
    if (taskCreated) {
        taskArrayWork.push(taskCreated);
    } else {
        console.log("Unable to push to work array!");
    }
    res.render("work.ejs", {taskWorkDisplay: taskArrayWork});
    console.log(taskArrayWork);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})