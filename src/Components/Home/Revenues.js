import * as React from "react";

import { Box, Typography, Card } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

export default function Revenues() {
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
              Revenues
            </Typography>
          </Box>
          <Box style={{ width: "129px", height: "58px", display: "flex" }}>
            <Box style={{ width: "89px" }}>
              <Typography
                style={{
                  fontSize: 48,
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                  lineHeight: "58.09px",
                  color: "#131313",
                }}
              >
                15%
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 15,
                marginLeft: "5%",
              }}
            >
              <ArrowOutward style={{ color: "#25CD25", fontSize: 28 }} />
            </Box>
          </Box>

          <Typography
            style={{ fontSize: 14, fontWeight: 400, lineHeight: "16.94px" }}
          >
            Increased compared to last week
          </Typography>
          <Box style={{ width: "130px", marginTop: "74.61px" }}>
            <Typography
              style={{
                fontSize: 14,
                padding: "16px, 0px, 0px, 0px",
                color: "#734A00",
                display: "flex",
                fontWeight: 400,
              }}
            >
              Revenues report
              <ArrowRightAlt
                style={{
                  fontSize: 18,
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
