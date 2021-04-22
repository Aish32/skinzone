import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <>
      <div className="home">
        <h1 className="home-title use-font"> Skin Zone </h1>{" "}
        <div className="home-cta">
          <Link className="home-cta-link" to="/skintype">
            Check Skin Type
          </Link>
          <Link className="home-cta-link" to="/compare">
            Product Comparison
          </Link>
        </div>
      </div>
      <div className="home_cta2">
        <div className="home-cta2-heading">
          <h1>WE KNOW WHAT YOU WANT</h1>
        </div>
        <div className="home-cta2-body">
          <div className="cta-card">
            <img
              src="https://raw.githubusercontent.com/Aish32/skinzone/main/images/organic.png"
              alt="org-img"
              className="card-img"
            />
            <h3>ORGANIC PRODUCTS</h3>
            <p>Shop cosmetics items that have low chemcial effects</p>
            <a
              href="https://yehaindia.com/best-organic-beauty-brands-in-india/"
              className="btn btn-custom"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </div>
          <div className="cta-card">
            <img
              src="https://raw.githubusercontent.com/Aish32/skinzone/main/images/skincare.png"
              alt="org-img"
              className="card-img"
            />
            <h3>SKIN CARE TIPS</h3>
            <p>DIY natural skin care tips to maintain your skin texture</p>
            <a
              href="https://www.webmd.com/beauty/whats-your-skin-type"
              className="btn btn-custom"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </div>
          <div className="cta-card">
            <img
              src="https://raw.githubusercontent.com/Aish32/skinzone/main/images/news.png"
              alt="org-img"
              className="card-img"
            />
            <h3>NEWS FEED</h3>
            <p>Know the recent news about cosmetics and beauty products</p>
            <a
              href="https://www.cosmeticsbusiness.com/category/cosmetic_news_weekly"
              className="btn btn-custom"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
