import multer from "multer";
const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 5000000000 }
});

export default upload