const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { sendEmail } = require("../../helpers");

async function register(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user !== null) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomUUID();

    await User.create({ name, email, verifyToken, password: hash });

    await sendEmail({
      to: email,
      subject: `Welcome to ${name}`,
      html: `<a href="http://localhost:9090/users/verify/${verifyToken}">Confirm your email</a>`,
    });

    return res.status(201).send();
  } catch (error) {
    return next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user === null) {
      return res.status(401).json({ error: "Email or password is wrong" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      return res.status(401).json({ error: "Email or password is wrong" });
    }

    if (user.verified === false) {
      return res.status(401).json({ error: "Email is not verified" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    return next(error);
  }
}

module.exports = { register, login };
