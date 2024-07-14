import React, {useState} from "react";
import Header from "../components/Header";
import "./Home.css"
import BookList from "../components/BookList";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-header">
          <Header />
        </div>
        <div className="home-content">
          <p className="home-title">Search The Books Available in Library</p>
          <div className="search-box">
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter Dish Name"
              />
            </div>
            <button>Search</button>
          </div>
          <div className="books-list-container">
            <div className="left-list">
                <BookList title={"New Arrivals"}></BookList>
            </div>
            <div className="Right-list">
                <BookList title={"Trending"}></BookList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
