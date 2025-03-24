import {createStore} from "redux";


const INITIAL_VALUE = {
    counter : 0,

}

const counterreducer = (store =INITIAL_VALUE,action) =>{
    let newstore = store;
if(action.type === "increment"){
    return {counter : store.counter +1}
}
else if(action.type === "decrement"){
    return {counter : store.counter -1}
}
else if(action.type === "Add"){
    return {counter : store.counter + Number(action.payload.num)}
}
else if(action.type ==="Subtract"){
    return {counter: store.counter - Number(action.payload.num)}
}


 return newstore;
}




const Counterstore = createStore(counterreducer);

export default Counterstore;



