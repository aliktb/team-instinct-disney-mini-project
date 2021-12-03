import axios from "axios";
import { useEffect, useState } from "react";
import {
  Spinner,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardGroup,
} from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import "../CSS/home.css";

const Disney = () => {
  const [data, setData] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://api.disneyapi.dev/characters")
        .then((response) => {
          setIsLoaded(true);

          setData(response.data.data);
        })
        .catch((error) => {
          setError(error);
          setIsLoaded(true);
        });
    }, 100);
  }, []);

  if (error) {
    return <h1>Oops, something went wrong {error.message}</h1>;
  } else if (!isLoaded) {
    return (
      <div>
        <p>Loading data...</p>
        <Spinner colour="primary" />
      </div>
    );
  } else {
    console.log(data);
    const card = data.map((char) => {
      // console.log(char.imageUrl);

      let picUrl = char.imageUrl;

      if (picUrl.indexOf(".png") !== -1) {
        picUrl = picUrl.substring(0, picUrl.indexOf(".png"));
        picUrl = picUrl + ".png";
        console.log(picUrl);
      }
      if (picUrl.indexOf(".PNG") !== -1) {
        picUrl = picUrl.substring(0, picUrl.indexOf(".PNG"));
        picUrl = picUrl + ".PNG";
        console.log(picUrl);
      } else if (picUrl.indexOf(".jpg") !== -1) {
        picUrl = picUrl.substring(0, picUrl.indexOf(".jpg"));
        picUrl = picUrl + ".jpg";
        console.log(picUrl);
      } else if (picUrl.indexOf(".jpeg") !== -1) {
        picUrl = picUrl.substring(0, picUrl.indexOf(".jpeg"));
        picUrl = picUrl + ".jpeg";
        console.log(picUrl);
      }

      return (
        <span>
          <Card style={{ maxWidth: "20rem", height: "25rem" }} className="m-2">
            <CardImg alt={char.name} src={picUrl} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{char.name}</CardTitle>
            </CardBody>
          </Card>
        </span>
      );
    });

    return (
      <div>
        <NavigationBar />
        <CardGroup>
          <>{card}</>
        </CardGroup>
      </div>
    );
  }
};

export default Disney;
