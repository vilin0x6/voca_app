import DayList from "./components/DayList";
import Header from "./components/Header";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/voca_app">
            <DayList />
          </Route>
          <Route path="/voca_app/day/:day"> {/* url의 값을 day라는 변수로 받음 */}
            <Day />
          </Route>
          <Route path="/voca_app/create_word">
            <CreateWord />
          </Route>
          <Route path="/voca_app/create_day">
            <CreateDay />
          </Route>
          {/* 위의 path에 해당되지 않는 경우 */}
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
