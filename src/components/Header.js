import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Header = ({ title }) => {
  return (
    <Container>
      <div className="header use-font">
        <Link to="/" className="go-back">
          <i class="far fa-arrow-alt-circle-left"></i>
        </Link>
        <h1>{title}</h1>
      </div>
    </Container>
  );
};

export default Header;