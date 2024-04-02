

const schemaValidator = (schema) => (req, res, next) => {
    try {
        const validatedData = schema.parse(req.body);
        req.validatedData = validatedData; 
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Datos inválidos. Pruebe con una contraseña de al menos 6 caracteres, un Email valido y un nombre de usuario único de al menos 5 caracteres" });
    }
};


export default schemaValidator;