import { Button, CardMedia } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import HocCard from "../HocCard";
import { useStyles } from "./style";
export default function Winner() {
  const classes = useStyles();
  return (
    <HocCard>
      <CardMedia component="img" width="270" image="./c25.png" />

      <h4 className={classes.title}>
        Угадали 2 числа в поле 1 и 3 числа в поле 2. В эту категорию при
        распределении выигрышей уходит 7,36% от призового фонда.
      </h4>

      <p className={classes.paragraph}>
        Вы угадали 2 числа в первом поле и 3 числа во втором — неплохой
        результат, угадать столько чисел везет не всем, а это сулит немалый
        выигрыш.
      </p>

      <Button className={classes.button}>
        <a href="https://www.stoloto.ru/4x20/game?lastdraw">
          {" "}
          Попробовать «Спортлото «4 из 20» на самом деле
        </a>
      </Button>

      <Button className={classes.buttonLink}>
        <Link to="/gameRoom">Назад</Link>
      </Button>
    </HocCard>
  );
}
