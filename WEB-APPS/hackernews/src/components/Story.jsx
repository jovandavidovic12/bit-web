import { useEffect } from "react";
import { useState } from "react";
import { getStory } from "../services/API";
import {IconContext} from "react-icons";
import {FaHeart} from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' ;


const Story = ({id})=> {
    const [data, setData] = useState({})
    useEffect(()=> {
        getStory(id).then(response=> setData(response));
    }, [id])

    const checkData = () => {
        if(data) {
            return <>
            <div className="px-2">
                <ul classname="list-group">

                    <li className="list-group-item border-0 border-bottom">
                       <span > <a href="{data.url}" target="_self">{data.number} {data.title}</a></span> 

                        <div className="p-2">
                            <span><IconContext.Provider value={{ color: "gray", className: "global-class-name" }}><FaHeart /></IconContext.Provider>  {data.score} points</span>
                            <span>{data.by}</span>
                            <span>  {data.time} hours ago</span>
                            <span className=" mx-2 bg-primary rounded-pill" value="width: 75px; height: 30px;">  {data.descendants} comments</span>
                        </div>
                    </li>
                </ul>
            </div>
            </>
            
        }

        return <div></div>
    }
    return checkData()
    
}
export default Story;