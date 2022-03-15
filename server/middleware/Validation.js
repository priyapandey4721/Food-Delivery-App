const Joi = require("joi");

const userValidation = {
  validRegister: (req, res, next) => {
    const schema = Joi.object().keys({
      firstname: Joi.string().min(2).max(15).required(),
      lastname: Joi.string().min(2).max(15).required(),
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(8).max(12).required(),
    });
    let result = schema.validate(req.body);
    if (result.error) {
      res.send({ err: result.error.details[0].message });
    } else {
      next();
    }
  },
  validLogin: (req, res, next) => {
    const loginschema = Joi.object().keys({
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(8).max(12).required(),
    });
    let result = loginschema.validate(req.body);
    if (result.error) {
      res.send({ err: result.error.details[0].message });
    } else {
      next();
    }
  },
};
module.exports = userValidation;
