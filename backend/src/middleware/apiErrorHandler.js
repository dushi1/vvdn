// NOT_FOUND(404) middleware to catch error response

function notFoundErrorHandler(req, res, next) {
  return res.status(404).json({
    success: false,
    error: {
      code: 404,
      message: "Not found",
    },
  });
}

// Generic error response middleware

function errorHandler(err, req, res, next) {
  return res.status(err.status || 500).json({
    success: false,
    error: {
      code: err.code || 500,
      message: err.message || "Internal server error",
    },
  });
}

module.exports = { errorHandler, notFoundErrorHandler };
