const moment = require("moment");
const axios = require("axios");

const obj = require("../util/util");

const ImagenesListar = async (req, res) => {
	console.log(
		"Imagenes Listar ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const R = await axios.get(
			"https://apitest-bt.herokuapp.com/api/v1/imagenes",
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
		res.status(400).json(e);
		console.log("error");
	}
};

const ImagenInsertar = async (req, res) => {
	console.log(
		"Imagenes Insertar ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const archivo = req.files.archivo;
		let tipo = archivo.mimetype.split("/");

		console.log(archivo);

		if (!obj.tipoArchivo(archivo.mimetype.split("/"), "image")) {
			throw new Error(
				"No es posible continuar, El tipo de archivo no es valido!!!"
			);
		}

		const archivoNombre = archivo.name;
		const archivoB64 = Buffer.from(archivo.data).toString("base64");

		const dato =
			'"imagene":{"nombre":"' +
			archivoNombre +
			'", "base64":"' +
			archivoB64 +
			'"} ';

		const R = await axios.post(
			"https://apitest-bt.herokuapp.com/api/v1/imagenes",
			dato,
			{
				headers: {
					"Content-Type": "application/json",
					user: _user,
					password: _password,
				},
			}
		);

		res.status(200).json("{'mensaje':'Proceso completo'}");

		console.log("Ok");
	} catch (e) {
		res.status(400).json(e.message);
		console.log(e.message);
	}
};

const ImageneDetalle = async (req, res) => {
	console.log(
		"Imagen Detalle ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const { id } = req.params;

		const R = await axios.get(
			"https://apitest-bt.herokuapp.com/api/v1/imagenes/" + id,
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
		res.status(400).json(e.message);
		console.log(e.message);
	}
};

const ImagenesModificar = async (req, res) => {
	console.log(
		"Imagen Modificar ",
		moment().format("YYYY-MM-DD"),
		" ",
		moment().format("HH:mm:ss")
	);

	try {
		let _user = process.env.USER;
		let _password = process.env.PASSWORD;

		const archivo = req.files.archivo;
		let tipo = archivo.mimetype.split("/");

		const { id } = req.params;

		if (!obj.tipoArchivo(archivo.mimetype.split("/"), "image")) {
			throw new Error(
				"No es posible continuar, El tipo de archivo no es valido!!!"
			);
		}

		const archivoNombre = archivo.name;
		const archivoB64 = Buffer.from(archivo.data).toString("base64");

		const dato =
			'"imagene":{"nombre":"' +
			archivoNombre +
			'", "base64":"' +
			archivoB64 +
			'"} ';

		const R = await axios.post(
			"https://apitest-bt.herokuapp.com/api/v1/imagenes/" + id,
			dato,
			{
				headers: {
					"Content-Type": "application/json",
					user: _user,
					password: _password,
				},
			}
		);

		res.status(200).json("{'mensaje':'Proceso completo'}");

		console.log("Ok");
	} catch (e) {
		res.status(400).json(e.message);
		console.log(e.message);
	}
};

module.exports = {
	ImagenInsertar,
	ImageneDetalle,
	ImagenesListar,
	ImagenesModificar,
};
