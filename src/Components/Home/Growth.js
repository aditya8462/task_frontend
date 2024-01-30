import * as React from "react";

import { Box, Typography, Card, Grid } from "@mui/material";

import Chart from "chart.js/auto";
import LineChart from "./LineChart";
import { getData } from "../../ServerServices/FetchServices";
export default function Growth() {
  const [apiData, setApiData] = React.useState({});

  const fetchData = async () => {
    const result = await getData("");
    if (result.status) {
      setApiData(result);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Card
        style={{
          //   width: "556px",
          height: "200px",
          borderRadius: 16,
          padding: "24px",
          //   gap: "8px",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Box
            style={{
              height: "24px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px, 24px, 0px, 24px",
            }}
          >
            <Typography
              style={{
                padding: "0px, 0px, 16px, 0px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24.2px",
                color: "#131313",
              }}
            >
              Growth
            </Typography>

            <Grid
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "16.94px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              Yearly
            </Grid>
          </Box>
          {Object.values(apiData).length && <LineChart apiData={apiData} />}
        </Box>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "2.5%",
        }}
      >
        <Card
          style={{
            height: "93px",
            borderRadius: 16,
            padding: "12px",
            backgroundColor: "#fff",
            width: "100%",
            marginRight: 10,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 16, color: "#7D7D7D" }}>
            Top month
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 24,
                color: "#734A00",
                lineHeight: "29.05px",
                marginTop: "17%",
              }}
            >
              November
            </div>
            <span
              style={{
                fontWeight: 500,
                fontSize: 16,
                color: "#FFA500",
                letterSpacing: "-0.2px",
              }}
            >
              2019
            </span>
          </div>
        </Card>

        <Card
          style={{
            height: "93px",
            borderRadius: 16,
            padding: "12px",
            backgroundColor: "#fff",
            width: "100%",
            marginRight: 10,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 16, color: "#7D7D7D" }}>
            Top year
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 24,
                color: "#734A00",
                lineHeight: "29.05px",
                marginTop: "26px",
              }}
            >
              2023
            </div>
            <span
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "#454545",
                letterSpacing: "-0.2px",
              }}
            >
              96k sold so far
            </span>
          </div>
        </Card>

        <Card
          style={{
            height: "93px",
            borderRadius: 16,
            padding: "12px",
            backgroundColor: "#fff",
            width: "100%",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 16, color: "#7D7D7D" }}>
            Top buyer
          </div>
          <div style={{ marginTop: "10px" }}>
            <img
              src="../../Assets/Image1.png"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "24px",
              }}
              alt="Maggie Johnson"
            />
            <div
              style={{
                fontWeight: 600,
                fontSize: 12,
                color: "#131313",
              }}
            >
              Magiee Johnson
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: 10,
                color: "#454545",
              }}
            >
              Oasis Organic Inc.
            </div>
          </div>
        </Card>
      </div>
    </Box>
  );
}
