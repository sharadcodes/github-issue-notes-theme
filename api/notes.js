require("dotenv").config()
import fetch from "node-fetch";
import { GITHUB_USERNAME, REPOSITORY } from "../src/theme.config"

const API_ENDPOINT = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPOSITORY}/issues`;
const OPTIONS = {
    headers: {
        "Accept": "application/json",
        "Authorization": `token ${process.env.TOKEN}`
    }
}

module.exports = (req, res) => {
    if (req.query.tag) {
	fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${REPOSITORY}/issues?labels=${req.query.tag}`, OPTIONS)
	    .then(response => response.json())
	    .then(data => res.send(data))
	    .catch(error => error);
    }
    else if (req.query.id) {
	fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${REPOSITORY}/issues/${req.query.id}`, OPTIONS)
	    .then(response => response.json())
	    .then(data => res.send(data))
	    .catch(error => error);
    } else {
    	fetch(API_ENDPOINT, OPTIONS)
	    .then(response => response.json())
	    .then(data => res.send(data))
	    .catch(error => error);
    }
};
