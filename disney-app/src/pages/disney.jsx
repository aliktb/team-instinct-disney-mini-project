import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Card, CardBody, CardImg, CardTitle } from "reactstrap";

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
    }, 5000);
  }, []);

  if (error) {
    return <h1>Oops, something went wrong {error.message}</h1>;
  } else if (!isLoaded) {
    return (
      <div>
        <p>Loading data...</p>
        <Spinner type="grow" colour="primary" />
      </div>
    );
  } else {
    console.log(data);
    const card = data.map((char) => {
    console.log(char.imageUrl);
      return (

  <Card>
    <CardImg
      alt="Card image cap"
      src={char.imageUrl}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {char.name}
      </CardTitle>
    </CardBody>
  </Card>
      );
    });

    return <div>{card}</div>;
  }
};

export default Disney;
