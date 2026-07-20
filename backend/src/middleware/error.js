export function notFound(req, res, _next) {
  res.status(404).json({ message: `Not found: ${req.originalUrl}` });
}

export function errorHandler(err, _req, res, _next) {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Server error";
  if (status >= 500) console.error(err);
  res.status(status).json({ message, ...(err.errors ? { errors: err.errors } : {}) });
}