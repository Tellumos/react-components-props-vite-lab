import React from "react";
import blogData from "../data/blog.js";
import About from "./About.jsx"
import Header from "./Header.jsx"
import ArticleList from "./ArticleList.jsx"


console.log(blogData);

function App() {
  return (
    <div className="App">
      <About image = {blogData.image} about = {blogData.about}/>
      <Header name = {blogData.name} />
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
