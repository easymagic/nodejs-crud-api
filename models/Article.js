const mongoose = require('mongoose');
const { BaseModel, Collection } = require('./BaseModel');



const ArticleSchema = mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    content:{
        require:true,
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
});



class Article extends BaseModel{

    // static all(){
    //     return this.find({});
    // }

    toS(){
       return this.name + ' , ' + this.content;
    }

    static async allFormatted(){
       let list = await this.all();
       console.log(list);
    //    list = this.collect(list);
    //    let count = 9; //list.count();
       return list.map((item)=>{
           let {name,content,date} = item;
           return {
             name,content,date,name_formatted:item.toS()
           };
       });
    }

}

ArticleSchema.loadClass(Article);

// mongoose.model('Article',ArticleSchema)

module.exports = mongoose.model('Article',ArticleSchema);
