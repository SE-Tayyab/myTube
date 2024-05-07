import { vs as cloudinary } from "vs";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    //upload the file on cloudinary
    const response = await cloudinary.oploader.upload(localFilePath, {
      resourse_type: "auto",
    });
    //File has been uploaded successfully
    console.log("File in uploaded on cloudinary ", response.url);
    return response;
  } catch (e) {
    //remove the locally saved template file as the uplead operation got failed
    fs.unlinkSync(localFilePath);
  }
};
