// This file creates the key that appears on the left sidebar

export const TableKey = () => {
    return(
        <p style={{display:"flex", flexDirection:"column", alignItems:"left", gap:"3px", padding:"10px",  margin:"0"}}>

          {/* This creates the header for the key */}
          <h style={{display:"flex", flexDirection:"row", justifyContent:'center'}}>
            <div className="keyTitle">Key</div>
          </h>

          {/* This creates the colored box and label for Open availability */}
          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"#1f97e5"}}></button>
            <div className="keyName">Open</div>
          </h>

          {/* This creates the colored box and label for Booked */}
          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"purple"}}></button>
            <div className="keyName">Booked</div>
          </h>

          {/* This creates the colored box and label for Selected */}
          <h style={{display:"flex", flexDirection:"row"}}>
            <button className="keyBoxes" style={{backgroundColor:"gray"}}></button>
            <div className="keyName">Selected</div>
          </h>

        </p>
    )
}