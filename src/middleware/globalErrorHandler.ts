// import { Request, Response, NextFunction } from 'express';
// import ApiError from '../utils/errorHandler';

// const globalErrorHandler = (
//   err: ApiError | Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const statusCode = (err instanceof ApiError && err.statusCode) || 500;

//   res.status(statusCode).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//     error: err
//   });
// };

// export default globalErrorHandler;
