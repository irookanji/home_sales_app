import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import HousesContext from "../context/houseContext";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <Fragment>
          <div className="container">
            <Header subtitle="Providing houses all over the world" />;
            <HouseFilter />
            <Routes>
              <Route
                path="/searchresults/:country"
                element={<SearchResults />}
              ></Route>

              <Route path="/house/:id" element={<HouseFromQuery />}></Route>

              <Route
                path="/"
                element={<FeaturedHouse house={featuredHouse}></FeaturedHouse>}
              ></Route>
              
            </Routes>
          </div>
        </Fragment>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
