import multer from "multer";
import path from "path";
 const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "uploads"); // Save the file in the 'uploads' folder
    },
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = path.extname(file.originalname);
      callback(null, file.fieldname + "-" + uniqueSuffix + extension);
    },
  });

 export const MultiImageupload = multer({ storage: storage });
