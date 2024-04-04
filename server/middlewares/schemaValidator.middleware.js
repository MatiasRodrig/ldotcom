const schemaValidator = (schema) => (req, res, next) => {
    try {
        const validatedData = schema.parse(req.body);
        req.validatedData = validatedData;
        next();
    } catch (error) {
        const validationErrors = error.issues.map((issue) => issue.message);
        return res.status(400).json({ errors: validationErrors });
    }
};

export default schemaValidator;