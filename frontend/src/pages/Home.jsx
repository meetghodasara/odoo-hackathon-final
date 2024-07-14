import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import "./Home.css"
import axios from 'axios';
import BookList from "../components/BookList";

const Home = () => {
  const [search, setSearch] = useState("");
  const[data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://192.168.1.95:8080/api/v1/book/books`)
        .then((res) => {
          console.log(res);
          const info = res;
          setData(info);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    };

    getData();
  }, []);

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
                <BookList title={"New Arrivals"} data={data}></BookList>
            </div>
            <div className="Right-list">
                <BookList title={"Trending"} data={data}></BookList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
