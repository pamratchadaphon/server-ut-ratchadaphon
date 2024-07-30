const db = require("../models");
const multer = require("multer");
const path = require("path");

const RiceVariety = db.RiceVariety;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  async create(req, res) {
    const info = {
      precautions: req.body.precautions,
      photosensitivity: req.body.photosensitivity,
      water_requirement: req.body.water_requirement,
      yield: req.body.yield,
      name: req.body.name,
      stability: req.body.stability,
      height: req.body.height,
      feature: req.body.feature,
      age: req.body.age,
      type: req.body.type,
      image: req.file.path,
    };
    const newRiceVariety = await RiceVariety.create(info);
    res.status(201).send(newRiceVariety);
  },
  async index(req, res) {
    const riceVariety = await RiceVariety.findAll();
    res.status(200).send(riceVariety);
  },
  async show(req, res) {
    const riceVariety = await RiceVariety.findOne({
      where: { riceVariety_id: req.params.riceVariety_id },
    });
    res.status(200).send(riceVariety);
  },
  async update1(req, res) {
    const info = {
      precautions: req.body.precautions,
      photosensitivity: req.body.photosensitivity,
      water_requirement: req.body.water_requirement,
      yield: req.body.yield,
      name: req.body.name,
      stability: req.body.stability,
      height: req.body.height,
      feature: req.body.feature,
      age: req.body.age,
      type: req.body.type,
      image: req.file.path,
    };
    await RiceVariety.update(info, {
      where: { riceVariety_id: req.params.riceVariety_id },
    });
    res.status(200).send(info);
  },
  async update2(req, res) {
    const info = {
      precautions: req.body.precautions,
      photosensitivity: req.body.photosensitivity,
      water_requirement: req.body.water_requirement,
      yield: req.body.yield,
      name: req.body.name,
      stability: req.body.stability,
      height: req.body.height,
      feature: req.body.feature,
      age: req.body.age,
      type: req.body.type
    };
    await RiceVariety.update(info, {
      where: { riceVariety_id: req.params.riceVariety_id },
    });
    res.status(200).send(info);
  },
  async delete(req, res) {
    await RiceVariety.destroy({
      where: { riceVariety_id: req.params.riceVariety_id },
    });
    res.status(200).send("riceVariety is deleted!");
  },
  upload,
};
