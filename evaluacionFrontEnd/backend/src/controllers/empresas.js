const moment = require("moment");
const axios = require("axios");

const EmpresasListar = async (req, res) => {
	console.log(
		"Empresas Listar ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const R = await axios.get(
			"https://apitest-bt.herokuapp.com/api/v1/empresas",
			{
				headers: {
					user: _user,
					password: _password,
				},
			}
		);
		res.status(200).json(R.data);

		console.log("Ok");
	} catch (e) {
		res.status(400).json({ mensaje: "Transaccion Incompleta" });
		console.log("Error");
	}
};

const EmpresasGuardar = async (req, res) => {
	console.log(
		"Empresas Guardar ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		let dato = req.body;

		const R = await axios.post(
			"https://apitest-bt.herokuapp.com/api/v1/empresas",
			dato,
			{
				headers: {
					"Content-Type": "application/json",
					user: _user,
					password: _password,
				},
			}
		);

		res.status(200).json(R.data);

		console.log("Ok");
	} catch (e) {
		res.status(400).json({ mensaje: "Transaccion Incompleta" });

		console.log("Error");
	}
};

const EmpresaDatos = async (req, res) => {
	console.log(
		"Empresa Datos ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const { id } = req.params;

		const R = await axios.get(
			"https://apitest-bt.herokuapp.com/api/v1/empresas/" + id,
			{
				headers: {
					user: _user,
					password: _password,
				},
			}
		);
		res.status(200).json(R.data);

		console.log("Ok");
	} catch (e) {
		res.status(400).json({ mensaje: "Transaccion Incompleta" });
		console.log("Error");
	}
};

const EmpresaActualizar = async (req, res) => {
	console.log(
		"Empresa Actualizar ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const { id } = req.params;

		let dato = req.body;

		const R = await axios.put(
			"https://apitest-bt.herokuapp.com/api/v1/empresas/" + id,
			dato,
			{
				headers: {
					"Content-Type": "application/json",
					user: _user,
					password: _password,
				},
			}
		);

		res.status(200).json(R.data);

		console.log("Ok");
	} catch (e) {
		res.status(400).json({ mensaje: "Transaccion Incompleta" });

		console.log("Error");
	}
};
module.exports = {
	EmpresasListar,
	EmpresasGuardar,
	EmpresaDatos,
	EmpresaActualizar,
};
