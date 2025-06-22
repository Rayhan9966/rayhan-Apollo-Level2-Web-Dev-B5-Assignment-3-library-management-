import { Response } from "express";

export const handleError = (res: Response, err: any) => {
  res.status(400).json({
    message: "Validation failed",
    success: false,
    error: err
  });
};
export  default handleError;