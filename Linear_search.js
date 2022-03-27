
// Сложность O(n)

const arr = [1,3,5,8,6,5,22,11,546,4,358]

// будем считать количество итераций
let count = 0;

const linearSearch = (array, searchItem) => {

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === searchItem) return i
    }

    return null
}

// console.log(`индекс элемента в массвие ${linearSearch(arr, 22)}, количество итераций = ${count}`);
console.log(`индекс элемента в массвие ${linearSearch(arr, 358)}, количество итераций = ${count}`);
