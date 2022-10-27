import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'

// ключ с бесплатным апи курса валют
const key = 'r2NQ3RaZ7uQ7ioNorqK3e4gkfDnl8blL'

const $axios: AxiosInstance = axios.create({
  baseURL: 'https://api.apilayer.com/currency_data/',
  headers: {
    apikey: key
  },
})

$axios.interceptors.request.use(
  async (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

export default class NetAPI {
  /**
   * @constructor
   * @param $axios - client to create http calls
   */

  /**
   * GET method to call API
   * @param {string} url - url to call
   * @param {*} params
   * @returns response
   */
  protected async get(url: string, params?: AxiosRequestConfig) {
    try {
      return await $axios.get(url, params)
    } catch (e) {
      console.log('HTTP GET Error', { e, url })
      return Promise.reject(e)
    }
  }

  /**
   * POST method to call API
   * @param {string} url - url to call
   * @param {object} body - request body
   * @param {*} params
   * @returns response
   */
  protected async post(
    url: string,
    body: { [key in string]: any },
    params?: AxiosRequestConfig
  ) {
    try {
      return await $axios.post(url, body, params && params)
    } catch (e) {
      console.log('HTTP POST Error', { e, url })
      return Promise.reject(e)
    }
  }

  /**
   * PUT method to call API
   * @param {string} url - url to call
   * @param {object} data - request data
   * @param {*} params
   * @returns response
   */
  protected async put(
    url: string,
    data?: { [key in string]: any },
    params?: AxiosRequestConfig
  ) {
    try {
      return await $axios.put(url, data, params)
    } catch (e) {
      console.log('HTTP PUT Error', { e, url })
      return Promise.reject(e)
    }
  }

  /**
   * DELETE method to call API
   * @param {string} url - url to call
   * @param {*} params
   * @returns response
   */
  protected async delete(url: string, params?: AxiosRequestConfig) {
    try {
      return await $axios.delete(url, params)
    } catch (e) {
      console.log('HTTP DELETE Error', { e, url })
      return Promise.reject(e)
    }
  }

  /**
   * Parse error reponse to error message
   * @param {object} error - error format {data: {message: string}}
   * @return {error: string}
   * */
  getError(error: Error | AxiosError) {
    if (axios.isAxiosError(error)) {
      return Promise.reject({
        error:
          error?.response?.data.message || error.message || 'Unknown error',
      })
    } else {
      return Promise.reject({ error: 'Unknown error' })
    }
  }
}

