function _object(val, interface) {

    if( typeof val !== "object" || Array.isArray( val ) ){
       throw new Error(`TypeError: Value passed in must be of object type, ${ typeof val } passse instead `);
    }

    if( InterfacePurity( interface ) && ObjectCorrespondence( interface, val ) ){

        const types = Object.values(interface);
        
        Object.values(val).map( (_, i) => {
             if( typeof _ === types[i] || ( Array.isArray(types[i]) && Array.isArray(_) ) || ( types[i].toString() === "{}" && typeof _ === "object") ){
                return
             }

             throw new Error(`Type Mismatch:  Type of ${ Object.keys(interface)[i] }(${typeof _}) doesn't match type ${ types[i] } on interface`)
        })

    }
}




// Validator

 
function InterfacePurity(interface) {
    if (typeof interface !== "object")
        throw new Error(`Interface Error: The interface passed is not if type object, instead ${typeof interface} is passed`)


    const allowedTypes = ["number", "string", "boolean", "object" ];

    Object.values(interface).map((_, i) => {

        if (allowedTypes.includes(_) || ( Array.isArray(_) && typeof _ === "object")) {
            return
        }

        throw new Error(`TypeError: Type ${_}  of attribute ${Object.keys(interface)[i]} is not a valid type `)
    })

    return true

}

function ObjectCorrespondence(interface, val){

    const INT_KEYS = Object.keys(interface);
    const VAL_KEYS = Object.keys(val);
    
    INT_KEYS.map((_, i)=>{
        if( !VAL_KEYS.includes(_) ){
            throw new Error(`Interface Error: attribute '${ _ }' required in ${JSON.stringify(interface)} not found in value ${ JSON.stringify(val) } `)
        }
    })

    VAL_KEYS.map((_, i)=>{
        if( !INT_KEYS.includes(_) ){
            throw new Error(`Interface Error: Foriegn attribute detected, attribute '${ _ }' does not exist on type ${ JSON.stringify(interface) } `)
        }
    })

    return true

}


const personInterface = {
    name: "string",
    age: "number"
}

const person1 = _object({ name: "anu"}, personInterface)

