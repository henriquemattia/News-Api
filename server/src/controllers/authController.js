import dotenv from "dotenv"
import axios from "axios"

dotenv.config()
const key = process.env.API_SECRET


class AuthController {



    static home = async (req, res) =>{
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)  
        }
    }

    static search = async (req, res) =>{

        let search = req.body.search
        
        try {
            const result = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }

    

    static brazil = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }

    static usa = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }
}

export default AuthController;
