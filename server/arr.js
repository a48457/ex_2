const arr=[
    {id:1,name:"avi",count:4},
    {id:2,name:"yohai",count:18},
    {id:3,name:"moshe",count:5},
    {id:4,name:"meir",count:1},

]
arr.copyWithin()
const remove=name=> arr.filter((obj)=>obj.name!=name)
const add=item=> arr.concat(item)

const update=name=>{
    ar=arr.map(a=>{
        if(a.name==name){
            
return {id:a.id,name:a.name,count:a.count+1}}
else {
return a}
        
        }  )
return ar}

module.exports={remove,add,update}