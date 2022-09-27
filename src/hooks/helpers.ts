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
})

const getSort = (moneyArray, id) => {
  return moneyArray.find((e) => e.categori === id)
}

export const getSortCategories = (moneyArray, categories) => {
  return moneyArray.length && categories.filter((c) => {

    const moneyObj = getSort(moneyArray, c.id)

      if (moneyObj) {
          // делаем копию объекта так как строгий режим не позволит редактировать объект "c" 
          // на прямую (c.count += +expens.money) - // error - Attempted to assign to readonly property
          const objCopy = {...moneyObj}
          objCopy.count += +moneyObj.money
          return objCopy
      }
  })
}

export const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

export const periodSort = (periodSelect, arrayMoney, date) => {

  const startWeek = new Date(+date - (86400000 * 7))
  const endWeek = new Date(date)

  const methodDate = {
    'Day': () => arrayMoney.filter((ex) => new Date(ex.date).toLocaleDateString() 
    === new Date(date).toLocaleDateString()), 

    'Week': () => arrayMoney.filter((ex) => +new Date(ex.date) >= +startWeek 
    && +new Date(ex.date) <= +endWeek + 86400000),

    'Month': () => arrayMoney.filter((ex) => new Date(ex.date).getMonth() 
    === new Date(date).getMonth() && new Date(ex.date).getFullYear() 
    === new Date(date).getFullYear()),

    'Year': () => arrayMoney.filter((ex) => new Date(ex.date).getFullYear() 
    === new Date(date).getFullYear()), 
  };

  return arrayMoney.length && methodDate[periodSelect]()
}