const GoogleSearch = () => {
    return (
        <div className="gcse-search">
            <form className="gsce-searchbox d-flex rounded search-box" role="search">
              <input className="gsce-input form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <div class="gcse-searchresults"></div>
        </div>
    )
}

export default GoogleSearch