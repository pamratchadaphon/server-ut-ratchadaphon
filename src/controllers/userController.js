const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "Login-WebApp";

module.exports = {
  async register(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
      const newUser = await User.create({
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
        fname: req.body.fname,
        lname: req.body.lname,
        subdistrict: req.body.subdistrict,
        district: req.body.district,
        province: req.body.province,
        role: req.body.role
      });
      res.status(201).send(newUser);
    } catch (error) {
      res.status(409).json({ status: "error", error: error });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", error: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ status: "error", error: "Incorrect password" });
    }
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email },
      secret
    );
    res.status(200).json({
      status: "ok",
      user_id: user.user_id,
      role: user.role,
      token,
    });
  },
  async authen(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      var decoded = jwt.verify(token, secret);
      res.json({ status: "ok", decoded });
    } catch (err) {
      res.json({ status: "error", messsge: err.massage });
    }
  },
  async index(req, res) {
    const user = await User.findAll();
    res.status(200).send(user);
  },
  async show(req, res) {
    const user = await User.findOne({
      where: { user_id: req.params.user_id },
    });
    res.status(200).send(user);
  },
  async update(req, res) {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    try {
      const newUser = await User.update(
        {
          email: req.body.email,
          password: hashPassword,
          phone: req.body.phone,
          fname: req.body.fname,
          lname: req.body.lname,
          subdistrict: req.body.subdistrict,
          district: req.body.district,
          province: req.body.province,
          role: req.body.role
        },
        { where: { user_id: req.params.user_id } }
      );
      res.status(200).send(newUser);
    } catch (error) {
      res.status(409).json({status: 'error', error : error});
    }
  },
  async delete(req, res) {
    await User.destroy({ where: { user_id: req.params.user_id } });
    res.status(200).send("user is deleted!");
  },
  async riceCaltivation_incomeExpense(req, res) {
    const data = await User.findAll({
      include: [
        {
          model: db.RiceCaltivation,
          as: "riceCaltivation",
        },
        {
          model: db.IncomeExpense,
          as: "incomeExpense",
        },
      ],
      where: { user_id: req.params.user_id },
    });
    res.status(200).send(data);
  },
};