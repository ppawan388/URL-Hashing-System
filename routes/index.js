const express = require('express');
const router = express.Router();
// const validUrl = require('valid-url');
// const shortid = require('shortid');
// const config = require('config');
// const res = require('express/lib/response');

// // routes

// router.post('/shorten', (req,res)=>{
//     const { longUrl } = req.body;
//     const baseUrl =  config.get('baseUrl');
//     if(!validUrl.isUri(baseUrl)){
//         return res.status(401).json('Invalid base Urlj')
//     }
// })

// // Create Short Url Code
//  if(validUrl.isUri(longUrl)){
//      let url = await Url.findOne({ longUrl });
//      if(url){
//          res.json(url);
//      } else {
//          const shortUrl =  baseUrl + '/' + urlCode;
//          url = new Url({
//              longUrl,
//              shortUrl,
//              urlCode,
//              date:new Date()
//          });
//          await url.save();
//          res.json(url);
//      }
//  }

module.exports = router;