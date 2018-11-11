import Joi from "joi";

class Auth {
  static signUp(req, res, next) {
    const schema = Joi.object().keys({
      firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
      lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string()
        .alphanum()
        .min(8)
        .required()
    });
    const validation = Joi.validate(req.body, schema);

    if (validation.error) {
      const { details } = validation.error;
      const path = details[0].path[0];
      const msg = `${path} is not properly formated`;
      res.status(400).json({
        error: msg
      });
    } else {
      next();
    }
  }

  static login(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string()
        .alphanum()
        .min(8)
        .required()
    });
    const validation = Joi.validate(req.body, schema);

    if (validation.error) {
      const { details } = validation.error;
      const path = details[0].path[0];
      const msg = `${path} is not properly formated`;
      res.status(400).json({
        error: msg
      });
    } else {
      next();
    }
  }
}

export default Auth;
