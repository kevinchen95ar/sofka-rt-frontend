import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";

export default function CreateUnmannedSpacecraft({ setDialogOpen }) {
  const [spaceship, setSpaceship] = useState([]);
  const [unmannedSpacecraft, setUnmannedSpacecraft] = useState([]);

  const onSubmit = () => {
    // llamada de creacion de nave

    const newSpaceship = {
      type: "Unmanned Spacecraft",
      spaceship,
      unmannedSpacecraft,
    };
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
          placeholder="Ingresa una descripción"
          label="Descripción"
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
          id="destiny"
          autoComplete="off"
          placeholder="Ingresa el destino"
          label="Destino"
          type="text"
          value={unmannedSpacecraft["destiny"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setUnmannedSpacecraft({
              ...unmannedSpacecraft,
              destiny: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="timeForDestiny"
          autoComplete="off"
          placeholder="Ingresa el tiempo hasta destino"
          label="Tiempo hasta destino"
          type="number"
          value={unmannedSpacecraft["timeForDestiny"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setUnmannedSpacecraft({
              ...unmannedSpacecraft,
              timeForDestiny: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="speed"
          autoComplete="off"
          placeholder="Ingresa la velocidad"
          label="Velocidad"
          type="number"
          value={unmannedSpacecraft["speed"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setUnmannedSpacecraft({
              ...unmannedSpacecraft,
              speed: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="studySubject"
          autoComplete="off"
          placeholder="Ingresa el motivo de estudio"
          label="Motivo de estudio"
          type="text"
          value={unmannedSpacecraft["studySubject"]}
          margin="normal"
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(e) =>
            setUnmannedSpacecraft({
              ...unmannedSpacecraft,
              studySubject: e.target.value,
            })
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
