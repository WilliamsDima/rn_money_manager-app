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
            "title": "EUR Евро",
            "value": "EUR"
        },
        {
            "title": "KZT Казахстанский тенге",
            "value": "KZT"
        },
        {
            "title": "RUB Российский рубль",
            "value": "RUB"
        },
        {
            "title": "GBP Фунт стерлингов Велико­британии",
            "value": "GBP"
        },
        {
            "title": "CHF Швейцарский франк",
            "value": "CHF"
        },
        {
            "title": t('AMD'),
            "value": "AMD"
        },
        {
            "title": "TRY Новая турецкая лира",
            "value": "TRY"
        },
        {
            "title": "UZS Узбекский сум",
            "value": "UZS"
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
            "title": "BYN Белорусский рубль",
            "value": "BYN"
        },
        {
            "title": "CAD Канадский доллар",
            "value": "CAD"
        },
        {
            "title": "CZK Чешская крона",
            "value": "CZK"
        },
        {
            "title": "GEL Грузинский лари",
            "value": "GEL"
        },
        {
            "title": "KGS Киргизский сом",
            "value": "KGS"
        },
        {
            "title": "MDL Молдовский лей",
            "value": "MDL"
        },
        {
            "title": "MNT Монгольский тугрик",
            "value": "MNT"
        },
        {
            "title": "PLN Польский злотый",
            "value": "PLN"
        },
        {
            "title": "RSD Сербский динар",
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

export const themeApp = () => {

    const { t } = useTranslation()

    return  [
        {title: t('dark'), value: 'dark'}, 
        {title: t('light'), value: 'light'},]
}

// "BHD": "Bahraini Dinar",
// "BIF": "Burundian Franc",
// "BMD": "Bermudan Dollar",
// "BND": "Brunei Dollar",
// "BOB": "Bolivian Boliviano",
// "BRL": "Brazilian Real",
// "BSD": "Bahamian Dollar",
// "BTC": "Bitcoin",
// "BTN": "Bhutanese Ngultrum",
// "BWP": "Botswanan Pula",
// "BYN": "New Belarusian Ruble",
// "BYR": "Belarusian Ruble",
// "BZD": "Belize Dollar",
// "CAD": "Canadian Dollar",
// "CDF": "Congolese Franc",
// "CHF": "Swiss Franc",
// "CLF": "Chilean Unit of Account (UF)",
// "CLP": "Chilean Peso",
// "CNY": "Chinese Yuan",
// "COP": "Colombian Peso",
// "CRC": "Costa Rican Col\u00f3n",
// "CUC": "Cuban Convertible Peso",
// "CUP": "Cuban Peso",
// "CVE": "Cape Verdean Escudo",
// "CZK": "Czech Republic Koruna",
// "DJF": "Djiboutian Franc",
// "DKK": "Danish Krone",
// "DOP": "Dominican Peso",
// "DZD": "Algerian Dinar",
// "EGP": "Egyptian Pound",
// "ERN": "Eritrean Nakfa",
// "ETB": "Ethiopian Birr",
// "EUR": "Euro",
// "FJD": "Fijian Dollar",
// "FKP": "Falkland Islands Pound",
// "GBP": "British Pound Sterling",
// "GEL": "Georgian Lari",
// "GGP": "Guernsey Pound",
// "GHS": "Ghanaian Cedi",
// "GIP": "Gibraltar Pound",
// "GMD": "Gambian Dalasi",
// "GNF": "Guinean Franc",
// "GTQ": "Guatemalan Quetzal",
// "GYD": "Guyanaese Dollar",
// "HKD": "Hong Kong Dollar",
// "HNL": "Honduran Lempira",
// "HRK": "Croatian Kuna",
// "HTG": "Haitian Gourde",
// "HUF": "Hungarian Forint",
// "IDR": "Indonesian Rupiah",
// "ILS": "Israeli New Sheqel",
// "IMP": "Manx pound",
// "INR": "Indian Rupee",
// "IQD": "Iraqi Dinar",
// "IRR": "Iranian Rial",
// "ISK": "Icelandic Kr\u00f3na",
// "JEP": "Jersey Pound",
// "JMD": "Jamaican Dollar",
// "JOD": "Jordanian Dinar",
// "JPY": "Japanese Yen",
// "KES": "Kenyan Shilling",
// "KGS": "Kyrgystani Som",
// "KHR": "Cambodian Riel",
// "KMF": "Comorian Franc",
// "KPW": "North Korean Won",
// "KRW": "South Korean Won",
// "KWD": "Kuwaiti Dinar",
// "KYD": "Cayman Islands Dollar",
// "KZT": "Kazakhstani Tenge",
// "LAK": "Laotian Kip",
// "LBP": "Lebanese Pound",
// "LKR": "Sri Lankan Rupee",
// "LRD": "Liberian Dollar",
// "LSL": "Lesotho Loti",
// "LTL": "Lithuanian Litas",
// "LVL": "Latvian Lats",
// "LYD": "Libyan Dinar",
// "MAD": "Moroccan Dirham",
// "MDL": "Moldovan Leu",
// "MGA": "Malagasy Ariary",
// "MKD": "Macedonian Denar",
// "MMK": "Myanma Kyat",
// "MNT": "Mongolian Tugrik",
// "MOP": "Macanese Pataca",
// "MRO": "Mauritanian Ouguiya",
// "MUR": "Mauritian Rupee",
// "MVR": "Maldivian Rufiyaa",
// "MWK": "Malawian Kwacha",
// "MXN": "Mexican Peso",
// "MYR": "Malaysian Ringgit",
// "MZN": "Mozambican Metical",
// "NAD": "Namibian Dollar",
// "NGN": "Nigerian Naira",
// "NIO": "Nicaraguan C\u00f3rdoba",
// "NOK": "Norwegian Krone",
// "NPR": "Nepalese Rupee",
// "NZD": "New Zealand Dollar",
// "OMR": "Omani Rial",
// "PAB": "Panamanian Balboa",
// "PEN": "Peruvian Nuevo Sol",
// "PGK": "Papua New Guinean Kina",
// "PHP": "Philippine Peso",
// "PKR": "Pakistani Rupee",
// "PLN": "Polish Zloty",
// "PYG": "Paraguayan Guarani",
// "QAR": "Qatari Rial",
// "RON": "Romanian Leu",
// "RSD": "Serbian Dinar",
// "RUB": "Russian Ruble",
// "RWF": "Rwandan Franc",
// "SAR": "Saudi Riyal",
// "SBD": "Solomon Islands Dollar",
// "SCR": "Seychellois Rupee",
// "SDG": "Sudanese Pound",
// "SEK": "Swedish Krona",
// "SGD": "Singapore Dollar",
// "SHP": "Saint Helena Pound",
// "SLL": "Sierra Leonean Leone",
// "SOS": "Somali Shilling",
// "SRD": "Surinamese Dollar",
// "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
// "SVC": "Salvadoran Col\u00f3n",
// "SYP": "Syrian Pound",
// "SZL": "Swazi Lilangeni",
// "THB": "Thai Baht",
// "TJS": "Tajikistani Somoni",
// "TMT": "Turkmenistani Manat",
// "TND": "Tunisian Dinar",
// "TOP": "Tongan Pa\u02bbanga",
// "TRY": "Turkish Lira",
// "TTD": "Trinidad and Tobago Dollar",
// "TWD": "New Taiwan Dollar",
// "TZS": "Tanzanian Shilling",
// "UAH": "Ukrainian Hryvnia",
// "UGX": "Ugandan Shilling",
// "USD": "United States Dollar",
// "UYU": "Uruguayan Peso",
// "UZS": "Uzbekistan Som",
// "VEF": "Venezuelan Bol\u00edvar Fuerte",
// "VND": "Vietnamese Dong",
// "VUV": "Vanuatu Vatu",
// "WST": "Samoan Tala",
// "XAF": "CFA Franc BEAC",
// "XAG": "Silver (troy ounce)",
// "XAU": "Gold (troy ounce)",
// "XCD": "East Caribbean Dollar",
// "XDR": "Special Drawing Rights",
// "XOF": "CFA Franc BCEAO",
// "XPF": "CFP Franc",
// "YER": "Yemeni Rial",
// "ZAR": "South African Rand",
// "ZMK": "Zambian Kwacha (pre-2013)",
// "ZMW": "Zambian Kwacha",
// "ZWL": "Zimbabwean Dollar"