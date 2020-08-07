const ReqUtils = require('../utils/req-utils')
const { APIResponseOK } = require('../utils/resp-utils')

function all(req, res, next) {
  const version = ReqUtils.getParams(req, 'version')

  res.json(APIResponseOK([], `your request is success with parameter version is ${version}`, 0))
}

module.exports = {
  all,
}
