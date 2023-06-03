import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), 'public/assets/user-profile'), // Path to the uploads folder
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${fileExtension}`);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  upload.single('file')(req, res, (error) => {
    if (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Failed to upload image' });
    } else {
      const { filename } = req.file;
      res.status(200).json({ filename });
    }
  });
}
