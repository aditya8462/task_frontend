import * as React from "react";

import { Box, Typography, Card, Grid } from "@mui/material";
export default function NewDeals() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Card
        style={{
          height: "180px",
          borderRadius: 16,
          padding: "24px",
          gap: "8px",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Box style={{ width: "362px", height: "40px" }}>
            <Typography
              style={{
                padding: "0px, 0px, 16px, 0px",
                fontWeight: 600,
                fontSize: 20,
                lineHeight: "24.2px",
                color: "#131313",
              }}
            >
              New deals
            </Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid
              style={{
                height: "48px",

                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              md={3}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Fruit2Go
              </div>
            </Grid>
            <Grid
              style={{
                height: "48px",
                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              md={5.5}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Marshall's MKT
              </div>
            </Grid>
            <Grid
              style={{
                height: "48px",
                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              md={2.5}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                CCNT
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <Grid
              style={{
                height: "48px",
                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              md={5.5}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Joana Mini-market
              </div>
            </Grid>
            <Grid
              style={{
                height: "48px",
                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              md={5.5}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Little Brazil Vegan
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <Grid
              style={{
                height: "48px",

                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              md={3}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Target
              </div>
            </Grid>
            <Grid
              style={{
                height: "48px",
                // width: "157px",
                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              md={5.5}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Organic Place
              </div>
            </Grid>
            <Grid
              style={{
                height: "48px",
                borderRadius: "16px",
                padding: "12px, 16px, 12px, 12px",
                gap: "8px",
                backgroundColor: "#FFF7E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
              md={3}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
                  stroke="#FFA500"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#734A00",
                }}
              >
                Morello's
              </div>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
