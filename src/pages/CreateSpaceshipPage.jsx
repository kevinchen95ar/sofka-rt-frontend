import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import shuttleshipimg from "../assets/shuttle-ship.jpg";
import galaxias from "../assets/galaxias-1.webp";
import gemini from "../assets/gemini_6_7.webp";
import CustomizedDialog from "./../components/dialog/Dialog";
import CreateShuttleShip from "../components/CreateShuttleShip";
import CreateUnmannedSpacecraft from "../components/CreateUnmannedSpacecraft";
import CreateMannedSpaceflight from "../components/CreateMannedSpaceflight";

export default function CreateSpaceshipPage() {
  const [shuttleDialogOpen, setShuttleDialogOpen] = useState(false);
  const [unmannedDialogOpen, setUnmannedDialogOpen] = useState(false);
  const [mannedDialogOpen, setMannedDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <Grid>
        <Card
          style={{
            height: 600,
            minHeight: 400,
            width: "100%",
            minWidth: 400,
            padding: "20px 5px",
            margin: "0 auto",
          }}
        >
          <Grid marginLeft={2}>
            <Typography
              component="h2"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Creación de nave
            </Typography>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 350, maxHeight: 600 }}>
                <CardMedia
                  component="img"
                  height="350"
                  image={shuttleshipimg}
                  alt="Shuttle Ship"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vehiculo Lanzadera
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Se trata de un cohete autopropulsado que sirve para lanzar
                    una carga útil al espacio
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => setShuttleDialogOpen(true)}
                  >
                    Crear
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 350, maxHeight: 600 }}>
                <CardMedia
                  component="img"
                  height="350"
                  image={galaxias}
                  alt="unmanned"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Naves no tripuladas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Su principal objetivo estriba en estudiar otros cuerpos
                    celestes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => setUnmannedDialogOpen(true)}
                  >
                    Crear
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 350, maxHeight: 600 }}>
                <CardMedia
                  component="img"
                  height="350"
                  image={gemini}
                  alt="manned"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Naves Tripuladas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Su propósito consiste en mandar seres humanos al espacio
                    para diversas tareas.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => setMannedDialogOpen(true)}
                  >
                    Crear
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid style={{ height: 530, width: "100%" }}></Grid>
        </Card>

        <CustomizedDialog
          setDialogOpen={setShuttleDialogOpen}
          dialogOpen={shuttleDialogOpen}
          modalTitle={"Creación de vehiculo lanzadera"}
        >
          <CreateShuttleShip
            setDialogOpen={setShuttleDialogOpen}
          ></CreateShuttleShip>
        </CustomizedDialog>

        <CustomizedDialog
          setDialogOpen={setUnmannedDialogOpen}
          dialogOpen={unmannedDialogOpen}
          modalTitle={"Creación de Nave no tripulada"}
        >
          <CreateUnmannedSpacecraft
            setDialogOpen={setUnmannedDialogOpen}
          ></CreateUnmannedSpacecraft>
        </CustomizedDialog>

        <CustomizedDialog
          setDialogOpen={setMannedDialogOpen}
          dialogOpen={mannedDialogOpen}
          modalTitle={"Creación de Nave tripulada"}
        >
          <CreateMannedSpaceflight
            setDialogOpen={setMannedDialogOpen}
          ></CreateMannedSpaceflight>
        </CustomizedDialog>
      </Grid>
    </React.Fragment>
  );
}
