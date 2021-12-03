import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";

const NotFound = () => {
  return (
    <>
      <NavigationBar />
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img
              src="https://i.imgflip.com/3qsiqi.png"
              style={{ maxWidth: "100%" }}
            ></img>
          </div>

          <div class="col-6" style={{ display: "flex" }}>
            <h1>Page not found</h1>
            <p style={{ alignItems: "center" }}>
              You must have picked the wrong door because I haven't been able to
              lay my eye on the page you've been looking for
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
