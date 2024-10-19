import {Router} from "express";
const router = Router();

const links = ["https://www.youtube.com/live/GDKk8o8pGro", "https://chatgpt.com"];
const onlineKino = ["https://megogo.net/ua", "https://www.netflix.com/"];

function getChekParam(param) {
  if (param === "sites") {
    return links;
  } else if (param === "films") {
    return onlineKino;
  } else if (param === "me") {
    return "Hi, it's me, thanks for your attention ;)";
  } else {
    return "Unknown parameter";
  }
}

router.get("/:myLinks", (req, res) => {
  const param = req.params.myLinks;
  const result = getChekParam(param);

  res.render("info", {
    title: `${param}`,
    result: result,
  });
});

export default router;
