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
export const countInterest = (count, x) => ((x * 100) / count).toFixed(2)

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

export const currencies = [
  {
      "title": "UAH Украинская гривна",
      "value": "UAH"
  },
  {
      "title": "USD Доллар США",
      "value": "USD"
  },
  {
      "title": "EUR Евро",
      "value": "EUR"
  },
  {
      "title": "GBP Фунт стерлингов Велико­британии",
      "value": "GBP"
  },
  {
      "title": "JPY Японская йена",
      "value": "JPY"
  },
  {
      "title": "CHF Швейцарский франк",
      "value": "CHF"
  },
  {
      "title": "CNY Китайский юань женьминьби",
      "value": "CNY"
  },
  {
      "title": "RUB Российский рубль",
      "value": "RUB"
  },
  {
      "title": "AED Дирхам ОАЭ",
      "value": "AED"
  },
  {
      "title": "AFN Афганский афгани",
      "value": "AFN"
  },
  {
      "title": "ALL Албанский лек",
      "value": "ALL"
  },
  {
      "title": "AMD Армянский драм",
      "value": "AMD"
  },
  {
      "title": "AOA Ангольская кванза",
      "value": "AOA"
  },
  {
      "title": "ARS Аргентинский песо",
      "value": "ARS"
  },
  {
      "title": "AUD Австралийский доллар",
      "value": "AUD"
  },
  {
      "title": "AZN Азербайджанский манат",
      "value": "AZN"
  },
  {
      "title": "BDT Бангладешская така",
      "value": "BDT"
  },
  {
      "title": "BGN Болгарский лев",
      "value": "BGN"
  },
  {
      "title": "BHD Бахрейнский динар",
      "value": "BHD"
  },
  {
      "title": "BIF Бурундийский франк",
      "value": "BIF"
  },
  {
      "title": "BND Брунейский доллар",
      "value": "BND"
  },
  {
      "title": "BOB Боливийский боливиано",
      "value": "BOB"
  },
  {
      "title": "BRL Бразильский реал",
      "value": "BRL"
  },
  {
      "title": "BWP Ботсванская пула",
      "value": "BWP"
  },
  {
      "title": "BYN Белорусский рубль",
      "value": "BYN"
  },
  {
      "title": "CAD Канадский доллар",
      "value": "CAD"
  },
  {
      "title": "CDF Конголезский франк",
      "value": "CDF"
  },
  {
      "title": "CLP Чилийский песо",
      "value": "CLP"
  },
  {
      "title": "COP Колумбийский песо",
      "value": "COP"
  },
  {
      "title": "CRC Костариканский колон",
      "value": "CRC"
  },
  {
      "title": "CUP Кубинский песо",
      "value": "CUP"
  },
  {
      "title": "CZK Чешская крона",
      "value": "CZK"
  },
  {
      "title": "DJF Джибутийский франк",
      "value": "DJF"
  },
  {
      "title": "DKK Датская крона",
      "value": "DKK"
  },
  {
      "title": "DZD Алжирский динар",
      "value": "DZD"
  },
  {
      "title": "EGP Египетский фунт",
      "value": "EGP"
  },
  {
      "title": "ETB Эфиопский быр",
      "value": "ETB"
  },
  {
      "title": "GEL Грузинский лари",
      "value": "GEL"
  },
  {
      "title": "GHS Ганский седи",
      "value": "GHS"
  },
  {
      "title": "GMD Гамбийский даласи",
      "value": "GMD"
  },
  {
      "title": "GNF Гвинейский франк",
      "value": "GNF"
  },
  {
      "title": "HKD Гонконгский доллар",
      "value": "HKD"
  },
  {
      "title": "HRK Хорватская куна",
      "value": "HRK"
  },
  {
      "title": "HUF Венгерский форинт",
      "value": "HUF"
  },
  {
      "title": "IDR Индонезийская рупия",
      "value": "IDR"
  },
  {
      "title": "ILS Израильский шекель",
      "value": "ILS"
  },
  {
      "title": "INR Индийская рупия",
      "value": "INR"
  },
  {
      "title": "IQD Иракский динар",
      "value": "IQD"
  },
  {
      "title": "IRR Иранский риал",
      "value": "IRR"
  },
  {
      "title": "ISK Исландская крона",
      "value": "ISK"
  },
  {
      "title": "JOD Иорданский динар",
      "value": "JOD"
  },
  {
      "title": "KES Кенийский шиллинг",
      "value": "KES"
  },
  {
      "title": "KGS Киргизский сом",
      "value": "KGS"
  },
  {
      "title": "KHR Камбоджийский риель",
      "value": "KHR"
  },
  {
      "title": "KPW Северо-корейская вона (КНДР)",
      "value": "KPW"
  },
  {
      "title": "KRW Южно-корейская вона (Корея)",
      "value": "KRW"
  },
  {
      "title": "KWD Кувейтский динар",
      "value": "KWD"
  },
  {
      "title": "KZT Казахстанский тенге",
      "value": "KZT"
  },
  {
      "title": "LAK Лаосский кип",
      "value": "LAK"
  },
  {
      "title": "LBP Ливанский фунт",
      "value": "LBP"
  },
  {
      "title": "LKR Шри-ланкийская рупия",
      "value": "LKR"
  },
  {
      "title": "LYD Ливийский динар",
      "value": "LYD"
  },
  {
      "title": "MAD Марокканский дирхам",
      "value": "MAD"
  },
  {
      "title": "MDL Молдовский лей",
      "value": "MDL"
  },
  {
      "title": "MGA Малагасийский ариари",
      "value": "MGA"
  },
  {
      "title": "MKD Македонский денар",
      "value": "MKD"
  },
  {
      "title": "MNT Монгольский тугрик",
      "value": "MNT"
  },
  {
      "title": "MRO Мавританская угия",
      "value": "MRO"
  },
  {
      "title": "MUR Маврикийская рупия",
      "value": "MUR"
  },
  {
      "title": "MVR Мальдивская руфия",
      "value": "MVR"
  },
  {
      "title": "MWK Малавийская квача",
      "value": "MWK"
  },
  {
      "title": "MXN Мексиканский песо",
      "value": "MXN"
  },
  {
      "title": "MYR Малайзийский ринггит",
      "value": "MYR"
  },
  {
      "title": "MZN Мозамбикский метикал",
      "value": "MZN"
  },
  {
      "title": "NAD Намибийский доллар",
      "value": "NAD"
  },
  {
      "title": "NGN Нигерийская наира",
      "value": "NGN"
  },
  {
      "title": "NIO Никарагуанская кордоба",
      "value": "NIO"
  },
  {
      "title": "NOK Норвежская крона",
      "value": "NOK"
  },
  {
      "title": "NPR Непальская рупия",
      "value": "NPR"
  },
  {
      "title": "NZD Ново­зеландский доллар",
      "value": "NZD"
  },
  {
      "title": "OMR Оманский риал",
      "value": "OMR"
  },
  {
      "title": "PEN Перуанский соль",
      "value": "PEN"
  },
  {
      "title": "PHP Филиппинский песо",
      "value": "PHP"
  },
  {
      "title": "PKR Пакистанская рупия",
      "value": "PKR"
  },
  {
      "title": "PLN Польский злотый",
      "value": "PLN"
  },
  {
      "title": "PYG Парагвайский гуарани",
      "value": "PYG"
  },
  {
      "title": "QAR Катарский риал",
      "value": "QAR"
  },
  {
      "title": "RON Новый румынский лей",
      "value": "RON"
  },
  {
      "title": "RSD Сербский динар",
      "value": "RSD"
  },
  {
      "title": "SAR Саудовский риял",
      "value": "SAR"
  },
  {
      "title": "SCR Сейшельская рупия",
      "value": "SCR"
  },
  {
      "title": "SDG Суданский фунт",
      "value": "SDG"
  },
  {
      "title": "SEK Шведская крона",
      "value": "SEK"
  },
  {
      "title": "SGD Сингапурский доллар",
      "value": "SGD"
  },
  {
      "title": "SLL Сьерра-леонский леоне",
      "value": "SLL"
  },
  {
      "title": "SOS Сомалийский шиллинг",
      "value": "SOS"
  },
  {
      "title": "SRD Суринамский доллар",
      "value": "SRD"
  },
  {
      "title": "SYP Сирийский фунт",
      "value": "SYP"
  },
  {
      "title": "SZL Свазилендский лилангени",
      "value": "SZL"
  },
  {
      "title": "THB Таиландский бат",
      "value": "THB"
  },
  {
      "title": "TJS Таджикский сомони",
      "value": "TJS"
  },
  {
      "title": "TMT Туркменский манат",
      "value": "TMT"
  },
  {
      "title": "TND Тунисский динар",
      "value": "TND"
  },
  {
      "title": "TRY Новая турецкая лира",
      "value": "TRY"
  },
  {
      "title": "TWD Тайваньский доллар",
      "value": "TWD"
  },
  {
      "title": "TZS Танзанийский шиллинг",
      "value": "TZS"
  },
  {
      "title": "UGX Угандийский шиллинг",
      "value": "UGX"
  },
  {
      "title": "UYU Уругвайский песо",
      "value": "UYU"
  },
  {
      "title": "UZS Узбекский сум",
      "value": "UZS"
  },
  {
      "title": "VEF Венесуэльский боливар",
      "value": "VEF"
  },
  {
      "title": "VND Вьетнамский донг",
      "value": "VND"
  },
  {
      "title": "XAF Франк КФА (Центральная Африка)",
      "value": "XAF"
  },
  {
      "title": "XDR СПЗ",
      "value": "XDR"
  },
  {
      "title": "XOF Франк КФА (Западная Африка)",
      "value": "XOF"
  },
  {
      "title": "YER Йеменский риал",
      "value": "YER"
  },
  {
      "title": "ZAR Южно-африканский рэнд",
      "value": "ZAR"
  },
  {
      "title": "ZMK Замбийская квача",
      "value": "ZMK"
  },
]

export const sortData = () => {

    const { t } = useTranslation()

    return  [
        {title: t('Day'), value: 'Day'}, 
        {title: t('Week'), value: 'Week'},
        {title: t('Month'), value: 'Month'},
        {title: t('Year'), value: 'Year'}]
}

export const themeApp = () => {

    const { t } = useTranslation()

    return  [
        {title: t('dark'), value: 'dark'}, 
        {title: t('light'), value: 'light'},]
}