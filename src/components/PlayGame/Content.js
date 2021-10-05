import React from "react";
import { Typography, Button, Paper } from "@material-ui/core";
import { genterateArray, arraySlice } from "../../common/buttonLoto";
import { useHistory } from "react-router";

export default function Content({ classes }) {
  const [activeBtn, setActiveBtn] = React.useState([]);
  const [activeBtn1, setActiveBtn1] = React.useState([]);
  const history = useHistory();
  const arrayList = genterateArray();
  let sliceArArray = arraySlice(arrayList);
  return (
    <div>
      <div className={classes.img}></div>
      <Typography variant={"h3"}>СПОРТЛОТО</Typography>
      <p>Отметьте не менее 4 чисел в каждом игровом поле</p>
      <Paper className={classes.paper}>
        {sliceArArray.map((item, index) => {
          return (
            <div key={index} className={classes.mainContent}>
              {item.map((i) => {
                return (
                  <Button
                    key={i.index}
                    className={
                      activeBtn.includes(i.index) ||
                      activeBtn1.includes(i.index)
                        ? classes.active
                        : classes.button
                    }
                    onClick={() => {
                      if (index === 0) {
                        setActiveBtn((prev) => {
                          return [...prev, i.index];
                        });
                      }
                      if (index === 1) {
                        setActiveBtn1((prev) => {
                          return [...prev, i.index];
                        });
                      }
                    }}
                  >
                    {i.number}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </Paper>
      <div className={classes.buttonPlay}>
        <Button
          onClick={() => {
            history.push("/result");
          }}
          fullWidth
          disabled={
            activeBtn.length >= 4 && activeBtn1.length >= 4 ? false : true
          }
        >
          Играть
        </Button>
      </div>
    </div>
  );
}
