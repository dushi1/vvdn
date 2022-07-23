/**
 * NOT_FOUND(404) middleware to catch error response
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */

export function notFoundErrorHandler(req, res, next) {
  res.status(404).json({
    success: false,
    error: {
      code: 404,
      message: "Not found",
    },
  });
}

/**
 * Generic error response middleware
 *
 * @param  {object}   err
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    success: false,
    error: {
      code: err.code || 500,
      message: err.message || "Internal server error",
    },
  });
}
