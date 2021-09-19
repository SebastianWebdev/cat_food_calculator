import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { Calculator } from "../components";

const useStyles = makeStyles({
  paper: {
    minHeight: "100vh",
  },
});

export function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Calculator />
    </Paper>
  );
}
