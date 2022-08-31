function calculateProduct(product) {
    let maxProduct = -Infinity
    for (let i = 0; i < product.length - 2; i++) {
        let newMaxProduct = product[i] * product[i + 1] * product[i + 2]
        if (newMaxProduct > maxProduct) maxProduct = newMaxProduct
    }

    return maxProduct
}

function calculateProductSortingArray(product) {
    product = product.sort((a, b) => {
        return a - b
    })
    const length = product.length
    const high1 = product[length - 1] * product[length - 2] * product[length - 3]
    const high2 = product[0] * product[1] * product[length - 1]
    const maxProduct = Math.max(high1, high2)
    return maxProduct
}

//calculateProduct([1, 2, 3, 4])
//calculateProduct([0, -1, 10, 5, 7])
//calculateProduct([-5, -2, -1, 0, 0, 3, 4, 5])
//calculateProduct([-5, -2, -1, 0, 0, 1, 1, 5])

//calculateProductSortingArray([1, 2, 3, 4])
//calculateProductSortingArray([0, -1, 10, 5, 7])
//calculateProductSortingArray([-5, -2, -1, 0, 0, 3, 4, 5])
calculateProductSortingArray([-5, -2, -1, 0, 0, 1, 1, 5])