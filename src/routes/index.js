const { Router } = require("express");
const ProviderController = require("../controller/provider");

const router = Router();
const {
  createData, fetchProviders, fetchProvidersById, LoadProvider
} = ProviderController;

router.get("/provider", fetchProviders);
router.get("/filter/:providerId", fetchProvidersById);

router.post("/data", createData);
router.post("/provider", LoadProvider);

module.exports = router;
