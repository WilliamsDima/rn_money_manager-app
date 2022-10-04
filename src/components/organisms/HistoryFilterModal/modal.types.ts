export interface IHistoryModal {
    close: () => void
    submit: () => void
    typeValue: boolean | 'all'
    sortOrderValue: boolean | 'all'
}
