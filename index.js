const express=require("express");
const app=express();
const nodemailer=require("nodemailer")
let PORT=process.env.PORT || 3000;


let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"sonynidhikonjeti5@gmail.com",
        pass:"fgjenfnoeyapdcvg"
    },
    tls:
    {
        rejectUnauthorized:false,
    }
})
let mailOptions=
{
    from:"sonynidhikonjeti5@gmail.com",
    to:"1ds20is045@dsce.edu.in",
    subject:"test",
    text:"hey"
};
transporter.sendMail(mailOptions,function(err,success){
    if(err)
    console.log(err);
    else{
        console.log("success!")
    }
})
app.get("/",(req,res)=>{
    res.send("ji");
});
app.listen(PORT,()=>{

})