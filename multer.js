import multer from "multer";
const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 50000000 }
});

export default upload