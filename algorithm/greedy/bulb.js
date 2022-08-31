function bulbs(items) {
    let cost = 0

    for (let i = 0; i < items.length; i++) {
        if (cost % 2 === 0)
            items[i] = items[i]
        else items[i] = items[i] === 1 ? 0 : 1

        if (items[i] % 2 === 1) continue
        else cost++
    }
    return cost
}

//bulbs([0, 1, 0, 1, 1, 0, 1, 1])
bulbs([1, 0, 1])