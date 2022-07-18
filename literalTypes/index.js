
const literals = ["string", "number", "boolean"];
generateLiterals()

const x = _boolean([true, true, false], "list");

console.log(x)

function generateLiterals(){

literals.forEach( function(literal) {
    this[`_${literal}`] = function (val, type) {

        if (type && (type !== "list" || !Array.isArray(val))) {
            throw new Error(`TypeError: Type ${typeof val} is not assignable to ${typeof val}[] type`)
        }

        if (Array.isArray(val) && !IsNotValidTypeIterable(literal, val)) {
            return val
        }

        if (typeof val !== literal) {
            throw new Error(`TypeError: Type ${typeof val} is not assignable to ${literal}`)
        }

        return val
    }
})

}

function IsNotValidTypeIterable(type, iterable) {

    const _strangeValues = iterable.filter(_ => typeof _ !== type);

    if (_strangeValues.length > 0) {
        throw new Error(`TypeError: ${JSON.stringify(_strangeValues)} values are not equal to ${type} `)
    }

    return false

}







