import express from "express"

import {dirname} from  "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000;
const weekdays = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
/*function sort (){

    weekdays.forEach(one => {
        if(xxx === one.indexOf("Sunday")){
            return "Sunday"
        }
        else if(xxx === weekdays.indexOf("Monday")){
            return "Monday"
        }
        else if(xxx === weekdays.indexOf("Tuesday")){
            return "Tuesday"
        }
        else if(xxx === weekdays.indexOf("Wednesday")){
            return "Wednesday"
        }
        else if(xxx === weekdays.indexOf("Thursday")){
            return "Thursday"
        }
        else if(xxx === weekdays.indexOf("Friday")){
            return "Friday"
        }
        else if(xxx === weekdays.indexOf("Saturday")){
            return "Saturday"
        }
    });

}*/


app.get("/",(req , res)=>{
const date = new Date()
const theDay = date.getDay()
if(theDay > 0 && theDay < 5  ){
    res.render("index.ejs", {
     weekday : weekdays[theDay] ,
     action: "work hard"    
})


}
else {
    res.render("index.ejs", {
     weekday : weekdays[theDay], 
     action: "have fun"   
})


}



console.log(theDay)
})

app.listen(port, (req, res)=>{
    console.log("I am listening!");
    
})