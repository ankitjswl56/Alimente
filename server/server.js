const express  = require('express')
const app = express()

const jwt = require('jsonwebtoken');

const config = require('../server/config/config').get(process.env.NODE_ENV)

app.use(express.static('client/build'))


const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})

const mydata = mongoose.model('Allmenu',mongoose.Schema(),'allmenu')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
app.use(bodyParser.json())
app.use(cookieParser())

const bcrypt = require('bcrypt');

const { User } = require('./models/user');
const {Contactusinfo} = require('./models/contactusform');
const { Cart } = require('./models/usercart');



app.post('/api/usersignup',(req,res)=>{
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phonenumber : req.body.phonenumber
    })
    user.save((err,doc)=>{
        if(err) return res.send({
            signupstatus : false,
            message: err
        })
        if(!doc) return res.send({
            signupstatus : false,
            message: 'Something went wrong'
        })
        const token = jwt.sign(user._id.toHexString(),config.SECRET)
        user.token = token
        user.save()
        res.cookie('resloginauth', token)  
        res.send({
            loginauth:true,
            email:user.email,
            id:user._id
        })
    })
})

app.post('/api/userlogin',(req,res)=>{
    const userdata = {
        email : req.body.email,
        password : req.body.password
    }
    User.findOne({"email" : userdata.email},(err,user)=>{
        if(err) return res.send(err)
        if(!user) return res.send({
            loginauth : false,
            message: 'User Not Registered'
        })
        if(user){
            bcrypt.compare(userdata.password,user.password,(err,doc)=>{
                if(err) return res.send(err)
                if(!doc) return res.send({
                    loginauth : false,
                    message: 'incorrect password'
                })
                const token = jwt.sign(user._id.toHexString(),config.SECRET)
                user.token = token
                user.save()
                res.cookie('resloginauth', token)  
                res.status(200).send({
                    loginauth:true,
                    email:user.email,
                    id:user._id
                })
            })
        }
    })
})

app.get('/api/isauth',(req,res)=>{
    if(!req.cookies.resloginauth) return res.send({
        loginauth : false,
        message : 'Not authorized'
    })
    const token = req.cookies.resloginauth
    const userid = jwt.verify(token,config.SECRET)
    User.findOne({'token' : token, '_id' : userid},(err,user)=>{
        if(err) return res.send(err)
        if(!user) return res.send({
            loginauth : false
        })
        res.send({
            loginauth : true,
            userid : user._id,
            name : user.name,
            email : user.email,
            phonenumber : user.phonenumber,
            message : 'authorized'
        })
    })
})

app.get('/api/logout',(req,res)=>{
    const token = req.cookies.resloginauth
    const userid = jwt.verify(token,config.SECRET)
    User.findOne({"_id" : userid, "token" : token },(err,user)=>{
        if(err) return res.send(err)    
        if(!user) return res.send('invalid token')
        user.update({$unset : { token : 1}},(err,user)=>{
            if(err) return res.send(err)
            return user
        })
        user.save()
    })
    res.send({
        loginauth:false,
        message : "Successfully logged out"
    })
    // res.send('logged out')
})



app.get('/api/menu',(req,res)=>{
    mydata.find((err,doc)=>{
        if(err) return res.send(err)
        res.send({
            menu : doc
        })
    })
})


app.post('/api/contactusform',(req,res)=>{
    const contactusinformation = new Contactusinfo({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phonenumber : req.body.phonenumber,
        message : req.body.message
    })
    contactusinformation.save((err,doc)=>{
        if(err) return res.send({
            messagesent : false,
            message : err
        })
        res.send({
            messagesent : true,
        })
    })
    
})

app.post('/api/usercart',(req,res)=>{
    const ordered = new Cart({
        userid : req.body.userid,
        fooddetail : req.body.fooddetail,
        totalprice : req.body.totalprice
    })
    ordered.save((err,doc)=>{
        if(err) return res.send({
            orderconfirm : false,
            message : `Something went wrong: ${err}`
        })
        res.send({
            orderconfirm : true,
            doc : doc
        })
    })
})


app.get('/api/cart',(req,res)=>{
    const token = req.cookies.resloginauth
    const userid = jwt.verify(token, config.SECRET)
    Cart.find({"userid" : userid},(err,doc)=>{
        if(err) return res.send({
            userorders : false,
            message : `Error ${err}`
        })
        res.send({
            userorders : true,
            details : doc
        })
    })
})

if(process.env.NODE_ENV === 'production'){
    const path = require('path')
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}

app.listen(3001)