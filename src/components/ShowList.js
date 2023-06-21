import React, { useState, useEffect } from "react";
import "./ShowList.css";
import { Link } from "react-router-dom";

function ShowList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  return (
    <div className="container-fluid">
      {list.map((item) => {
        return (
          <div key={item.show.id}>
            <div className="shows-container">
              <div className="card p-2 m-3">
                <div className="card-img-top">
                  <img
                    src={item.show.image?.medium}
                    height="300px"
                    width="280px"
                    alt=""
                  />
                </div>
                <div className="card-header">
                  <h4 className="show-name">{item.show.name}</h4>
                </div>
                <div className="card-body">
                  <dl>
                    <dt>Language</dt>
                    <dd>{item.show.language}</dd>
                    <dt>Genres</dt>
                    <dd className="d-flex justify-content-around">
                      {item.show.genres.map((elem) => (
                        <p className="m-0">{elem}</p>
                      ))}
                    </dd>
                  </dl>
                </div>
                <div className="card-footer">
                  <Link
                    to={"/details/" + item.show.id}
                    className="btn btn-warning text-danger p-2"
                  >
                    Load More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowList;