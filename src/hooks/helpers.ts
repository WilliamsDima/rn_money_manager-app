import { ITransaction } from "../store/redusers/main/types"
import { useTranslation } from 'react-i18next'

export const urlAppStore = 'https://play.google.com/store/apps/details?id=com.moneymanager_williams'

export const getItemFromList = (id: number | string, list: any[]) => list.find((it) => it.id === id)
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
export const countInterest = (count, x) => ((x * 100) / count).toFixed(0)

// Поскольку массив заморожен в строгом режиме, нужно скопировать массив перед его сортировкой поэтому использую slice
export const dataFilterMaxValue = (categories, max) => categories 
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

export const months = () => {

    const { t } = useTranslation()

    return [
        {title: t('January')}, {title: t('February')}, {title: t('Martha')}, {title: t('April')}, {title: t('May')},
        {title: t('June')}, {title: t('July')}, {title: t('August')}, {title: t('September')}, {title: t('October')},
        {title: t('November')}, {title: t('December')}]
} 

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

//подсчет суммы вместе с доходами, тратами и транзакциями
export const countSumTransaction = (list: ITransaction[]) => list.reduce(
  (prev, next) => {
      if (next.income) {
        return +prev + +next.count
      } else {
        return +prev - +next.count
      }
  }, 0
)

export const currencies = () => {

    const { t } = useTranslation()

    return [
        {
            "title": t('UAH'),
            "value": "UAH"
        },
        {
            "title": t('USD'),
            "value": "USD"
        },
        {
            "title": t('EUR'),
            "value": "EUR"
        },
        {
            "title": t('KZT'),
            "value": "KZT"
        },
        {
            "title": t('RUB'),
            "value": "RUB"
        },
        {
            "title": t('GBP'),
            "value": "GBP"
        },
        {
            "title": t('CHF'),
            "value": "CHF"
        },
        {
            "title": t('AMD'),
            "value": "AMD"
        },
        {
            "title": t('TRY'),
            "value": "TRY"
        },
        {
            "title": t('UZS'),
            "value": "UZS"
        },
        {
            "title": t('TJS'),
            "value": "TJS"
        },
        {
            "title": t('TMT'),
            "value": "TMT"
        },
        {
            "title": t('AUD'),
            "value": "AUD"
        },
        {
            "title": t('AZN'),
            "value": "AZN"
        },
        {
            "title": t('BGN'),
            "value": "BGN"
        },
        {
            "title": t('BYN'),
            "value": "BYN"
        },
        {
            "title": t('CAD'),
            "value": "CAD"
        },
        {
            "title": t('CZK'),
            "value": "CZK"
        },
        {
            "title": t('GEL'),
            "value": "GEL"
        },
        {
            "title": t('KGS'),
            "value": "KGS"
        },
        {
            "title": t('MDL'),
            "value": "MDL"
        },
        {
            "title": t('MNT'),
            "value": "MNT"
        },
        {
            "title": t('PLN'),
            "value": "PLN"
        },
        {
            "title": t('RSD'),
            "value": "RSD"
        },
      ]
} 

export const sortData = () => {

    const { t } = useTranslation()

    return  [
        {title: t('Day'), value: 'Day'}, 
        {title: t('Week'), value: 'Week'},
        {title: t('Month'), value: 'Month'},
        {title: t('Year'), value: 'Year'}]
}

export const getThemeAppList = () => {

    const { t } = useTranslation()

    return  [
        {title: t('dark'), value: 'dark'}, 
        {title: t('light'), value: 'light'},]
}
