const SearchBar = (props) => {
    return(
        <form className="search-bar">
            <div className="form-group">
                <input type="text" className="form-control" name="username" onChange={props.onChange} placeholder="Filter users by Username"/>
            </div>
        </form>
    );
}

export default SearchBar;