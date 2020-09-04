require("dotenv").config()
import fetch from "node-fetch";
import { GITHUB_USERNAME, REPOSITORY } from "../src/theme.config"

const API_ENDPOINT = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPOSITORY}/labels`;
const OPTIONS = {
    headers: {
        "Accept": "application/json",
        "Authorization": `token ${process.env.TOKEN}`
    }
}

module.exports = (req, res) => {
    fetch(API_ENDPOINT, OPTIONS)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(error => error);
};