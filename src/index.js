import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import Warehouse from "./Pages/Warehouse";
import WarehouseDetail from "./Pages/WarehouseDetail";
import Layout from "./components/Layout";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B2430",
      darker: "#053e85",
      secondary: "#FFF",
    },
    text: {
      primary: "#1B2430",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1B2430",
          color: "#FFF",
        },
      },
    },
  },
});

function RouteWrapper({ element: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="*" element={<Navigate to="/warehouse" />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route
              path="warehouse/:warehouseId"
              element={<WarehouseDetail />}
            />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
