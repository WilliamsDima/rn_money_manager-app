import NetAPI from "./http"

class RateAPI extends NetAPI {

    getCurrencyUrl(to: string, from: string) {
        return `${from}/${to}.json`
    }

    async getCurrency(to: string, from: string) {
        try {
        const response = await this.get(this.getCurrencyUrl(to, from))
        return response.data
        } catch (e: any) {
        return this.getError(e)
        }
    }
}

export const rateAPI = new RateAPI()