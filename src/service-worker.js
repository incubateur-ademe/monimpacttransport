window.self.addEventListener('install', function (e) {
  window.self.skipWaiting()
})

window.self.addEventListener('activate', function (e) {
  window.self.registration
    .unregister()
    .then(function () {
      return window.self.clients.matchAll()
    })
    .then(function (clients) {
      clients.forEach((client) => client.navigate(client.url))
    })
})
