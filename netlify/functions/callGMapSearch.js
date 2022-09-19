const axios = require('axios')

const countries = require('./countries.json')

exports.handler = function (event) {
  const country = countries[event.headers['x-country']]
  console.log(
    `https://api.maptiler.com/geocoding/${event.rawQuery}.json&proximity=${country[0]},${country[1]}&language=fr`
  )
  return axios
    .get(
      `https://api.maptiler.com/geocoding/${event.rawQuery}.json&proximity=${country[0]},${country[1]}&language=fr&key=${process.env.MAPTILER_API_KEY}`
    )
    .then((res) => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTION',
      },
      body: JSON.stringify(res.data),
    }))
}
