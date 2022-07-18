
const y = _tupule([1,2,3],["number", "number", "number",[]])

function _tupule(val, arrOfTypes) {
    if (!Array.isArray(val) || !Array.isArray(arrOfTypes)) {
        throw new Error("TypeError: All arguments must be of type array")
    }

    if( val.length !== arrOfTypes.length  ){
        throw new Error("Tupple Error: Both arguments must be equal in length")
    }

    val.map((_, i) => {
        if ( ( Array.isArray(_) && Array.isArray(arrOfTypes[i]) ) || typeof _ === arrOfTypes[i]  ) {
            return 
        }
        
        throw new Error( `Tupple Error: Type of ${ typeof _ } at position ${i} is not equal to type ${ Array.isArray(arrOfTypes[i]) ? "Array" :  typeof arrOfTypes[i] } ` )
    })

    return val


}

