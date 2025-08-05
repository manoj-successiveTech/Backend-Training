// src/middleware/errorMiddleware.ts

import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

// Lookup table for common HTTP status codes and their messages

const getErrorTitle: Record<number, string> = {

  // 2xx Series – Success
  200: "OK - Request succeeded",
  201: "Created - Resource created successfully",
  204: "No Content - Success with no response body",

  // 3xx Series – Redirection
  301: "Moved Permanently - Resource moved to a new URL",
  302: "Found - Resource temporarily moved",
  304: "Not Modified - Cached version is still valid",

  // 4xx Series – Client Errors
  400: "Bad Request - Invalid request syntax/data",
  401: "Unauthorized - Authentication required",
  403: "Forbidden - Access denied",
  404: "Not Found - Route or resource not found",
  409: "Conflict - Resource conflict (e.g., duplicate entry)",

  // 5xx Series – Server Errors
  500: "Internal Server Error - Something went wrong on the server",
  502: "Bad Gateway - Invalid response from upstream server",
  503: "Service Unavailable - Server is overloaded or down",
};

/* Function-based error-handling middleware for Express */

export const errorHandleMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Use status from error object, or fallback to 500
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";

  // Lookup error title from the table, fallback to "Unknown Error"
  const errorTitle = getErrorTitle[statusCode] || "Unknown Error";

 return res.status(statusCode).json({
    success: false,
    error: errorTitle,
    message,
  });
};
