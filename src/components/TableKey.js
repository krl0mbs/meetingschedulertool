export const TableKey = () => {
    return(
        <p style={{display:"flex", flexDirection:"column", alignItems:"left", gap:"3px", padding:"10px",  margin:"0"}}>

          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"#1f97e5"}}></button>
            <div className="keyName">Open</div>
          </h>

          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"purple"}}></button>
            <div className="keyName">Booked</div>
          </h>

          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"gray"}}></button>
            <div className="keyName">Selected</div>
          </h>

        </p>
    )
}