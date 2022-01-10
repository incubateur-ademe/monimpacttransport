const axios = require('axios')

const countries = require('./countries.json')

exports.handler = function (event) {
  const country = countries[event.headers['x-country']]
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?${event.rawQuery}&location=${country[0]},${country[1]}&key=${process.env.GMAP_API_KEY}`
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
