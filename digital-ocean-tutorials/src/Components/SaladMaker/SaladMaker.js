import React, { createContext, useReducer } from "react";
import { createUseStyles } from "react-jss";
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";

function reducer(state, item) {
  return [...state, item];
}

export const SaladContext = createContext();

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

function SaladMaker() {
  const [salad, setSalad] = useReducer(reducer, []);
  const classes = useStyles();

  return (
    <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">
          🥗
        </span>
        Build Your Custom Salad!
        <span role="img" aria-label="salad">
          🥗
        </span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </SaladContext.Provider>
  );
}

export default SaladMaker;
