export class Validator{
    
   static  IsNotValidTypeIterable(type, iterable) {

    const _strangeValues = iterable.filter(_ => typeof _ !== type);

    if (_strangeValues.length > 0) {
        throw new Error(`TypeError: ${JSON.stringify(_strangeValues)} values are not equal to ${type} `)
    }

    return false

}
} 