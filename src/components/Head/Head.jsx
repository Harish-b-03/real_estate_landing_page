import "./Head.css"
import property from "../../data"
import Card from "../Card/Card"
import { useState } from "react"

function Head() {
  const [list, setlist] = useState(property)
  const changeStyle = () => {
    const element = document.getElementById("PropertyLists");
    if(list.length < 3){       
        element.style.justifyContent = "left";
        element.style.marginRight = "20px";
    } else{
        element.style.justifyContent = "space-between";
        element.style.marginRight = "0";
    }
  }
  const get_values = () => {
    var location = document.getElementById("Location").value;
    var when = document.getElementById("When").value;
    var price = document.getElementById("Price").value;
    var propertyType = document.getElementById("PropertyType").value;
    if(when === "select"){
        alert("Please Select Move-in Date")
    }
    else{
        if((location !== undefined) && (when !== undefined) && (price !== undefined) && (propertyType !== undefined)){
            return {data:{location, when, price, propertyType}, error:false}
        }
    }

    return {data:{}, error: true}

  }
  const filter = () => {
    const PropertyLists = document.getElementById("PropertyLists");
    const {data, error} = get_values();
    if(!error){
        setlist(property.filter((element) => {
            if((data.location === element.state)){
                if(((data.price === "500-2500") && (element.rent >= 500 || element.rent <= 2500)) || ((data.price === "2500") && (element.rent > 2500))){
                    if((data.propertyType === element.house_type)){
                        if( ((data.when === "ready") && (element.move_in <= 15)) || ((data.when === "month") && (element.move_in <= 30 && element.move_in > 15)) || ((data.when === "more") && (element.move_in > 30))){
                            return true;
                        }
                    }
                }
            }
            return false;
        }))
        console.log(list,property,data)
    }
  }
  return (
    <div className="HeadContainer">
        <div className="layer1">
            <h1 className="Heading">
                Search properties to rent
            </h1>
            <div className="SearchBarContainer">
                <input type="text" className="SearchInput" placeholder="Search with Search Bar"/>
            </div>
        </div>

        <div className="FilterSectionContainer">
            <div className="LocationContainer">
                <span className="Label">Location</span>
                <select id="Location" className="Location">
                    <option value="NY">New York, USA</option>
                    <option value="FL">Florida, USA</option>
                </select>
            </div>
            <div className="WhenContainer">
                <span className="Label">When</span>
                <select id="When" className="When">
                    <option value="select">Select Move-in Date</option>
                    <option value="ready">Ready to occupy</option>
                    <option value="month">Within a month</option>
                    <option value="more">{"I can wait (>1month)"}</option>
                </select>
            </div>
            <div className="PriceContainer">
                <span className="Label">Price</span>
                <select id="Price" className="Price">
                    <option value="500-2500">&#36;500 - &#36;2,500</option>
                    <option value="2500">Above &#36;2,500</option>
                </select>
            </div>
            <div className="PropertyTypeContainer">
                <span className="Label">Property Type</span>
                <select id="PropertyType" className="PropertyType">
                    <option value="House">Houses</option>
                    <option value="Villa">Villas</option>
                </select>
            </div>
            <div className="SearchButtonContainer">
                <button className="SearchButton" onClick={()=>{filter()}}>Search</button>
            </div>
        </div>

        {
        (list.length>0)?
        <div id="PropertyLists" className={(list.length>=3)?"PropertyLists":"PropertyLists_short"}>
            {list.map((data)=><Card key={data.id} data={data}/>)}
        </div>:<div style={{marginTop:"50px",fontWeight:"700",}}>No matches found</div>}
    </div>
  )
}

export default Head