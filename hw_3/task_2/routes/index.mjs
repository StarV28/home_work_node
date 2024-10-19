// Задача 2. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи.

import {Router} from "express";
//--------------------------home page------------//
const router = Router();
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
    name: "Volodymyr",
    profession: "I'm Web Developer",
    description: "Node.js",
  });
});

//-------------------Coffee page----------------//
router.get("/coffee", (req, res) => {
  res.send("coffee", {
    title: "Coffee Page",
    name: "Volodymyr",
    profession: "I'm Web Developer",
    description: "Espresso",
  });
});

//---------------------Music page---------------//
router.get("/music", (req, res) => {
  res.send("music", {
    title: "Music Page",
    name: "Volodymyr",
    profession: "I'm Web Developer",
    description: "Rock, Classical and Lounge",
  });
});

export default router;
