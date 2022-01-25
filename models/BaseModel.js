class BaseModel{
 


    static async all(){
      let list = await this.find({});
      console.log(list);
      return list;
    //   return this.find({});
    }

    static fetch(){
        return this.all();
    }
    static collect(l){
        return this.of(l);
    }
    static findById(_id){
        return this.find({_id});
    }

}

class Collection extends Array{


    first(){
      if (this.length && this[0]){
         return this[0];
      }
      return null;
    }

    // get(){
    //   return this;
    // }

    // count(){
    //   return this.length; 
    // }

}


module.exports = {BaseModel,Collection};