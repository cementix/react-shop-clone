import models from "../models/models.js";
import ApiError from "../error/ApiError.js";

const { Brand } = models;

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    };
  };

  async getAll(req, res, next) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    };
  };
};

export default new BrandController();
