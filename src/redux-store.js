import * as redux from 'redux';

//Action
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

const CounterintialState ={
count:0,
}

const counterReducer = (state = CounterintialState,action) =>{
switch(action.type){
    case INCREMENT:{
        return{...state, count: state.count+1};
        break;
    }
    case DECREMENT:{
        return{...state, count:state.count-1};
        break;
    }
    default:{
        return state;
    }
}
}

const pushPopReducer =(state=[],action)=>{
    switch(action.type){
        case 'push':{
            const data=[...state];
            data.push(action.value);
            return [...data];
            break;
        }
        case 'pop':{
            const data=[...state];
            data.pop();
            return [...data];
            break;
        }
    }
}

const RootReducer = (state={},action)=>{
return{
    counter:counterReducer(state.counter,action),
    pushPop:pushPopReducer(state.pushPop,action),
}
}

export const reduxStore = redux.createStore(RootReducer);

