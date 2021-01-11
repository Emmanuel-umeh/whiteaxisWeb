const express = require("express")
const router = express.Router();

var MobileDetect = require('mobile-detect')
  

    router.get("/" , async(req,res)=>{

        md =await  new MobileDetect(req.headers['user-agent'])


        console.log( md.os() );  
        res.render('index.ejs',{
            os : md.os()
            // AndroidOS
        })
    })

    /** ABOUT ROUTE/PAGE */
        router.get("/about", (req, res) => {
            res.render("home/about.ejs",{
                os : md.os()
                // AndroidOS
            })
        })


    /** ABOUT ROUTE/PAGE */


    /** CONTACT ROUTE/PAGE */
        router.get("/contact", (req, res) => {
            res.render("home/contact.ejs")            
        })
    /** CONTACT ROUTE/PAGE */
    

    /**SERVICES ROUTE/PAGE */
    router.get("/services", (req, res) => {
        res.render("home/services.ejs")            
    })
    router.get("/webmail", (req, res) => {
    
        res.redirect("https://www.whiteaxis.ng:2096/cpsess6553187925/3rdparty/roundcube/?_task=mail&_mbox=INBOX")            
    })

module.exports = router





