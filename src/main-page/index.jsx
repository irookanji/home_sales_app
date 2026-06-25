import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./main-page.css";
import HousesContext from "../context/houseContext";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import useHouses from "../hooks/useHouses";
import HouseFromQuery from "../house/HouseFromQuery";
import SearchResults from "../search-results";
import FeaturedHouse from "./featured-house";
import Header from "./header";
import HouseFilter from "./house-filter";

function App() {
	const allHouses = useHouses();
	const featuredHouse = useFeaturedHouse(allHouses);

	return (
		<Router>
			<HousesContext.Provider value={allHouses}>
				<div className="container">
					<Header subtitle="Providing houses all over the world" />
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
			</HousesContext.Provider>
		</Router>
	);
}

export default App;
