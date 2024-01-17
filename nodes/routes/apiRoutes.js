import express from "express";

import {
  getapiController,
  postapiController,
  updateapiController,
  deleteapiController,
} from "../controller/apiController.js";

const router = express.Router();

//get api router  from file index.js whose path is app.use("/api/v1", apiRoutes)
// nd then we get the controller from apicontroller file

router.get("/controller", getapiController);
router.post("/updatepost", updateapiController);
router.post("/postapi", postapiController);
router.delete("/deleteapi", deleteapiController);

export default router;
