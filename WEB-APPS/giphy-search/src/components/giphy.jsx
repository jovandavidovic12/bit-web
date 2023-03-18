import React, { useEffect, useState } from "react";
import axios from "axios";

export const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "v9nGHafLm3fYqYTrUevHYP2aiULLDxG3",
        },
      });
      console.log(result);
      setData(result.data.data);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((el) => {
      return (
        <div key={el.id} className="gif col-3 p-1 m-2">
          <img className="p-5" src={el.images.fixed_height.url} alt="img" />
        </div>
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "v9nGHafLm3fYqYTrUevHYP2aiULLDxG3",
        q: search ,
        limit : 25
      }
    });
    
    setData(result.data.data);

  };

  return (
    <div className="d-flex flex-wrap justify-content-center col-12">
        <div >
      <form className="form-inline m-2">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mx-2"
        > GO </button>
      </form>
      </div>
      <div className="d-flex flex-wrap justify-content-between gifs">{renderGifs()}</div>
    </div>
  );
};
