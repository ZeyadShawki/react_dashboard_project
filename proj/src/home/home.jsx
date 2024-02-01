import "./home.css";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
export default function Home(params) {
  console.log("renderrr");
  return (
    <>
      <div className="coulmn ">
        <h1 className="home">Hello</h1>

        <p className="text">sssssssssssssssssssssssssssssssssssssssssssssss</p>
      </div>
      <Link to="/about">
        <Button variant="primary">about</Button>{" "}
      </Link>
    </>
  );
}
