export class Validator {

    static IsNotValidTypeIterable(type, iterable) {

        const _strangeValues = iterable.filter(_ => typeof _ !== type);

        if (_strangeValues.length > 0) {
            throw new Error(`TypeError: ${JSON.stringify(_strangeValues)} values are not equal to ${type} `)
        }

        return false

    }

    static InterfacePurity(interface) {
        if (typeof interface !== "object")
            throw new Error("Interface Error: The interface passed is not if type object, instead ${typeof interface} is passed")

        
        const allowedTypes = ["number", "string", "boolean", [], {}];

        interface.values.map( (_, i) => {

            if( allowedTypes.includes( _ ) ){
                return
            }

            throw new Error( `TypeError: Type ${_}  of attribute ${ interface.keys[i] } is not a valid type ` )
        })

        return true

    }
} 