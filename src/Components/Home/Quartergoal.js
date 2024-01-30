import * as React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

import { Box, Typography, Card } from "@mui/material";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

export default function Quartergoal() {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Card
        style={{
          height: "200px",
          borderRadius: 16,
          padding: "24px",
          gap: "8px",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Box style={{ width: "212px", height: "40px" }}>
            <Typography
              style={{
                padding: "0px, 0px, 16px, 0px",
                fontWeight: 600,
                fontSize: 20,
                lineHeight: "24.2px",
                color: "#131313",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Quarter goal
            </Typography>
          </Box>
          <Box
            style={{
              width: "129px",
              marginTop: "5px",
              display: "flex",
              fontSize: 32,
              fontWeight: 500,
              alignItems: "center",
            }}
          >
            <SemiCircleProgressBar
              percentage={84}
              showPercentValue
              stroke="#FFCD71"
              strokeWidth="16"
            />
          </Box>

          <Box style={{ width: "212px", marginTop: "30px" }}>
            <Typography
              style={{
                fontSize: 14,
                padding: "16px, 0px, 0px, 0px",
                color: "#734A00",
                display: "flex",
                lineHeight: "16.94px",
                letterSpacing: "-0.3px",
                fontWeight: 400,
                display: "flex",
                justifyContent: "center",
              }}
            >
              All goals
              <ArrowRightAlt
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "#734A00",
                }}
              />
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
