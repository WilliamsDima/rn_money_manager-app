import { RoutesNames } from "../navigation/routes-names";

export const TAB_HOME = RoutesNames.Main.Home; // дом
export const TAB_ACCAUNTS = RoutesNames.Accaunts.Home; // банковские карты
export const TAB_CATEGORIES = RoutesNames.Categories.Home; // категории
export const TAB_MORE = RoutesNames.More.Home; // три точки

export const HEADER_LEFT = 'HEADER_LEFT' // счёт
export const ARROW_SELECT = 'ARROW_SELECT' // стрелочки выбора
export const HISTORY = 'HISTORY' // история
export const PLUS_CIRCLE = 'PLUS_CIRCLE' // плюсик в кружочке
export const HEART = 'HEART' // сердце
export const MEDIC = 'MEDIC'; // крест медецина
export const MUSIC = 'MUSIC'; // музыка, нота
export const PIGGY_BANK = 'PIGGY_BANK'; // копила в виде свинки
export const STEAM = 'STEAM'; // стим
export const GAS = 'GAS'; // канистра
export const GEAR = 'GEAR'; // механизм
export const FILL = 'FILL'; // кран
export const TAXI = 'TAXI'; // такси
export const TOOTCH = 'TOOTCH'; // зуб
export const TOOTHPASTE = 'TOOTHPASTE'; // ЗУБНАЯ ПАСТА
export const BANK = 'BANK'; // здание банка
export const REFUND = 'REFUND'; // возврат денег 1
export const REFUND_REPO = 'REFUND_REPO'; // возврат денег 2
export const ANIMAL = 'ANIMAL'; // след животного
export const BASKET = 'BASKET'; // карзина
export const BURGER = 'BURGER'; // бургер
export const BUS = 'BUS'; // автобус
export const CAR = 'CAR'; // машина
export const CHARITY = 'CHARITY'; // благотворительность
export const CLOTHES = 'CLOTHES'; // одежда
export const COSMETICS = 'COSMETICS'; // косметика
export const EDUCATION = 'EDUCATION'; // шапка студента
export const ENERGY = 'ENERGY'; // молния, энергия
export const FAMILY = 'FAMILY'; // семья
export const FLIGHT = 'FLIGHT'; // самолёт
export const GAME = 'GAME'; // джостик
export const GIFT = 'GIFT'; // подарок
export const GLASS = 'GLASS'; // бокал мортини
export const GLASSES = 'GLASSES'; // очки
export const INTERNET = 'INTERNET'; // интернет (ви фи)
export const MAP = 'MAP'; // карта
export const MONEY_BAG = 'MONEY_BAG'; // мешок с деньгами
export const PHONE = 'PHONE'; // телефон
export const PRODUCTS = 'PRODUCTS'; // продукты
export const QUESTION = 'QUESTION'; // вопрос
export const RESTAURANT = 'RESTAURANT'; // ресторан
export const SPORT = 'SPORT'; // спорт
export const TAG = 'TAG'; // бирка
export const TECHNIK = 'TECHNIK'; // бытовая техника, электроника
export const TIKET = 'TIKET'; // билет
export const WALLET = 'WALLET'; // кошелек
export const DELETE = 'DELETE'; // корзина - удалить
export const EDIT = 'EDIT'; // редактировать - ручка
export const STAR = 'STAR'; // звезда
export const COIN = 'COIN'; // монетка доллар
export const GOOGLE_PLAY = 'GOOGLE_PLAY'; // плей маркет иконка
export const SETTING = 'SETTING'; // настройки
export const CARD = 'CARD'; // банковская карта
export const SHARE = 'SHARE'; // поделиться
export const USER = 'USER'; // аккаунт
export const STATISTIC = 'STATISTIC'; // статистика
export const EXCHANGE = 'EXCHANGE'; // обмена
export const PERIOD = 'PERIOD'; // календарь
export const PASSWORD = 'PASSWORD'; // пароль, пин
export const LANGUAGE = 'LANGUAGE'; // язык, глобус
export const DOLLAR = 'DOLLAR'; // валюта, доллар
export const THEME = 'THEME'; // тема, лампочка
export const CLEAR = 'CLEAR'; // отчистить
export const HOME = 'HOME'; // домик
export const DEVELOPER = 'DEVELOPER'; // - </>

export const VK = 'VK'; // логотип вк
export const INST = 'INST'; // логотип инсты
export const TELEGRAM = 'TELEGRAM'; // логотип телеграмма
export const TWITTER = 'TWITTER'; // логотип твитера
export const LINKEDIN = 'LINKEDIN'; // логотип линкедина

export const REACT = 'REACT'; // логотип реакта

export const ICONS = [MEDIC, MUSIC, HOME,
    PIGGY_BANK, STEAM, GAS, GEAR, FILL, TAXI, TOOTCH, 
    TOOTHPASTE, BANK, REFUND, REFUND_REPO, ANIMAL, BASKET, BURGER, BUS, 
    CAR, CHARITY, CLOTHES, COSMETICS, EDUCATION,
    ENERGY, FAMILY, FLIGHT, GAME, GIFT, GLASS, GLASSES, HEART, INTERNET, 
    MAP, MONEY_BAG, PHONE, PRODUCTS, QUESTION, COIN,
    RESTAURANT, SPORT, TAG, TECHNIK, TIKET, WALLET, CARD];

type name<T> = T[keyof T]
export type TICONS = name<typeof ICONS>