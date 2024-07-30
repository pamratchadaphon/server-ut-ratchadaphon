const db = require("../models");
const RiceVariety = db.RiceVariety;

module.exports = {
  async create(req, res) {
    try {
      const newRiceVariety = await RiceVariety.create(req.body);
      res.status(201).send(newRiceVariety);
    } catch (error) {
      res.status(500).send({ message: "Error creating rice variety", error });
    }
  },

  async index(req, res) {
    try {
      const riceVariety = await RiceVariety.findAll();
      res.status(200).send(riceVariety);
    } catch (error) {
      res.status(500).send({ message: "Error fetching rice varieties", error });
    }
  },

  async show(req, res) {
    try {
      const riceVariety = await RiceVariety.findOne({
        where: { riceVariety_id: req.params.riceVariety_id },
      });
      if (riceVariety) {
        res.status(200).send(riceVariety);
      } else {
        res.status(404).send({ message: "Rice variety not found" });
      }
    } catch (error) {
      res.status(500).send({ message: "Error fetching rice variety", error });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await RiceVariety.update(req.body, {
        where: { riceVariety_id: req.params.riceVariety_id },
      });
      if (updated) {
        const updatedRiceVariety = await RiceVariety.findOne({
          where: { riceVariety_id: req.params.riceVariety_id },
        });
        res.status(200).send(updatedRiceVariety);
      } else {
        res.status(404).send({ message: "Rice variety not found for update" });
      }
    } catch (error) {
      res.status(500).send({ message: "Error updating rice variety", error });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await RiceVariety.destroy({
        where: { riceVariety_id: req.params.riceVariety_id },
      });
      if (deleted) {
        res.status(200).send("Rice variety is deleted!");
      } else {
        res.status(404).send({ message: "Rice variety not found for deletion" });
      }
    } catch (error) {
      res.status(500).send({ message: "Error deleting rice variety", error });
    }
  },
};
