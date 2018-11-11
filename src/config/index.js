import os from "os";
import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT;
export const uploadDir = os.tmpdir;
export const dbURL = process.env.DATABASE_URL;
export const env = process.env.NODE_ENV;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpiry = process.env.JWT_EXPIRY;
// export const sendgridKey = process.env.SENDGRID_KEY;
