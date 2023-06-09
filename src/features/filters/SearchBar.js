import React from "react";
import styles from "../posts/Posts.module.css";
import {useState} from "react";
import store from "../../store";
import {searchFilterChanged, sortFilterChanged} from "./filtersSlice";
import {useSelector} from "react-redux";

const SearchBar = () => {
    const initialSearchTerm = useSelector(state => state.filters.searchTerm)
    const initialSortOrder = useSelector(state => state.filters.sortOrder)

    const [searchTermValue, setSearchTermValue] = useState(initialSearchTerm)
    const [sortOrder, setSortOrder] = useState(initialSortOrder)

    function handleSortChange(e) {
        const order = e.target.value
        setSortOrder(order)
        store.dispatch(sortFilterChanged(order))
    }

    function handleSearchChange(e) {
        let input = e.target.value;
        setSearchTermValue(input);
        store.dispatch(searchFilterChanged(input))
    }

    return (
        <div className={styles.searchFormContainer}>
            <div className={styles.formField}>
                <label>
                    <input
                        name="search"
                        placeholder="Search Posts"
                        value={searchTermValue}
                        onChange={handleSearchChange}
                    />
                </label>
            </div>
            <div className={styles.formField}>
                <label>Sort:
                    <select name="sort" onChange={handleSortChange} value={sortOrder}>
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default SearchBar
