// IMPORTING REQUIRED MODULES

require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require('express');
const path = require('path');
const app = express();
// const authRoute = require("./routers/auth");
const foods = require("./routers/food-routes.js");
const users = require("./routers/user-routes.js");
const cors = require("cors");
const passport = require("passport");
// const cookieSession = require("cookie-session");
const session =require( 'express-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate=require("mongoose-findorcreate");
const jwt=require("jsonwebtoken")

// BY HASHING AND SALTING WITH BCRYPT
const bcrypt=require("bcrypt");
const saltRounds=10;
// import User from './usermodel';



app.use(express.json())

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended:true
})
);
app.use("/canteen/food", foods);
app.use("/canteen/user", users);

// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["nightcanteen"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))
app.use(passport.initialize());
app.use(passport.session());




const userSchema=new mongoose.Schema({
  name:String,
    email:String,
    password:String
    // secret:String
    // googleId:String
});

// userSchema.plugin(findOrCreate)
const User=new mongoose.model("User",userSchema);

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		methods: "GET,POST,PUT,DELETE",
// 		credentials: true,
// 	})
// );
passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
passport.use(
	new GoogleStrategy(
		{
			clientID: "560528787084-3vs89teui1dglhv8i4t2tt0v9l41vfdv.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/home",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
      console.log(profile);
		}
	)
);


// app.use("/auth", authRoute);


// SELECTING THE PORT
const port = 5000;

// IMPORTING SCHEMA OF FOOD ITEMS FROM "model.js"
const Menu = require("./model.js");



app.use(express.static("public"));
app.set('views',path.join(__dirname,'views/pages'));
app.set("view engine","ejs");


app.use(bodyParser.urlencoded({
  extended: true
}));




app.post("/register",function(req,res){
  // console.log(req.body);
  const {name,email,password}=req.body
  
  bcrypt.hash(req.body.password,saltRounds,async function(err,hash){
    const newUser=new User({
      name:req.body.name,
      email:req.body.email,
      password:hash
    });
    // console.log(req.body)
     await newUser.save().then(console.log("SAVED"))
     console.log({newUser})
     let token
     try{
       token = jwt.sign({
         name: name,
         email:email
        },process.env.SECRET,{expiresIn:'1h'})
        console.log(token)
      } catch (err){
        (console.log("Signing up failed, please try again", 500))
      }
      
      
      res.status(201).json({ name:newUser.name,email:newUser.email,token: token})
    });
    // User.register({username:req.body.username},req.body.password,function(err,user){
      //     if(err){
        //         console.log(err);
        //         res.redirect("/register");
        //     }else{
          //         passport.authenticate("local")(req,res,function(){
            //             res.redirect("/secrets");
            //         })
            //     }
            // })
          }
          );
          
          app.post("/login",function(req,res){
            const username=req.body.username;
            // const password=md5(req.body.password);   BY HASHING
            const password=req.body.password
            User.findOne({email:username}).then(function(foundUser){
              // BY HASHING
              // if(foundUser.password===password)
              // {
                //     res.render("secrets");
                // }
                bcrypt.compare(password,foundUser.password,function(err,result){
                  if(result===true){
                    // res.redirect("/home");
                  }else{
                    res.json("TRY AGAIN")
                  }
                })
              
            
              
    let token
    try{
        token = jwt.sign({
        name: foundUser.name,
        email: foundUser.email
    }, process.env.SECRET, {
        expiresIn: '1h',
    })
    } catch (err){
        return (console.log("Signing up failed, please try again", 500))
    }

    res.json({name: foundUser.name, 
        email: foundUser.email
        ,token: token} )
            


              //     const user=new User({
                //         username:req.body.username,
                //         password:req.body.password
                //     });
                //     req.login(user,function(err){
                  //         if(err){
                    //             console.log(err);
  //         }else{
    //             passport.authenticate("local")(req,res,function(){
      //                 res.redirect("/secrets");
      //             })
      //         }
      //     })
    }
    )
  })
    
    main().catch(err => console.log(err));





// CONNECTING MONGOOSE AND MONGODB
async function main() {
  await
  //  mongoose.connect('mongodb://127.0.0.1:27017/canteen')
   mongoose.connect("mongodb://127.0.0.1:27017/userDB",{useNewUrlParser:true}).then(() => {
    console.log("Connected to Database");
    app.listen(port);
  }).catch(err => { console.log("Error in connecting to database"); console.log(err) });
  console.log("WE ARE NOW CONNECTED");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}







// DISPLAYING ALL FOOD ITEMS AVAILABLE IN OUR MENU
const menuitems = Menu.find({}).then((err, posts) => {
  if (err) {
    console.error(err);
  } else {
    console.log(posts);
  }
});
console.log(menuitems);

