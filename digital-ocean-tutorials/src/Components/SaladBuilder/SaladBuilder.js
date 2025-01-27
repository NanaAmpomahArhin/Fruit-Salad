import React from "react";
import { createUseStyles } from "react-jss";
import SaladItem from "../SaladItem/SaladItem";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 500],
    justifyContent: "center",
  },
});

const ingredients = [
  {
    image: "🍎",
    name: "apple",
  },
  {
    image: "🥑",
    name: "avocado",
  },
  {
    image: "🥦",
    name: "broccoli",
  },
  {
    image: "🥕",
    name: "carrot",
  },
  {
    image: "🍷",
    name: "red wine dressing",
  },
  {
    image: "🍚",
    name: "seasoned rice",
  },
];

function SaladBuilder() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {ingredients.map((ingredient) => (
        <SaladItem
          key={ingredient.name}
          image={ingredient.image}
          name={ingredient.name}
        />
      ))}
    </div>
  );
}

export default SaladBuilder;
