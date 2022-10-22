import { View } from 'react-native-web';
import './App.css';
import Table from './table'


function App() {
  return (
    <div className="App">
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      <header className="App-header"> {/*defines the header, use classname="App-header" to tell which class from App.css will be used on this tag*/}
        <a className="Home-button" href="/">Meeting Scheduler</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className="Header-item" href="/bookroom">Book Room</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className="Header-item" href="/checkbookings">Check Bookings</a>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <a className="Header-item" href="/managebookings">Manage Bookings</a>
      </header>
      <body className="App-body">
        <Availability/>
      </body>
    </div>  
  );
}

// Custom tag that will create the table
const Availability = () => (
  <Table container flexDirection = 'column' alignItems = ''>
    {/* table below corresponds to the first row which is all headers */}
    <Table flex = {1} container flexDirection = 'row'>
      <Table width = '100px'>
        <h4>Hours</h4>
      </Table>
      <Table width = '50px'>
        <h4>0</h4>
      </Table>
      <Table width = '50px'>
        <h4>1</h4>
      </Table>
      <Table width = '50px'>
        <h4>2</h4>
      </Table>
      <Table width = '50px'>
        <h4>3</h4>
      </Table>
      <Table width = '50px'>
        <h4>4</h4>
      </Table>
      <Table width = '50px'>
        <h4>5</h4>
      </Table>
      <Table width = '50px'>
        <h4>6</h4>
      </Table>
      <Table width = '50px'>
        <h4>7</h4>
      </Table>
      <Table width = '50px'>
        <h4>8</h4>
      </Table>
      <Table width = '50px'>
        <h4>9</h4>
      </Table>
      <Table width = '50px'>
        <h4>10</h4>
      </Table>
      <Table width = '50px'>
        <h4>11</h4>
      </Table>
      <Table width = '50px'>
        <h4>12</h4>
      </Table>
      <Table width = '50px'>
        <h4>13</h4>
      </Table>
      <Table width = '50px'>
        <h4>14</h4>
      </Table>
      <Table width = '50px'>
        <h4>15</h4>
      </Table>
      <Table width = '50px'>
        <h4>16</h4>
      </Table>
      <Table width = '50px'>
        <h4>17</h4>
      </Table>
      <Table width = '50px'>
        <h4>18</h4>
      </Table>
      <Table width = '50px'>
        <h4>19</h4>
      </Table>
      <Table width = '50px'>
        <h4>20</h4>
      </Table>
      <Table width = '50px'>
        <h4>21</h4>
      </Table>
      <Table width = '50px'>
        <h4>22</h4>
      </Table>
      <Table width = '50px'>
        <h4>23</h4>
      </Table>
      <Table width = '50px'>
        <h4>24</h4>
      </Table>
    </Table>
    {/* each Table past here is a new row. Right now these are just the titles */}
    <Table  container flexDirection = "row">
      <h4>Room 1</h4>
    </Table>
    <Table container flexDirection = "row">
      <h4>Room 2</h4>
    </Table>
  </Table>
)

export default App;
