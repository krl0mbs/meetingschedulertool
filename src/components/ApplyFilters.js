export const ApplyFilters = (filters) => {
    
    const applyFilters = () => {
        console.log(filters.filters[0].filterItem)
    }
    
    return(
        <div className="filter-box">
            <button className="apply-button" onClick={applyFilters.bind()}>Apply</button>
        </div>
    )
}