import React from "react";
import { Card, Rate, Badge, Button } from "antd";
import "../App.css";
import image3 from "../images/watch.png";

import { PlusOutlined } from "@ant-design/icons";
function Cards() {
  return (
    <div
      style={{
        padding: 6,
      }}
    >
      <Badge.Ribbon placement="start" text="50% Off" color="red">
        <Card
          className="cardscss"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "200px",
          }}
        >
          <div style={{}}>
            <div style={{}}>
              {" "}
              <img
                src={image3}
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
            </div>
            <div>Apple Watch</div>
            <div>
              <Rate size="small" disabled defaultValue={5} />
            </div>
            <div>$300</div>
            <Button
              size="small"
              style={{
                position: "absolute",
                left: 160,
                top: 10,
              }}
            >
              <PlusOutlined />
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
    </div>
  );
}

export default Cards;
