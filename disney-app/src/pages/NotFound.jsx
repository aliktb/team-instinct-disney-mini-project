import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";

const NotFound = () => {
  return (
    <>
      <NavigationBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/25/00/00/mike-wazowski-6739521_960_720.png"
              style={{ maxWidth: "80%" }}
              id="mike"
            ></img>
          </div>

          <div
            className="col"
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <div className="my-5">
              <h1 className="my-4">Page not found</h1>
              <p className="mt-4" style={{ alignItems: "center" }}>
                You must have picked the wrong door because I haven't been able
                to lay my eye on the page you've been looking for
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
