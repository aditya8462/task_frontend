import * as React from "react";
import {
  Box,
  Typography,
  Card
} from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import "./progressbar.css";
export default function TopStates() {

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
              Top states
            </Typography>
          </Box>
          <Box style={{ marginTop: 10 }}>
            <div>
              <ProgressBar
                completed="50"
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted1"
                labelClassName="label"
                customLabel={
                  <>
                    <span>NY</span>
                    <span
                      style={{
                        float: "right",
                        paddingRight: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      120K
                    </span>
                  </>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <ProgressBar
                completed={60}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted2"
                labelClassName="label"
                customLabel={
                  <>
                    <span>MA</span>
                    <span
                      style={{
                        float: "right",
                        paddingRight: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      80K
                    </span>
                  </>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <ProgressBar
                completed={40}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted3"
                labelClassName="label"
                customLabel={
                  <>
                    <span>NH</span>
                    <span
                      style={{
                        float: "right",
                        paddingRight: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      70K
                    </span>
                  </>
                }
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <ProgressBar
                completed={30}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted4"
                labelClassName="label"
                customLabel={
                  <>
                    <span>OR</span>
                    <span
                      style={{
                        float: "right",
                        paddingRight: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      50K
                    </span>
                  </>
                }
              />
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
