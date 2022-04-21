import { Box } from "@mui/material";
import "./App.css";
import MenuBar from "./components/AppBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className='App'>
      <MenuBar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          bg: "background",
          color: "text",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <SearchBar />
      </Box>
    </div>
  );
}

export default App;
