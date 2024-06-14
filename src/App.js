import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';




function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="AppContent">
          <Routes>


            <Route path="/Dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route path="*" element={<Profile postsData={props.postsData} addPost={props.addPost} />} />
            <Route path="/News/*" component={News} />
            <Route path="/Music/*" component={Music} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
