const fetch = require('node-fetch');

const body = {a: 1};

async function nextLaunch() {
    const response = await fetch(`https://api.spacexdata.com/v3/launches/next`);
    const data = await response.json()
    return data;
}

exports.nextLaunch = nextLaunch