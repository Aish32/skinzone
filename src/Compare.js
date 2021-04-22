import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header";

const Compare = ({ products }) => {
  const [selectedOption1, setSelectedOption1] = useState(products[0].Name);
  const [selectedOption2, setSelectedOption2] = useState(products[0].Name);
  const [selectedProduct1, setSelectedProduct1] = useState(products[0]);
  const [selectedProduct2, setSelectedProduct2] = useState(products[0]);
  const [toggleResult, setToggleResult] = useState(false);
  const [commonIngredients, setCommonIngredients] = useState([]);

  const handleSelect1 = (e) => {
    setSelectedOption1(e.target.value);
    products.find((item) => item.Name === e.target.value);
    const selectedItem = products.find((item) => item.Name === e.target.value);
    setSelectedProduct1(selectedItem);
    console.log(selectedItem);
  };

  const handleSelect2 = (e) => {
    setSelectedOption2(e.target.value);
    const selectedItem = products.find((item) => item.Name === e.target.value);
    setSelectedProduct2(selectedItem);
    console.log(selectedItem);
  };

  const compare = () => {
    setToggleResult(true);
    const commonIngredientsTemp = [];
    const product1Ingredients = selectedProduct1.Ingredients.split(",");
    const product2Ingredients = selectedProduct2.Ingredients.split(",");
    for (let ingredient of product2Ingredients) {
      if (product1Ingredients.includes(ingredient)) {
        commonIngredientsTemp.push(ingredient.trim());
      }
    }
    console.log(commonIngredientsTemp);
    setCommonIngredients(commonIngredientsTemp);
  };

  return (
    <Container fluid className="compare-bg">
      <Container>
        <Header title="Product Comparison" />
        {products !== undefined && (
          <>
            <Row>
              <Col sm="6">
                <div className="compare-col">
                  <div className="product-details">
                    <h3>{selectedOption1}</h3>
                    <p className="use-font" style={{ cursor: "alias" }}>
                      by {selectedProduct1.Brand}
                    </p>
                    <p className="font-weight-bold" style={{ cursor: "alias" }}>
                      ${selectedProduct1.Price}
                    </p>
                  </div>
                </div>
                <select className="compare-select" onChange={handleSelect1}>
                  {products.map((item) => (
                    <option
                      className="coselectedOption2mpare-option"
                      onSelect={() => {
                        console.log(item);
                      }}
                    >
                      {item.Name}
                    </option>
                  ))}
                </select>
              </Col>
              <Col sm="6">
                <div className="compare-col">
                  <div className="product-details">
                    <h3>{selectedOption2}</h3>
                    <p className="use-font" style={{ cursor: "alias" }}>
                      by {selectedProduct2.Brand}
                    </p>
                    <p className="font-weight-bold" style={{ cursor: "alias" }}>
                      ${selectedProduct2.Price}
                    </p>
                  </div>
                </div>
                <select className="compare-select" onChange={handleSelect2}>
                  {products.map((item) => (
                    <option className="compare-option">{item.Name}</option>
                  ))}
                </select>
              </Col>
            </Row>
            <div className="btn-container use-font">
              <div className="a-btn" onClick={compare}>
                Compare
              </div>
            </div>
          </>
        )}
      </Container>
      {toggleResult && (
        <div className="result-section">
          <h4 className="result-heading use-font">Results</h4>
          <p className="result-heading">
            They share{" "}
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              {commonIngredients.length}
            </span>{" "}
            ingredients together
          </p>
          <h5 className="use-font">Common ingredients</h5>
          {commonIngredients.length > 0 &&
            commonIngredients.map((ingredient) => (
              <div className="span-box">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://www.google.com/search?q=" +
                    ingredient.split(" ").join("+")
                  }
                >
                  {ingredient}
                </a>
              </div>
            ))}
        </div>
      )}
    </Container>
  );
};

export default Compare;
