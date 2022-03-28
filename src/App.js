import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {FeedbackForm} from "./сontacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <FeedbackForm/>
            <Footer/>
        </div>
    );
}

export default App;
