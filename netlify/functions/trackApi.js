var MatomoTracker = require('matomo-tracker')

var matomo = new MatomoTracker(155, 'https://stats.data.gouv.fr/matomo.php')

matomo.on('error', function (err) {
  console.log('error tracking request: ', err)
})

exports.handler = async function (event) {
  return matomo
    .track(
      `https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=${event.queryStringParameters.km}`
    )
    .then((res) => console.log('then: ', res))
}
