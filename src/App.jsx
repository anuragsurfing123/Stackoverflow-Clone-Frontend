import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import SingleQuestion from "./pages/SingleQuestion";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AskQuestion from "./pages/AskQuestion";

 const App=() => {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route  path='/questions/:question_id/:question_name' element={<SingleQuestion/>} />
      <Route  path='/login' element={<Signin/>} />
      <Route  path='/register' element={<Signup/>} />
      <Route  path='/askquestion' element={<AskQuestion/>} />



        

      {/* <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
      </Route> */}
    </Routes>
  </Router>
  );
}

export default App;
