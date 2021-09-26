function tipoArchivo(vector, tipo) {
	try {
		if (vector[0] == tipo) {
			return true;
		} else {
			return false;
		}
		return false;
	} catch (error) {
		return false;
	}
}

module.exports = {
	tipoArchivo,
};
