import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetails.css";

function ShowDetails() {
  const params = useParams();
  console.log(params);
  const [show, setShow] = useState();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setShow(data);
      });
  }, [params.id]);

  return (
    <div className="container">
      {show ? (
        <div className="row">
          <div className="col-4">
            <img
              src={show.image?.medium}
              width="100%"
              height="590px"
              alt={show.name}
            />
          </div>
          <div className="col-8">
            <div className="show-name">{show.name}</div>
            <div className="summary">{show.summary}</div>
            <div className="mt-3">
              <dl className="m-2">
                <dt>Language</dt>
                <dd>{show.language}</dd>
                <dt>Genres</dt>
                <dd>{show.genres}</dd>
                <dt>Rating</dt>
                <dd>{show.rating.average}/10</dd>
                <dt>Premiered</dt>
                <dd>{show.premiered}</dd>
                <dt>Status</dt>
                <dd>{show.status}</dd>
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...🔃</h2>
      )}
    </div>
  );
}

export default ShowDetails;