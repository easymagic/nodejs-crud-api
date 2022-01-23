const express = require('express');

const Router = express.Router();

const dataLiseMiddleware = (req,res,next)=>{
    res.data = (json)=>{
      res.json({
          data:json
      });
    };
    next();
};


Router.get('/',dataLiseMiddleware,(req,res)=>{
    res.data({
        version:'Loading ...'
    });
});

module.exports = Router;