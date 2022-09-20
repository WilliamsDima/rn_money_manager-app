export const getItemFromList = (id: number | undefined, list: any[]) => list.find((it) => it.id === id)
// создаю шаблон для чисел, разделяю запятой
export const numberConverter = (num) => num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
export const countSumItemsFromList = (list: any[]) => list.reduce(
    (prev, next) => {
      if(next.id !== 0) {
        return +prev + +next.count
      } else {
        return 0
      }
    }, 0
  )
export const countInterest = (count, x) => ((x * 100) / count).toFixed(2)

// Поскольку массив заморожен в строгом режиме, нужно скопировать массив перед его сортировкой поэтому использую slice
export const categoriesFilterMaxValue = (categories, max) => categories 
&& categories.slice().sort((a, b) => {
  if (max) {
    return b.count - a.count
  }
  return a.count - b.count
});