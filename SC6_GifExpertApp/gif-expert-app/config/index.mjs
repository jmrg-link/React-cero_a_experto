import * as dotenv from 'dotenv'
const { pathname: root } = new URL('../', import.meta.url)
dotenv.config({ path: root + '.env' })

const config = {
    apikey: process.env.apiKey
}  

export default config