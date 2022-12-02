//Disclaimer: The server response to deal with received data from form's input fields was tested in a local environment! This may not
//work on other machines since I did not host the server on actual web!


//require express module and server instance!
const express = require("express");
const app = express();
//set up middleware to apply to all routes!
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//start setting up server routes and various http requests!
//Remember, express framework provides request and response objects automatically for you!

//This http post request endpoint will take user's input from submitted form and make sure certain fields are non-null before 
//returning back a html page! The format of data is checked on the client-side(on browser) rather than on server-side!
app.post("/form", (req, resp)=>{
    //destructure these fields from body of request sent by me (client)!
    const {user_fname, user_lname, user_date, user_email} = req.body;
    console.log(`First name is ${user_fname}`);
    console.log(`Last name is ${user_lname}`);
    console.log(`User submitted on: ${user_date}`);
    console.log(`User's email is ${user_email}`);
    //if user did not supply first name, last name, date, or email, make sure to send back inappropriate client request!
    if(!user_fname){
        resp.status(400).send("Invalid request. Please supply first name!");
    }
    if(!user_lname){
        resp.status(400).send("Invalid request. Please supply last name!");
    }
    if(!user_date){
        resp.status(400).send("Invalid request. Please specify today's date!");
    }
    if(!user_email){
        resp.status(400).send("Invalid request. Please specify your email so I can contact you back!");
    }
    //if all four fields supplied values as inputs, then make sure to send back html page with the user info!
    resp.setHeader('Content-Type', 'text/html');
    resp.status(200).send(`<h1>Hello ${user_fname} ${user_lname}!</h1><p>You submitted form on ${user_date}.</p><p>I will reach out to your email: ${user_email}</p>`);
});

//start up server on some port (let's say 8001 for now)!
app.listen(8001, ()=>{
    console.log("Server starting up on port 8001...");
})