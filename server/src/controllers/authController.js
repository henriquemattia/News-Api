import dotenv from "dotenv"
import axios from "axios"

dotenv.config()
const key = process.env.API_SECRET


class AuthController {

    static search = async (req, res) => {

        let search = req.body.search

        try {
            const result = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }

    static brasil = async (req, res) => {
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

    static london = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }
    
    static ucrania = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }

    static russia = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }

    static argentina = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }

    static venezuela = async (req, res) => {
        try {
            const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=ve&apiKey=${key}`)
            return res.status(200).send(result.data)

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    }
}

export default AuthController;
