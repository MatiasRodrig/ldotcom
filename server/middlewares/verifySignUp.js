import { ROLES } from "../models/role.model";
import User from "../models/user.model";

export const checkDuplicateUsername = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        res.status(400).send({
            message: "Error! El usuario ya existe"
        });
        return;
    }

    const email = await User.findOne({ email: req.body.email });

    if (email) {
        res.status(400).send({
            message: "Error! El correo ya existe"
        });
        return;
    }

    next();
}

export const checkRoleExistence = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Error! Rol ${req.body.roles[i]} no existe`
                });
                return;
            }
        }
    }
    next();
}
