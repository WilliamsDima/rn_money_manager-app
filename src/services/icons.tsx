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
import { RoutesNames } from "../navigation/routes-names";
import { ARROW_SELECT, HEADER_LEFT, HEART, HISTORY, MONEY_BAG, PIGGY_BANK, PLUS_CIRCLE, TAB_ACCAUNTS, TAB_CATEGORIES, TAB_HOME, TAB_MORE, TICONS, WALLET } from "./iconsName";
import { MoneyBagSvg } from "../assets/svg/categories/MoneyBagSvg";
import { WalletSvg } from "../assets/svg/categories/WalletSvg";
import { PiggyBankSvg } from "../assets/svg/categories/PiggyBankSvg";

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
}

interface IIconSvg {
    name: TICONS 
    color?: string
}

export const IconSvg: FC<IIconSvg> = (props) => {

    return ICONS_SVG[props.name] && ICONS_SVG[props.name](props) || <></>
}
