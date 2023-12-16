import models from "../models/models.js";
import ApiError from "../error/ApiError.js";

const { Type } = models;

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });
      return res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export default new TypeController();
