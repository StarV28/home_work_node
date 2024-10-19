import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello User ;)");
});
router.get("/goals", (req, res) => {
  res.send("Hi! I want to achieve amazing results in learning Node.js)");
});

export default router;
