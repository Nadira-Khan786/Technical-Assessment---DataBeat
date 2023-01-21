import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import FromBuilder from "../FromBuilder/FromBuilder";
const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  return (
    <>
    {/* <FromBuilder/> */}
      {data &&
        data.map((item, index) => {
          return (
            <div className="main" key={index}>
              <ul className="cards">
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src="https://picsum.photos/500/300/?image=10" />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{item.title}</h2>
                      <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card
                        grid layout
                      </p>
                      <button className="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src="https://picsum.photos/500/300/?image=5" />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{item.title}</h2>
                      <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card
                        grid layout
                      </p>
                      <button className="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src="https://picsum.photos/500/300/?image=11" />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{item.title}</h2>
                      <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card
                        grid layout
                      </p>
                      <button className="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src="https://picsum.photos/500/300/?image=14" />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{item.title}</h2>
                      <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card
                        grid layout
                      </p>
                      <button className="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src="https://picsum.photos/500/300/?image=17" />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{item.title}</h2>
                      <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card
                        grid layout
                      </p>
                      <button className="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src="https://picsum.photos/500/300/?image=2" />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{item.title}</h2>
                      <p className="card_text">
                        Demo of pixel perfect pure CSS simple responsive card
                        grid layout
                      </p>
                      <button className="btn card_btn">Read More</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default Home;
