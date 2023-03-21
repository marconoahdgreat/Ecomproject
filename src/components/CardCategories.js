import { Card } from "antd";
import image4 from "../images/kids.png";
import image5 from "../images/female.png";
import image6 from "../images/console.png";
import image7 from "../images/male2.png";
const { Meta } = Card;
const Categories = [
  {
    image: image4,
    title: "KIDS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    image: image7,
    title: "MALE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    image: image5,
    title: "FEMALE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    image: image6,
    title: "GADGETS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
function CardCategories() {
  return Categories.map((value) => {
    return (
      <Card
        hoverable
        style={{
          width: "200px",
          height: "50%",
          marginRight: "10px",
        }}
        cover={
          <img
            alt="example"
            src={value.image}
            style={{
              height: "200px",
              width: "100%",
            }}
          />
        }
      >
        <Meta title={value.title} description={value.description} />
      </Card>
    );
  });
}

export default CardCategories;
