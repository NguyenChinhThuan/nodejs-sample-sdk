const HTTP_CODE = {
  OK: 200,
  301: 301,
  NOT_FOUND: 404,
  INVALID_PARAMS: 400,
  BAD_REQUEST: 400,
  BAD_GATEWAY: 502,
}

const HttpStatus = {
  OK: 'OK',
  NOT_FOUND: 'NOT_FOUND',
  INVALID_PARAMS: 'INVALID_PARAMS',
  BAD_REQUEST: 'BAD_REQUEST',
  BAD_GATEWAY: 'BAD_GATEWAY',
}

function clean(obj) {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
  return obj
}

const APIResponse = function (status, message, errorCode, data = null, total = null, time = new Date().getTime()) {
  const result = { status, message, errorCode, data, total, time }
  return clean(result)
}

const APIResponseOK = function (data = null, message, total = null, time) {
  return APIResponse(HttpStatus.OK, message, HTTP_CODE.OK, data, total, time)
}

const APIResponseNotfound = function (message) {
  return APIResponse(HttpStatus.NOT_FOUND, message, HTTP_CODE.NOT_FOUND)
}

const APIResponseBadGateway = function (message) {
  return APIResponse(HttpStatus.BAD_GATEWAY, message, HTTP_CODE.BAD_GATEWAY)
}

const APIResponseInvalidParams = function (message, data = null) {
  return APIResponse(HttpStatus.INVALID_PARAMS, message, HTTP_CODE.INVALID_PARAMS, data)
}

const APIResponseBadRequest = function (message) {
  return APIResponse(HttpStatus.BAD_REQUEST, message, HTTP_CODE.BAD_REQUEST)
}

// has valid api response
const APIResponseHasValidData = function (resp) {
  if (!resp || resp.status !== HttpStatus.OK || !resp.data || resp.data.length === 0) {
    return false
  }
  return true
}
const ERROR_CODE = {}
module.exports = {
  HTTP_CODE,
  HttpStatus,
  ERROR_CODE,
  APIResponse,
  APIResponseOK,
  APIResponseNotfound,
  APIResponseInvalidParams,
  APIResponseBadGateway,
  APIResponseBadRequest,
  APIResponseHasValidData,
}
