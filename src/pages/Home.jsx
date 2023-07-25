import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = ({ response }) => {
  console.log(response);
  return (
    <>
      <Layout>
        {
          <div>
            <h1 className="text-center py-4 font-semibold text-2xl">
              Account Management System
            </h1>

            <div>
              <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                  <img src="/public/image1.jpeg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                  <img src="/public/image2.jpeg" className="w-full" />
                </div>
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                  1
                </a>
                <a href="#item2" className="btn btn-xs">
                  2
                </a>
              </div>
            </div>
            <div className="container mx-auto flex justify-center py-8">
              <div className="stats bg-primary text-primary-content">
                <div className="stat">
                  <div className="stat-title">Account balance</div>
                  <div className="stat-value">$89,400</div>
                  <div className="stat-actions">
                    <Link to={"/Income"}>
                      <button className="btn btn-sm btn-success">
                        Add funds
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Current balance</div>
                  <div className="stat-value">$89,400</div>
                  <div className="stat-actions">
                    <button className="btn btn-sm">Withdrawal</button>
                    <button className="btn btn-sm">deposit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </Layout>
    </>
  );
};

export default Home;
