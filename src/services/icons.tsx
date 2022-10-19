import React, { FC } from "react";
import AccauntsSvg from "../assets/svg/AccountsSvg";
import ArrowSelectSvg from "../assets/svg/ArrowSelectSvg";
import CategoriesSvg from "../assets/svg/CategoriesSvg";
import { HeaderLeftSvg } from "../assets/svg/HeaderLeftIconSvg";
import { HistorySvg } from "../assets/svg/HistorySvg";
import HomeSvg from "../assets/svg/HomeSvg";
import HeartSvg from '../assets/svg/categories/HeartSvg'
import { MoreSvg } from "../assets/svg/MoreSvg";
import { PlusSvg } from "../assets/svg/PlusSvg";
import { ANIMAL, ARROW_SELECT, BANK, BASKET, BURGER, BUS, CAR, CARD, CHARITY, CLOTHES, 
    COIN, 
    COSMETICS, DELETE, EDIT, EDUCATION, ENERGY, EXCHANGE, FAMILY, FILL, FLIGHT, GAME, GAS, GEAR, GIFT,
     GLASS, GLASSES, GOOGLE_PLAY, HEADER_LEFT, HEART, HISTORY, INST, INTERNET, LINKEDIN, MAP, 
     MEDIC, 
     MONEY_BAG, MUSIC, PHONE, PIGGY_BANK, PLUS_CIRCLE, PRODUCTS, 
     QUESTION, REACT, REFUND, REFUND_REPO, RESTAURANT, SETTING, SHARE, SPORT, STAR, STATISTIC, STEAM, TAB_ACCAUNTS, 
     TAB_CATEGORIES, TAB_HOME, TAB_MORE, TAG, TAXI, TECHNIK, TELEGRAM, TICONS, TIKET, 
     TOOTCH, TOOTHPASTE, TWITTER, USER, VK, WALLET } from "./iconsName";
import { MoneyBagSvg } from "../assets/svg/categories/MoneyBagSvg";
import { WalletSvg } from "../assets/svg/categories/WalletSvg";
import { PiggyBankSvg } from "../assets/svg/categories/PiggyBankSvg";
import RefundMoney from "../assets/svg/categories/RefundMoneySvg";
import { RefundRepoSvg } from "../assets/svg/categories/RefundRepoSvg";
import { TechnikSvg } from "../assets/svg/categories/TechnikSvg";
import { TagSvg } from "../assets/svg/categories/TagSvg";
import { SportSvg } from "../assets/svg/categories/SportSvg";
import { RestaurantSvg } from "../assets/svg/categories/RestaurantSvg";
import { QuestionSvg } from "../assets/svg/categories/QuestionSvg";
import { ProductsSvg } from "../assets/svg/categories/ProductsSvg";
import { PhoneSvg } from "../assets/svg/categories/PhoneSvg";
import { MapSvg } from "../assets/svg/categories/MapSvg";
import { InternetSvg } from "../assets/svg/categories/InternetSvg";
import { GlassesSvg } from "../assets/svg/categories/GlassesSvg";
import { GlassSvg } from "../assets/svg/categories/GlassSvg";
import { GiftSvg } from "../assets/svg/categories/GiftSvg";
import { GameSvg } from "../assets/svg/categories/GameSvg";
import { FlightSvg } from "../assets/svg/categories/FlightSvg";
import { FamilySvg } from "../assets/svg/categories/FamilySvg";
import { EnergySvg } from "../assets/svg/categories/EnergySvg";
import { EducationSvg } from "../assets/svg/categories/EducationSvg";
import { CosmeticsSvg } from "../assets/svg/categories/CosmeticsSvg";
import { ClothesSvg } from "../assets/svg/categories/ClothesSvg";
import { CharitySvg } from "../assets/svg/categories/CharitySvg";
import { CarSvg } from "../assets/svg/categories/CarSvg";
import { BusSvg } from "../assets/svg/categories/BusSvg";
import { BurgerSvg } from "../assets/svg/categories/BurgerSvg";
import { BasketSvg } from "../assets/svg/categories/BasketSvg";
import { AnimalSvg } from "../assets/svg/categories/AnimalSvg";
import { BankSvg } from "../assets/svg/categories/BankSvg";
import { ToothpasteSvg } from "../assets/svg/categories/ToothpasteSvg";
import { TootchSvg } from "../assets/svg/categories/TootchSvg";
import { TaxiSvg } from "../assets/svg/categories/TaxiSvg";
import { FillSvg } from "../assets/svg/categories/FillSvg";
import { GearSvg } from "../assets/svg/categories/GearSvg";
import { GasSvg } from "../assets/svg/categories/GasSvg";
import { SteamSvg } from "../assets/svg/categories/SteamSvg";
import { MusicSvg } from "../assets/svg/categories/MusicSvg";
import { MedicineSvg } from "../assets/svg/categories/MedicineSvg";
import DeleteSvg from "../assets/svg/DeleteSvg";
import EditSvg from "../assets/svg/EditSvg";
import StarSvg from "../assets/svg/StarSvg";
import CoinSvg from "../assets/svg/CoinSvg";
import { ReactSvg } from "../assets/svg/socials/ReactSvg";
import { SettingSvg } from "../assets/svg/SettingSvg";
import { VkSvg } from "../assets/svg/socials/VkSvg";
import { InstSvg } from "../assets/svg/socials/InstSvg";
import { TwitterSvg } from "../assets/svg/socials/TwitterSvg";
import { TelegaSvg } from "../assets/svg/socials/TelegaSvg";
import LinkedinSvg from "../assets/svg/socials/LinkedinSvg";
import CardSvg from "../assets/svg/categories/CardSvg";
import ShareSvg from "../assets/svg/ShareSvg";
import UserSvg from "../assets/svg/UserSvg";
import StatisticSvg from "../assets/svg/StatisticSvg";
import ExchangeSvg from "../assets/svg/ExchangeSvg";
import GooglePlaySvg from "../assets/svg/GooglePlaySvg";

export const ICONS_SVG = {
    // tab
    [TAB_HOME]: (props) => <HomeSvg color={props.color} {...props}/>,
    [TAB_ACCAUNTS]: (props) => <AccauntsSvg color={props.color} {...props}/>,
    [TAB_CATEGORIES]: (props) => <CategoriesSvg color={props.color} {...props}/>,
    [TAB_MORE]: (props) => <MoreSvg color={props.color} {...props}/>,
    //

    [MONEY_BAG]: (props) => <MoneyBagSvg color={props.color} {...props}/>,
    [WALLET]: (props) => <WalletSvg color={props.color} {...props}/>,
    [PIGGY_BANK]: (props) => <PiggyBankSvg color={props.color} {...props}/>,
    [HEADER_LEFT]: (props) => <HeaderLeftSvg color={props.color} {...props}/>,
    [ARROW_SELECT]: (props) => <ArrowSelectSvg color={props.color} {...props}/>,
    [HISTORY]: (props) => <HistorySvg color={props.color} {...props}/>,
    [PLUS_CIRCLE]: (props) => <PlusSvg color={props.color} {...props}/>,
    [HEART]: (props) => <HeartSvg color={props.color} {...props}/>,
    [REFUND]: (props) => <RefundMoney color={props.color} {...props}/>,
    [REFUND_REPO]: (props) => <RefundRepoSvg color={props.color} {...props}/>,
    [TIKET]: (props) => <RefundRepoSvg color={props.color} {...props}/>,
    [TECHNIK]: (props) => <TechnikSvg color={props.color} {...props}/>,
    [TAG]: (props) => <TagSvg color={props.color} {...props}/>,
    [SPORT]: (props) => <SportSvg color={props.color} {...props}/>,
    [RESTAURANT]: (props) => <RestaurantSvg color={props.color} {...props}/>,
    [QUESTION]: (props) => <QuestionSvg color={props.color} {...props}/>,
    [PRODUCTS]: (props) => <ProductsSvg color={props.color} {...props}/>,
    [PHONE]: (props) => <PhoneSvg color={props.color} {...props}/>,
    [MAP]: (props) => <MapSvg color={props.color} {...props}/>,
    [INTERNET]: (props) => <InternetSvg color={props.color} {...props}/>,
    [GLASSES]: (props) => <GlassesSvg color={props.color} {...props}/>,
    [GLASS]: (props) => <GlassSvg color={props.color} {...props}/>,
    [GIFT]: (props) => <GiftSvg color={props.color} {...props}/>,
    [GAME]: (props) => <GameSvg color={props.color} {...props}/>,
    [FLIGHT]: (props) => <FlightSvg color={props.color} {...props}/>,
    [FAMILY]: (props) => <FamilySvg color={props.color} {...props}/>,
    [ENERGY]: (props) => <EnergySvg color={props.color} {...props}/>,
    [EDUCATION]: (props) => <EducationSvg color={props.color} {...props}/>,
    [COSMETICS]: (props) => <CosmeticsSvg color={props.color} {...props}/>,
    [CLOTHES]: (props) => <ClothesSvg color={props.color} {...props}/>,
    [CHARITY]: (props) => <CharitySvg color={props.color} {...props}/>,
    [CAR]: (props) => <CarSvg color={props.color} {...props}/>,
    [BUS]: (props) => <BusSvg color={props.color} {...props}/>,
    [BURGER]: (props) => <BurgerSvg color={props.color} {...props}/>,
    [BASKET]: (props) => <BasketSvg color={props.color} {...props}/>,
    [ANIMAL]: (props) => <AnimalSvg color={props.color} {...props}/>,
    [BANK]: (props) => <BankSvg color={props.color} {...props}/>,
    [TOOTHPASTE]: (props) => <ToothpasteSvg color={props.color} {...props}/>,
    [TOOTCH]: (props) => <TootchSvg color={props.color} {...props}/>,
    [TAXI]: (props) => <TaxiSvg color={props.color} {...props}/>,
    [FILL]: (props) => <FillSvg color={props.color} {...props}/>,
    [GEAR]: (props) => <GearSvg color={props.color} {...props}/>,
    [GAS]: (props) => <GasSvg color={props.color} {...props}/>,
    [STEAM]: (props) => <SteamSvg color={props.color} {...props}/>,
    [MUSIC]: (props) => <MusicSvg color={props.color} {...props}/>,
    [MEDIC]: (props) => <MedicineSvg color={props.color} {...props}/>,
    [DELETE]: (props) => <DeleteSvg color={props.color} {...props}/>,
    [EDIT]: (props) => <EditSvg color={props.color} {...props}/>,
    [STAR]: (props) => <StarSvg color={props.color} {...props}/>,
    [COIN]: (props) => <CoinSvg color={props.color} {...props}/>,
    [REACT]: (props) => <ReactSvg color={props.color} {...props}/>,
    [SETTING]: (props) => <SettingSvg color={props.color} {...props}/>,
    [CARD]: (props) => <CardSvg color={props.color} {...props}/>,
    [SHARE]: (props) => <ShareSvg color={props.color} {...props}/>,
    [USER]: (props) => <UserSvg color={props.color} {...props}/>,
    [STATISTIC]: (props) => <StatisticSvg color={props.color} {...props}/>,
    [EXCHANGE]: (props) => <ExchangeSvg color={props.color} {...props}/>,
    [GOOGLE_PLAY]: (props) => <GooglePlaySvg color={props.color} {...props}/>,

    [VK]: (props) => <VkSvg color={props.color} {...props}/>,
    [INST]: (props) => <InstSvg color={props.color} {...props}/>,
    [TWITTER]: (props) => <TwitterSvg color={props.color} {...props}/>,
    [TELEGRAM]: (props) => <TelegaSvg color={props.color} {...props}/>,
    [LINKEDIN]: (props) => <LinkedinSvg color={props.color} {...props}/>,
}

interface IIconSvg {
    name: TICONS 
    color?: string
}

export const IconSvg: FC<IIconSvg> = (props) => {

    return ICONS_SVG[props.name] && ICONS_SVG[props.name](props) || <></>
}
