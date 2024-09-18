import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
// import CreatePost from "../components/CreatePost";
// import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  //useState
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
    {/* // Sidebar */}
    <div className="sidebar">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {/* Header And Footer */}
      <div className="header-footer">
        <Header />
        {/* {selectedTab === "Home" ? (<PostList />) : (<CreatePost />)} */}
        <Outlet />
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}



export default App;
