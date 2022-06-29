
Function.prototype.customCall = function (otherThis) {
    let propertyName = `00${Math.random()}`
    while (otherThis.hasOwnProperty(propertyName)) {
        propertyName = `00${Math.random()}`
    }

    otherThis[propertyName] = this
    otherThis[propertyName](arguments[1])
}

//Testing
const testObject = {
    name: 'Arpan'
}

function test() {
    console.log(`My name is ${this.name}`)
}

test.customCall(testObject)