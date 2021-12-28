const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../../public/images/products')) //Indica la ruta donde se van a guardar los archivos que subamos
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_img_${path.extname(file.originalname)}`) //Construye el nombre del archivo subido para que sea único.
    }
})

const uploadFile = multer({storage})

module.exports = uploadFile;