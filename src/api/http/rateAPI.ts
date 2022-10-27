import NetAPI from "./http"

class RateAPI extends NetAPI {

    getCurrencyUrl(to: string, from: string) {
        return `convert?to=${to}&from=${from}&amount=1`
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