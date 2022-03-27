// Пробегаем по массиву
// Находим минимальное значение
// меняем местами с первым элементом
// опять пробегаем по массиву
// меняем местами со вторым эелементом массива
// и так далее, пока не отсортируем весь массив
// Сложность алгоритма O(n*n) !!!


const arr = [6,4,3,1,7,8,4,4,3,9]

let count = 0;
//Принимаем минимальное значение в массиве за i
// пробегаем по массиву. Если находим значение меньше, чем в arr[indexMin], меняем их местами
// подсчитываем количество итераций
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        // меняем два элемента местами
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}


console.log(`Отсортированный массив => ${selectionSort(arr)} , количество итераций = ${count}`)
