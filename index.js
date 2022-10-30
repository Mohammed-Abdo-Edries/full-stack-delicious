const express = require('express')
const path = require ('path')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "first", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("*", async(req, res) => {
    res.sendFile(path.join(".../",__dirname, "first", "build", "index.html"))
    res.status(200);
});

app.listen(PORT,() =>{
    console.log('listening on '+ PORT)
})
