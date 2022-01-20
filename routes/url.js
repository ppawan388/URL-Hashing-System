const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
// const res = require('express/lib/response');
const Url = require('../models/Url');

// routes POST /api/url/shorten

router.post('/shorten', async (req,res)=>{
    const { longUrl } = req.body;
    const baseUrl =  config.get('baseUrl');
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base Url')
    }
    // create url code
    const urlCode = shortid.generate();
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({ longUrl });
        if(url){
            res.json(url);
        } else {
            const shortUrl =  baseUrl + '/' + urlCode;
            url = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date:new Date()
            });
            await url.save();
            res.json(url);
        }

        }
        catch(err){
          console.log(err);
          res.status(500).json('server error');

        }
        
    } else{
        res.status(401).json('invlaid url')
    }
});

// Create Short Url Code
 

module.exports = router;