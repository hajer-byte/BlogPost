import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogpostList from "./components/BlogpostList.js";
import EditBlogpost from "./components/EditBlogpost.js";
import CreateBlogPost from "./components/CreateBlogpost.js";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN-Stack Todo App</h2>
      </div>
      <Route path="/" exact component={BlogpostList} />
      <Route path="/edit/:id" component={EditBlogpost} />
      <Route path="/create" component={CreateBlogPost} />
    </Router>
  );
}

export default App;
