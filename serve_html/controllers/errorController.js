let httpStatus = require("http-status-codes")
let path = require("path")

exports.responseNoResoure = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND
  res.status(errorCode)
  let file = path.join(__dirname, `../public/${errorCode}.html`)
  res.sendFile(file)
}