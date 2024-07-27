const db = require("../models");
const NewsService = db.NewsService;

module.exports = {
  async create(req, res) {
    const newService = await NewsService.create(req.body);
    res.status(200).send(newService);
  },
  async index(req, res) {
    const newService = await NewsService.findAll();
    res.status(200).send(newService);
  },
  async show(req, res) {
    const newService = await NewsService.findOne({
      where: { newService_id: req.params.newService_id },
    });
    res.status(200).send(newService);
  },
  async edit(req, res) {
    await NewsService.update(req.body, {
      where: { newService_id: req.params.newService_id },
    });
    res.status(200).send(req.body);
  },
  async delete(req, res) {
    await NewsService.destroy({
      where: { newService_id: req.params.newService_id },
    });
    res.status(200).send("newService is deleted!");
  },
};
