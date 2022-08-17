import React, { FC } from "react";
import AccauntsSvg from "../assets/svg/AccountsSvg";
import ArrowSelectSvg from "../assets/svg/ArrowSelectSvg";
import CategoriesSvg from "../assets/svg/CategoriesSvg";
import { HeaderLeftSvg } from "../assets/svg/HeaderLeftIconSvg";
import { HistorySvg } from "../assets/svg/HistorySvg";
import HomeSvg from "../assets/svg/HomeSvg";
import { MoreSvg } from "../assets/svg/MoreSvg";
import { PlusSvg } from "../assets/svg/PlusSvg";
import { RoutesNames } from "../navigation/routes-names";

export const ICONS_SVG = {
    // tab
    [RoutesNames.Main.Home]: (props) => <HomeSvg color={props.color} {...props}/>, // домик
    [RoutesNames.Accaunts.Home]: (props) => <AccauntsSvg color={props.color} {...props}/>, // Карточки
    [RoutesNames.Categories.Home]: (props) => <CategoriesSvg color={props.color} {...props}/>, // категории
    [RoutesNames.More.Home]: (props) => <MoreSvg color={props.color} {...props}/>,// три точки
    //

    header_left: (props) => <HeaderLeftSvg color={props.color} {...props}/>, // счёт
    arrow_select: (props) => <ArrowSelectSvg color={props.color} {...props}/>, // стрелочки выбора
    history: (props) => <HistorySvg color={props.color} {...props}/>, // история
    plus_circle: (props) => <PlusSvg color={props.color} {...props}/>, // плючис в кружочке
}

interface IIconSvg {
    name: string
    color?: string
}

export const IconSvg: FC<IIconSvg> = (props) => {

    return ICONS_SVG[props.name] && ICONS_SVG[props.name](props) || <></>
}
