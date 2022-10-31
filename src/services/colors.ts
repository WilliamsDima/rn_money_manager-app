interface ICOLORS {
    mainColor: string
    colorPriamry: string
    colorShadow: string
    colorBlack: string
    colorLightBlack: string
    colorHeader: string
    colorSecondary: string
    colorBgModal: string
    colorYellow: string
    colorRed: string
    colorText: string
}

export let COLORS: ICOLORS = {
    mainColor: '#2EE5AC',
    colorPriamry: '#fff',
    colorShadow: 'rgb(13, 24, 40)',
    colorBlack: '#111',
    colorLightBlack: '#333',
    colorHeader: '#3A8050',
    colorSecondary: '#444',
    colorBgModal: 'rgba(0, 0, 0, 0.8)',
    colorYellow: '#F0CB50',
    colorRed: 'red',
    colorText: '#fff'
}

export const themeAppInit = (value) => {

    if (value === 'dark') {
        COLORS = {
            mainColor: '#2EE5AC',
            colorPriamry: '#fff',
            colorShadow: 'rgb(13, 24, 40)',
            colorBlack: '#111',
            colorLightBlack: '#333',
            colorHeader: '#3A8050',
            colorSecondary: '#444',
            colorBgModal: 'rgba(0, 0, 0, 0.8)',
            colorYellow: '#F0CB50',
            colorRed: 'red',
            colorText: '#fff',
        }
    } else {
        COLORS = {
            mainColor: '#2EE5AC',
            colorPriamry: '#fff',
            colorShadow: 'rgb(13, 24, 40)',
            colorBlack: '#fff',
            colorLightBlack: '#f1f1f1',
            colorHeader: '#3A8050',
            colorSecondary: '#B5B5B5',
            colorBgModal: 'rgba(0, 0, 0, 0.8)',
            colorYellow: '#F0CB50',
            colorRed: 'red',
            colorText: '#000'
        }
    }
}

