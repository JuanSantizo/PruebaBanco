const { Router } = require("express");
const router = Router();

const {
	ImagenesListar,
	ImagenInsertar,
	ImageneDetalle,
	ImagenesModificar,
} = require("../controllers/imagenes");

router.get("/API/Imagenes", ImagenesListar);
router.post("/API/Imagenes", ImagenInsertar);
router.get("/API/Imagenes/:id", ImageneDetalle);
router.put("/API/Imagenes/:id", ImagenesModificar);

module.exports = router;
