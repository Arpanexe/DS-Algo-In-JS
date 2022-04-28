/**
 * Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format,
 * where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.
 * 
 * Hashing: 
 * Hashing is a technique to convert a range of key values into a range of indexes of an array.
 * We're going to use modulo operator to get a range of key values. Consider an example of hash table of size 20,
 * and the following items are to be stored. Item are in the (key,value) format.
 * 
 * How to avoid collision:
 * Linear probing:
 * It may happen that the hashing technique is used to create an already used index of the array. 
 * In such a case, we can search the next empty location in the array by looking into the next cell until we find an empty cell.
 * This technique is called linear probing
 * 
 * Separate Chaining:
 * In this technique we will store array of items at index. So when two values has same hash index we will store both in array.
 * 
 * Big O: Depends on your hash function(how fast it is and how evenly it distributes values)
 * Insert: Best/Avg O(1)
 * Deletion: Best/Avg O(1)
 * Access: Best/Avg O(1) Worst: O(n)
 */
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let PRIME_NUMBER = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME_NUMBER + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        const hashIndex = this._hash(key)
        let existingValue = this.keyMap[hashIndex]
        if (!existingValue) existingValue = []
        existingValue.push([key, value])
        this.keyMap[hashIndex] = existingValue
        console.log(`Value pushed`)
    }

    get(key) {
        const hashIndex = this._hash(key)
        const existingValue = this.keyMap[hashIndex]
        if (!existingValue) return undefined
        let value = undefined
        for (const val of existingValue) {
            if (key === val[0]) {
                value = val[1]
            }
        }
        console.log(`Value for Key: ${key} is ${value}`)
        return value
    }

    keys() {
        const keys = []
        for (const map of this.keyMap) {
            if (map) {
                for (const key of map) {
                    keys.push(key[0])
                }
            }
        }
        console.log(`Keys: ${keys}`)
        return keys
    }

    values() {
        const values = []
        for (const map of this.keyMap) {
            if (map) {
                for (const value of map) {
                    values.push(value[1])
                }
            }
        }
        console.log(`Values: ${values}`)
        return values
    }
}

const hasTable = new HashTable()
hasTable.set('name', 'Arpan')
hasTable.set('age', 30)
hasTable.set('degree', 'MCA')
hasTable.get('name')
hasTable.get('age')
hasTable.get('degree')
hasTable.get('address')
hasTable.keys()
hasTable.values()