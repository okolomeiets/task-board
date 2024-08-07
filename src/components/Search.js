import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/searchSlice'

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.search.searchTerm);

    const handleSearchChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <div className="search">
            <span className="material-symbols-outlined">search</span>
            <input
                className="search-field"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Search;