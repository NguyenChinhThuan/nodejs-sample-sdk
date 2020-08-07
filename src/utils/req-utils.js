function getQuery(req) {
  const data = req.method === 'GET' ? req.query : req.method === 'POST' ? req.body : {}
  const query = data.q ? JSON.parse(data.q) : {}
  return query
}

function getParams(req, name) {
  const data = req.method === 'GET' ? req.query : req.method === 'POST' ? req.body : {}
  return data[name] ? data[name] : null
}

function getUtcDate(req, name) {
  const data = req.method === 'GET' ? req.query : req.method === 'POST' ? req.body : {}
  const result = data[name] ? moment(data[name]).utc() : null
  return result
}

module.exports = {
  getQuery,
  getParams,
  getUtcDate,
}
