// Задача 1. Розробити додаток з такими маршрутами:
// Маршрут
// Що повертає
// season
// повертає пору року
// day
// повертає поточний день
// time
// повертає час дня (ранок, обід, вечеря)

import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    description: "This is a simple app to get current season, date, time",
    offer: "Please enter season, date, or time ;)", // исправлено "Please"
  });
});

//-------------------Season----------------//
function getSeason() {
  const currentMonth = new Date().getMonth() + 1;

  if (currentMonth >= 3 && currentMonth <= 5) {
    return "Spring";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    return "Summer";
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    return "Autumn";
  } else {
    return "Winter";
  }
}

router.get("/season", (req, res) => {
  res.render("season", {
    title: "Season",
    season: `${getSeason()}`,
  });
});

//-------------------Date----------------//
function getToDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date().getDay();
  return daysOfWeek[date];
}

router.get("/data", (req, res) => {
  res.render("data", {
    title: "Data",
    day: `${getToDay()}`,
  });
});

//-------------------------Time-----------//

function getTimeOfDay() {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 12) {
    return "Morning";
  } else if (hours >= 12 && hours < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}

router.get("/time", (req, res) => {
  res.render("time", {
    title: "Time",
    time: `${getTimeOfDay()}`,
  });
});

export default router;
