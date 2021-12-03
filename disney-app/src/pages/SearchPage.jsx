import { useState } from "react";
import Search from "../components/Search";
import { Card, CardBody, CardImg, CardTitle, CardGroup } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import "../CSS/home.css";

const SearchPage = () => {
  const [results, setResults] = useState([]);

  if (results.length > 0) {
    const card = results.map((char) => {
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
        <Search setResults={setResults} />
        <div>
          <CardGroup>
            <>{card}</>
          </CardGroup>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavigationBar />
        <Search setResults={setResults} />
      </div>
    );
  }
};

export default SearchPage;
