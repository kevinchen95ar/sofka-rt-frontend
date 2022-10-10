import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";

export default function UsersPage() {
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    //Obtenemos todas las naves al iniciar la pagina
    axios
      .get("http://localhost:4000/spaceship/get/all")
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "type", headerName: "Tipo", flex: 1 },
    { field: "name", headerName: "Nombre", flex: 1 },
    { field: "activityStart", headerName: "Inicio Actividad", flex: 1 },
    { field: "activityEnd", headerName: "Fin Actividad", flex: 1 },
    { field: "power", headerName: "Poder", flex: 1 },
    { field: "pushPower", headerName: "Empuje", flex: 1 },
    { field: "fuel", headerName: "Combustible", flex: 1 },
    { field: "weight", headerName: "Peso", flex: 1 },
    { field: "description", headerName: "Descripcion", flex: 1 },
    { field: "transportCapacity", headerName: "Capacidad transporte", flex: 1 },
    { field: "height", headerName: "Altura", flex: 1 },
    { field: "destiny", headerName: "Destino", flex: 1 },
    { field: "timeForDestiny", headerName: "Tiempo a Destino", flex: 1 },
    { field: "speed", headerName: "Velocidad", flex: 1 },
    { field: "studySubject", headerName: "Objeto de estudio", flex: 1 },
    {
      field: "distanceFromEarth",
      headerName: "Distancia de la tierra",
      flex: 1,
    },
    {
      field: "tripulationCapacity",
      headerName: "Capacidad de tripulacion",
      flex: 1,
    },
  ];

  const showColumns = {
    id: false,
    name: true,
    type: true,
    activityStart: true,
    activityEnd: true,
    power: false,
    pushPower: false,
    fuel: false,
    weight: false,
    description: false,
    transportCapacity: false,
    height: false,
    destiny: false,
    timeForDestiny: false,
    speed: false,
    studySubject: false,
    distanceFromEarth: false,
    tripulationCapacity: false,
  };

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
              variant="h6"
              color="primary"
              gutterBottom
            >
              Tabla de naves
            </Typography>
          </Grid>
          <Grid style={{ height: 530, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 50, 100]}
              columnVisibilityModel={showColumns}
            />
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
