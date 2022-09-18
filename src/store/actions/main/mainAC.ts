import { countSumItemsFromList } from "../../../hooks/helpers";
import { IStore } from "../../redusers/main/types";
import { IACMain } from "./types";

// сделать тип state глобальным чтоб были подсказки

export const reducers = {
        setAllCauntAccaunts: (state: IStore) => {
            const sum = countSumItemsFromList(state.accounts)

            state.accounts = state.accounts.map((ac) => {
                if(ac.id === 0) {
                    ac.count = sum
                }
                return ac
            })
        },
};
