export function HomeReducer (state = {
    list:[]
},action){
    switch (action.type){
        case 'GET_DATA':
            return Object.assign({},state,{list:action.payload})
        default: return state
    }
}