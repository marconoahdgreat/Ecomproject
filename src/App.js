import "../src/components/Navbar.css";
import "./App.css";
import Catergories from "./components/Catergories";
import Navbar from "./components/Navbar";
import { Carousels } from "./hooks/hooks";
import Cards from "./components/Cards";
import { ThunderboltOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CardCategories from "./components/CardCategories";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="container1">
        <div className="container3">
          <Carousels />
        </div>
      </div>
      <div className="container5">
        <ThunderboltOutlined
          style={{
            color: "rgb(220, 77, 86)",
          }}
        />
        FLASH DEAL
        <Button
          size="small"
          style={{
            backgroundColor: "white",
            borderColor: "rgb(220, 77, 86)",
            marginLeft: "20px",
            color: "rgb(220, 77, 86)",
          }}
        >
          View more
        </Button>
      </div>
      <div className="container4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="container5">
        <ThunderboltOutlined
          style={{
            color: "rgb(220, 77, 86)",
          }}
        />
        Top Catergories
        <Button
          size="small"
          style={{
            backgroundColor: "white",
            borderColor: "rgb(220, 77, 86)",
            marginLeft: "20px",
            color: "rgb(220, 77, 86)",
          }}
        >
          View more
        </Button>
      </div>
      <div className="container4">
        <CardCategories />
      </div>
      <div className="container5">
        <ThunderboltOutlined
          style={{
            color: "rgb(220, 77, 86)",
          }}
        />
        New Products
        <Button
          size="small"
          style={{
            backgroundColor: "white",
            borderColor: "rgb(220, 77, 86)",
            marginLeft: "20px",
            color: "rgb(220, 77, 86)",
          }}
        >
          View more
        </Button>
      </div>
      <div className="container4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
