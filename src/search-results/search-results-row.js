import "./search-results.css";

const SearchResultsRow = ({ house }) => {
  const setActive = () => {};

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
