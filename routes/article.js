const express = require('express');

const Router = express.Router();

const Article = require('../models/Article');

const dataLiseMiddleware = (req,res,next)=>{
    res.data = (json)=>{
      res.json({
          data:json
      });
    };
    next();
};


Router.get('/',dataLiseMiddleware, async (req,res)=>{
    res.data({
        list: await Article.allFormatted()
    });
});

Router.post('/',dataLiseMiddleware,async (req,res)=>{

    const data = await Article.create(req.body);

    return res.data({
        data,
        message:'Article created successfully'
    });

});

module.exports = Router;