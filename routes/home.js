const express = require("express")
const router = express.Router();





    router.get("/",(req,res)=>{
        res.render('index.ejs')
    })

    /** ABOUT ROUTE/PAGE */
        router.get("/about", (req, res) => {
            res.render("home/about.ejs")
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

module.exports = router





