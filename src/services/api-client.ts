import axios from 'axios'

//creating axios instance with custom configuration

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key : '8c982aa9da00451698ff9c2c758698ce'
    }
})