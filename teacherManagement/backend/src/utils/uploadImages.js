import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./apiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECURE,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new ApiError(404, "File path not provided");
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    if (!response || !response.public_id) {
      throw new ApiError(400, "Cloudinary upload failed");
    }

    return response;
  } catch (error) {
    throw new ApiError(500, `Error uploading file: ${error}`);
  }
};

export { uploadOnCloudinary };
