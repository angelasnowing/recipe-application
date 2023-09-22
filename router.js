const httpStatus = require("http-status-codes")

let route = {
  "GET": {},
  "POST": {}
}

exports.handle = function(req, res) {
  let url = req.url
  let method = req.method

  try {
    if (route[method][url]){
      route[method][url](req, res)
    } else {
      let errorCode = httpStatus.NOT_FOUND
      res.writeHead(errorCode, {
        "Content-Type": "text/html"
      })
      res.sendFile("./serve_html/public/404.html")
    }
  } catch(ex) {
    console.log(ex)
  }
}

exports.get = (url, action) => {
  return route["GET"][url] = action
}

exports.post = (url, action) => {
  return route["POST"][url] = action
}