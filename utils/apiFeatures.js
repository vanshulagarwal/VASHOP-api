class ApiFeatures{
    constructor(query,querystr){
        this.query=query;
        this.querystr=querystr;
    }
    search(){
        const keyword=this.querystr.keyword
        ? {
            name:{
                $regex:this.querystr.keyword,
                $options:"i",
            },
        } 
        : {};

        // console.log(keyword);
        this.query=this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryfilter={...this.querystr};

        const removeFields=["keyword","page","limit"];
        removeFields.forEach(key=>delete queryfilter[key]);
        
        
        let querystr=JSON.stringify(queryfilter);
        // console.log(querystr);
        querystr=querystr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`)


        this.query=this.query.find(JSON.parse(querystr));
        // console.log(querystr);

        return this;
    }
}

module.exports=ApiFeatures;