const fetch = require('node-fetch');

const body = {a: 1};

async function next() {
    const response = await fetch(`https://api.spacexdata.com/v3/launches/next`);
    const data = await response.json();
    console.log(data);
};