import Sidebar from './components/SideBar.jsx';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
      </div>
    </BrowserRouter>
  )
}

export default App
