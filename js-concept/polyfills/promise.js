
class MyPromise {
    constructor(executor) {
        this.executor = executor
    }

    then(thenHandler) { }

    catch(catchHandler) { }

    resolve()
}

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Called after some time`)
            resolve(true)
        }, 1000)
    })
}

test().then(val => {
    console.log(`Return value:${val}`)
})