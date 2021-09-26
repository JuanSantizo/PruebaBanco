const { Router } = require("express");
const router = Router();

const {
	EmpresasListar,
	EmpresasGuardar,
	EmpresaDatos,
	EmpresaActualizar,
} = require("../controllers/empresas");

router.get("/API/Empresa", EmpresasListar);
router.post("/API/Empresa", EmpresasGuardar);

router.get("/API/Empresa/:id", EmpresaDatos);
router.put("/API/Empresa/:id", EmpresaActualizar);

module.exports = router;
