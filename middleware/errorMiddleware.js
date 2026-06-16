// 1. 404 Not Found Middleware (Jab user koi ghalat endpoint hit kare)
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// 2. Global Custom Error Handler Middleware
export const errorHandler = (err, req, res, next) => {
  // Agar status code 200 hai to usay 500 (Internal Server Error) kar do
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Agar MongoDB ki invalid ObjectId ka error ho (CastError)
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found (Invalid ID format)';
  }

  res.status(statusCode).json({
    message: message,
    // Production me stack trace hide rakhenge taake security database paths leak na hon
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};