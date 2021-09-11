function sumES5(a) {
    return function (b) {
        if (b)
            return sumES5(a + b)
        else
            return a
    }
}

const sumES6 = a => b => b ? sumES6(a + b) : a

console.log(sumES5(1)(2)(3)(4)())
console.log(sumES6(1)(2)(3)(4)())