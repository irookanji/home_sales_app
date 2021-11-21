import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <Fragment>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />;
          <HouseFilter allHouses={allHouses} />
          <Routes>
            <Route
              path="/searchresults/:country"
              element={<SearchResults allHouses={allHouses} />}
            ></Route>

            <Route
              path="/house/:id"
              element={<HouseFromQuery allHouses={allHouses} />}
            ></Route>

            <Route
              path="/"
              element={<FeaturedHouse house={featuredHouse}></FeaturedHouse>}
            ></Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
