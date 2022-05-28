import fruits from "./data"





export const debounce = (fn) => {
   
    let timeoutId = undefined
   
    return function() {
        const args = arguments;
     

        if(timeoutId) {
            clearTimeout(timeoutId)
        }

     timeoutId =  setTimeout( () =>  fn.apply(this, args), 500)
    }
}

export const getSearchResult = ( input ) => 
     fruits.filter( (fruit) => fruit.toLocaleLowerCase().substring(0, input.length) === input.toLocaleLowerCase())
