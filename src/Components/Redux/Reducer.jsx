
const initial={
    products:[],
    addtocart:[]
}

const basicReducer=(storedata=initial ,action)=>{

    if(action.type==="products"){
        
        return{
            ...storedata,
            products:action.payload
        };

    }else if(action.type === "cart"){

        return{
            ...storedata,
            addtocart: [...storedata.addtocart, action.addCart]
           
          
        }
    }else if(action.type === "remove"){
        return{
           
            ...storedata,
            addtocart: storedata.addtocart.filter((ele) => ele.id !== action.removeCart)
        }
    }

    return storedata;

}

export default basicReducer;