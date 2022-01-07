const axios = require('axios')

exports.handler = function (event) {
  console.log(event)
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${event.queryStringParameters.destinations}&origins=${event.queryStringParameters.origins}&key=${process.env.GMAP_API_KEY}`
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
