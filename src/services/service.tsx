const axios = require('axios');

const headers = {
  "Content-Type": "application/json",
  "apikey": "a905b8b3abfb4428b1b8e21689382830",
}

async function shortenUrl(url : string) {
    let endpoint = "https://api.rebrandly.com/v1/links";
    let linkRequest = {
      destination: url,
      domain: { fullName: "rebrand.ly" }
    }
    const apiCall = {
        method: 'post',
        url: endpoint,
        data: linkRequest,
        headers: headers
    }
    let apiResponse = await axios(apiCall);
    return apiResponse;
}

export default shortenUrl