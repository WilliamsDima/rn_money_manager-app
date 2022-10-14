import NetAPI from "./http"

// сайт https://currate.ru/#list

class RateAPI extends NetAPI {
    private key = 'f0052f88ec5f33664d78fe0bfee213d2'
    private currencies_url = '?get=currency_list&key='

    getCurrencyUrl(currency?: string) {
        return `?get=rates&pairs=${currency}&key=`
    }

    async getCurrencies() {
        try {
        const response = await this.get(this.currencies_url + this.key)
        return response.data
        } catch (e: any) {
        return this.getError(e)
        }
    }

    async getCurrency(currency?: string) {
        try {
        const response = await this.get(this.getCurrencyUrl(currency) + this.key)
        return response.data
        } catch (e: any) {
        return this.getError(e)
        }
    }
}

export const rateAPI = new RateAPI()