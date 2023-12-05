const GoogleSearch = () => {
    return (
        <div className="gcse-search">
            <form className="gsce-searchbox d-flex rounded search-box" role="search">
              <input className="gsce-input form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              
            </form>
            <div className="gcse-searchresults"></div>
        </div>
    )
}

export default GoogleSearch