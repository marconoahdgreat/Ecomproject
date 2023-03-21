import { Button, Popover, Carousel } from "antd";
import image from "../images/pngwing.com.png";
import image2 from "../images/glasses.png";
import image3 from "../images/watch.png";
import "../App.css";

export const Popovers = (props) => {
  const content = (
    <div style={{ padding: 24 }}>
      <p>Some contents...</p>
    </div>
  );
  return (
    <Popover content={content} title="Title" trigger="click">
      {props.click}
    </Popover>
  );
};

const contentStyle = {
  margin: 0,
  height: "100%",
  color: "#fff",

  textAlign: "center",
  background: "#364d79",
};
export const Carousels = (props) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay draggable>
      <div>
        <div className="carousel1">
          <div className="carousel2">
            <h1>50% off for your first Shopping</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique nisi vel lacus convallis dictum. Vestibulum dapibus
              imperdiet lectus sed bibendum. Quisque non sem at purus dignissim
              pretium.
            </p>
            <Button>View Collections</Button>
          </div>
          <div className="carousel3">
            <img src={image} />
          </div>
        </div>
      </div>

      <div>
        <div className="carousel1">
          <div className="carousel2">
            <h1>50% off for your first Shopping</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique nisi vel lacus convallis dictum. Vestibulum dapibus
              imperdiet lectus sed bibendum. Quisque non sem at purus dignissim
              pretium.
            </p>
            <Button>View Collections</Button>
          </div>
          <div className="carousel3">
            <img
              src={image2}
              style={{
                marginBottom: "100px",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="carousel1">
          <div className="carousel2">
            <h1>50% off for your first Shopping</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique nisi vel lacus convallis dictum. Vestibulum dapibus
              imperdiet lectus sed bibendum. Quisque non sem at purus dignissim
              pretium.
            </p>
            <Button>View Collections</Button>
          </div>
          <div className="carousel3">
            <img src={image3} />
          </div>
        </div>
      </div>
    </Carousel>
  );
};
