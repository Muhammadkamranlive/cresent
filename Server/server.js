const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const employeeRouter = require('./Routes/Employee');
//router
app.use(employeeRouter);

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
// get request
// post request
//put request
//delete request
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../../Cresent/cresent/Public');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });
app.post('/upload',upload.single('photo'), (req, res) => {
    const photo = req.file.filename;
    res.status(200).send(photo);
});
//mongoose.connect('mongodb://localhost/cresent');
mongoose.connect('mongodb://localhost:27017/cresent').then(() => {
    console.log('connected to database');
}).catch(() => {
    console.log('connection failed');
});
//sererver config
app.listen(5000,()=>{
    console.log('server is running on port 5000');
});