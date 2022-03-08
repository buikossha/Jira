import { BrowserRouter as Router, Route } from "react-router-dom"
import { useEffect } from "react";
import './App.scss'
import { useDispatch } from "react-redux";
import MakeProject from "./components/MakeProject/MakeProject";
import SignIn from "./components/SignIn/SignIn";
import { googleCheckAuth } from "./redux/actions/userAction";
import TasksBoard from "./components/TasksBoard/TasksBoard";
import AllProjects from "./components/AllProjects/AllProjects";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(googleCheckAuth())
  }, [])

  return (
    <>
      <Router>
        <Route exact path="/board:id" component={TasksBoard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={MakeProject} />
        <Route exact path="/allProjects" component={AllProjects} />
      </Router>
    </>
  );
}

export default App;
