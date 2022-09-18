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
  );