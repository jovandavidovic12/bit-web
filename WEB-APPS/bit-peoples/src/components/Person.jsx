import { useEffect } from "react";
import { useState } from "react";
import { PersonInfo } from "./PersonInfo";

export const Person = () => {
  const url = "https://randomuser.me/api/?results=15";
  const [user, setUser] = useState([]);
  const [search,setSearch] = useState("");
 

  useEffect(() => {
    const fetchData = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        console.log(res)
        setUser(res);
      });
  }, []);

const handleSearchChange = (event) => {
  setSearch(event.target.value)
};



 
  return (
    <div>
      <div className="d-flex flex-start justify-content-center ">
        <form className="col-6 text-center mt-2" >
          <input value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control form-inline mt-2 "/>
        </form>
      </div>
    
    <div>
      {user.filter((item) => {
        console.log(item)
        return search.toLowerCase() === '' ? item : item.name.first.toLowerCase().includes(search)
      }).map((item,index) => {
        return <PersonInfo key={index} content={item} gen={item.gender}/>
      })}
    </div>
    </div>
  )
    }

  