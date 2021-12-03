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

  const [page, setPage] = useState(1);

  const [paginatedState, setPS] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://api.disneyapi.dev/characters")
        .then((response) => {
          setData(response.data.data);

          let newData = response.data.data;
          console.log(newData);
          let paginatedArray = [];
          let i = 0;

          while (newData.length > 0) {
            if (newData.length > 16) {
              paginatedArray[i] = newData.slice(0, 16);

              console.log(newData);
              i++;
              newData.splice(0, 16);
            } else {
              paginatedArray[paginatedArray.length] = newData;
              newData = [];
            }
            console.log(paginatedArray);
            setPS(paginatedArray);
          }
          setIsLoaded(true);
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

    const increasePage = () => {
      setPage(page + 1);
    };

    const decreasePage = () => {
      setPage(page - 1);
    };

    let pageButtonsF = () => {};

    if (page === 1) {
      pageButtonsF = () => {
        return (
          <div>
            <button type="button" onClick={increasePage}>
              +1
            </button>
          </div>
        );
      };
    } else if (paginatedState[page - 1].length > 15) {
      pageButtonsF = () => {
        return (
          <div>
            <button type="button" onClick={decreasePage}>
              -1
            </button>
            <button type="button" onClick={increasePage}>
              +1
            </button>
          </div>
        );
      };
    } else {
      pageButtonsF = () => {
        return (
          <div>
            <button type="button" onClick={decreasePage}>
              -1
            </button>
          </div>
        );
      };
    }

    const pageButtons = pageButtonsF();

    console.log(paginatedState);
    console.log(paginatedState[0]);

    const card = paginatedState[page - 1].map((char) => {
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
        <p>Page: {page}</p>

        <CardGroup>
          <>{card}</>
        </CardGroup>
        <>{pageButtons}</>
      </div>
    );
  }
};

export default Disney;
