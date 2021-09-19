import { useState, useMemo } from "react";
import {
  TextField,
  Grid,
  FormControl,
  Typography,
  Paper,
  Container,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    display: "flex!important",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "center",
  },
  typography: {
    textAlign: "center",
    marginTop: 10,
    flexBasis: "100%",
  },
  container: {
    height: "100%",
    padding: 10,
  },
  gridItems: {
    justifyContent: "center",
    flexBasis: "25%",
  },
  resultsPaper: {
    marginTop: 10,
    padding: 10,
  },
  resultContainer: {
    flexWrap: "nowrap",
  },
  resultsNames: {
    flexBasis: "50%",
  },
  resultsDivider: {
    width: "100%",
  },
});

interface Result {
  name: string;
  unit: string;
  value: number;
  key: string | number;
}

export const Calculator = () => {
  const classes = useStyles();
  const [proteins, setProteins] = useState<string>("");
  const [fat, setFat] = useState<string>("");
  const [ash, setAsh] = useState<string>("");
  const [fiber, setFiber] = useState<string>("");
  const [wet, setWet] = useState<string>("");

  const handleProteinsChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setProteins(evt.target.value);
  };
  const handleFatChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFat(evt.target.value);
  };
  const handleAshChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAsh(evt.target.value);
  };
  const handleFibreChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFiber(evt.target.value);
  };
  const handleWetChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setWet(evt.target.value);
  };
  const numberedValues = useMemo(() => {
    const p = Number(proteins);
    const w = Number(wet);
    const f = Number(fat);
    const a = Number(ash);
    const fi = Number(fiber);
    return { p, w, f, a, fi };
  }, [proteins, fiber, fat, ash, wet]);

  const valid = useMemo(() => {
    const { p, w, f, a, fi } = numberedValues;
    const sum = p + w + f + a + fi;
    return sum <= 100;
  }, [numberedValues]);

  const filled = useMemo(() => {
    return (
      proteins !== "" && fiber !== "" && fat !== "" && ash !== "" && wet !== ""
    );
  }, [proteins, fiber, fat, ash, wet]);

  const result = useMemo((): Result[] => {
    const { p, w, f, a, fi } = numberedValues;
    const dryMass = 100 - w;
    const protP = (p / dryMass) * 100;
    const fatP = (f / dryMass) * 100;
    const carbs = dryMass - p - f - a - fi;
    const carbsP = (carbs / dryMass) * 100;
    const calorific = p * 3.5 + f * 8.5 + carbs * 3.5;

    return [
      { name: "Sucha masa", unit: "[g]", value: dryMass, key: 1 },
      { name: "Białko", unit: "[%]", value: protP, key: 2 },
      { name: "Tłuszcze", unit: "[%]", value: fatP, key: 3 },
      { name: "Węgle", unit: "[g]", value: carbs, key: 4 },
      { name: "Węgle", unit: "[%]", value: carbsP, key: 5 },
      { name: "kcal/100g", unit: "", value: calorific, key: 6 },
    ];
  }, [numberedValues]);

  const resultValueRenderer = (value: number) => {
    return filled && valid ? value.toFixed(2) : 0;
  };

  return (
    <Container className={classes.mainContainer}>
      {!valid && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Suma składników jest większa niż 100
        </Alert>
      )}
      <Paper elevation={3}>
        <Grid
          className={classes.container}
          alignItems="center"
          container
          spacing={2}
        >
          <Grid className={classes.typography} item>
            <Typography>Wprowadź wartości</Typography>
          </Grid>
          <Grid className={classes.gridItems} container item>
            <FormControl>
              <TextField
                type="number"
                label="Białko"
                value={proteins}
                onChange={handleProteinsChange}
                error={!valid}
              />
            </FormControl>
          </Grid>
          <Grid className={classes.gridItems} container item>
            <FormControl>
              <TextField
                type="number"
                label="Tłuszcz"
                onChange={handleFatChange}
                value={fat}
                error={!valid}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid className={classes.gridItems} container item>
            <FormControl>
              <TextField
                type="number"
                label="Popiół"
                onChange={handleAshChange}
                value={ash}
                error={!valid}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid className={classes.gridItems} container item>
            <FormControl>
              <TextField
                type="number"
                label="Włókno"
                onChange={handleFibreChange}
                value={fiber}
                error={!valid}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid className={classes.gridItems} container item>
            <FormControl>
              <TextField
                type="number"
                label="Wilgoć"
                onChange={handleWetChange}
                value={wet}
                error={!valid}
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.resultsPaper} elevation={3}>
        <Grid container>
          {result.map((r) => (
            <Grid
              key={r.key}
              className={classes.resultContainer}
              container
              item
            >
              <Grid className={classes.resultsNames} item>
                <Typography>{`${r.name} ${r.unit}`}</Typography>
              </Grid>
              <Grid item>
                <Typography>{`${resultValueRenderer(r.value)}`}</Typography>
              </Grid>
              <Divider className={classes.resultsDivider} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};
