import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function CreateShuttleShip({ setDialogOpen }) {
  const [spaceship, setSpaceship] = useState([]);
  const [shuttleShip, setShuttleShip] = useState([]);

  const onSubmit = () => {
    // llamada de creacion de nave

    const newSpaceship = { type: "Shuttle Ship", spaceship, shuttleShip };
    axios
      .post("http://localhost:4000/spaceship/create", newSpaceship)
      .then(() => {
        // Cerramos ventana
        setDialogOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1} width={800}>
      <Grid item xs={6}>
        <TextField
          id="name"
          autoComplete="off"
          placeholder="Ingresa un nombre de nave"
          label="Nombre de nave"
          type="text"
          value={spaceship["name"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) => setSpaceship({ ...spaceship, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="activityStart"
          autoComplete="off"
          placeholder="Ingresa un inicio de actividad"
          label="Inicio de actividad"
          type="text"
          value={spaceship["activityStart"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setSpaceship({ ...spaceship, activityStart: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="activityEnd"
          autoComplete="off"
          placeholder="Ingresa un fin de actividad"
          label="Fin de actividad"
          type="text"
          value={spaceship["activityEnd"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setSpaceship({ ...spaceship, activityEnd: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="power"
          autoComplete="off"
          placeholder="Ingresa un power"
          label="Power"
          type="number"
          value={spaceship["power"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setSpaceship({ ...spaceship, power: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="pushPower"
          autoComplete="off"
          placeholder="Ingresa un pushPower"
          label="pushPower"
          type="number"
          value={spaceship["pushPower"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setSpaceship({ ...spaceship, pushPower: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="fuel"
          autoComplete="off"
          placeholder="Ingresa un combustible"
          label="Combustible"
          type="text"
          value={spaceship["fuel"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) => setSpaceship({ ...spaceship, fuel: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="weight"
          autoComplete="off"
          placeholder="Ingresa un peso"
          label="Peso en kg"
          type="number"
          value={spaceship["weight"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setSpaceship({ ...spaceship, weight: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="description"
          autoComplete="off"
          placeholder="Ingresa una descripci??n"
          label="Descripci??n"
          type="text"
          value={spaceship["description"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setSpaceship({ ...spaceship, description: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="transportCapacity"
          autoComplete="off"
          placeholder="Ingresa una capacidad de transporte"
          label="Capacidad de transporte"
          type="number"
          value={shuttleShip["transportCapacity"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setShuttleShip({
              ...shuttleShip,
              transportCapacity: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="height"
          autoComplete="off"
          placeholder="Ingresa una altura de la nave"
          label="Altura de nave"
          type="number"
          value={shuttleShip["height"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setShuttleShip({ ...shuttleShip, height: e.target.value })
          }
        />
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Confirmar
        </Button>
      </Grid>
    </Grid>
  );
}
