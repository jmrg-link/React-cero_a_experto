import * as dotenv from 'dotenv'
import { join , dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const __env = join(__dirname, '../')
dotenv.config({ path: __env + '.env' })

//const { pathname: root } = new URL('../../../', import.meta.url)

const config = {
    apikey: process.env.apiKey
}  

export default config