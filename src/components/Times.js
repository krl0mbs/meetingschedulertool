// exclusively holds the values that belong in the first row, ie the times that meetings can be held
export const Times = () => ( 
    <> 
      <h4 style={TimeStyle}>7</h4>
      <h4 style={TimeStyle}>8</h4>
      <h4 style={TimeStyle}>9</h4>
      <h4 style={TimeStyle}>10</h4>
      <h4 style={TimeStyle}>11</h4>
      <h4 style={TimeStyle}>12</h4>
      <h4 style={TimeStyle}>13</h4>
      <h4 style={TimeStyle}>14</h4>
      <h4 style={TimeStyle}>15</h4>
      <h4 style={TimeStyle}>16</h4>
      <h4 style={TimeStyle}>17</h4>
    </>
)

// styles for the items in the first row
const TimeStyle ={ 
    width: '4rem', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'left',
}