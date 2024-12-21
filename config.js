const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="adetolaraji610@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://telegra.ph/file/d8f7c18771d634b714976.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Myles" 


global.devs = "2348136876357" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136876357";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/d8f7c18771d634b714976.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_16_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHUXV2dnFsSkRpTUZpMTdCMFdFUUlyTjVsblYwS0lFaU8zQ1plcWd2N3lrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyZHdpTmhLNFM3MmRrbHVmRWpuRnl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxZWY4MDA1LWRiZWYtNGVhYi1iNzQ0LWEzOGZlMTliY2FhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDIxMSxcbiAgICAgIDE4NyxcbiAgICAgIDIyOSxcbiAgICAgIDE5NSxcbiAgICAgIDE5MyxcbiAgICAgIDE1LFxuICAgICAgMTcsXG4gICAgICAxNjYsXG4gICAgICAyMzcsXG4gICAgICAxNDcsXG4gICAgICAxODIsXG4gICAgICA1NSxcbiAgICAgIDkxLFxuICAgICAgNjEsXG4gICAgICAxMTcsXG4gICAgICAyMjIsXG4gICAgICAyNDIsXG4gICAgICAxODEsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDE0NCxcbiAgICAgIDI1LFxuICAgICAgMjUsXG4gICAgICAxMTksXG4gICAgICA3NSxcbiAgICAgIDEwNixcbiAgICAgIDIyMixcbiAgICAgIDIxOCxcbiAgICAgIDE2OSxcbiAgICAgIDQzLFxuICAgICAgMTYxLFxuICAgICAgMSxcbiAgICAgIDE1MSxcbiAgICAgIDU0LFxuICAgICAgMTI0LFxuICAgICAgNDgsXG4gICAgICAxNDksXG4gICAgICA3OCxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksyRkZIRTFLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2ODc2MzU3Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjkxNjYzNjM0NDc0Njg6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnFObXRRQ0VNQ2JtN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuOTIrbXd0RHlZcDFGRVJzVUp0RkVMd2wzNy9RRGU0TTg4ZWlKeVJMM2lnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRKNGJSZnoxNlk4U1Y4MHVwT1h0cjBTU3M0QjJQQXYzd3VsNkxJcmVocTVUcXY1MGdrRzJqMnNEaEZIN0l1UlBzQmdkQy9ja3VveW13cDdjekJJVUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRUOVEvYk54SHNEMUQ0ZzNESmYrQTRQb3lHMzdCMVltK3pMU0hyNlgxUjRyeVlwME5aeGxvSGk0c0ZWQ0swN0plSHFXWW9VbEh6dU9lT1ZuWlU4M0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzY4NzYzNTc6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzkwNTk1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| ""
    process.env.PACK_NAME || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃" :
  process.env.BOT_NAME  || "🅲🅴🅽🆃"
  ownername:process.env.OWNER_NAME|| "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Naruto"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
