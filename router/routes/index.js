const router = require("express").Router();

const customRoutes = require("./customers");
const productRouter = require("./products");

router.use("/customers", customRoutes);
router.use("/products", productRouter);

module.exports = router;
