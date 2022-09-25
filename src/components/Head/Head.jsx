import "./Head.css"
import property from "../../data"
import Card from "../Card/Card"

function Head() {
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
                <select name="Location" className="Location">
                    <option value="ny">New York, USA</option>
                    <option value="fl">Florida, USA</option>
                </select>
            </div>
            <div className="WhenContainer">
                <span className="Label">When</span>
                <select name="When" className="When">
                    <option value="select">Select Move-in Date</option>
                    <option value="ready">Ready to occupy</option>
                    <option value="month">Within a month</option>
                    <option value="more">{"I can wait (>1month)"}</option>
                </select>
            </div>
            <div className="PriceContainer">
                <span className="Label">Price</span>
                <select className="Price">
                    <option value="500-2500">&#36;500 - &#36;2,500</option>
                    <option value="2500-5000">&#36;2,500 - &#36;5,000</option>
                    <option value="5000-10000">&#36;5,000 - &#36;10,000</option>
                    <option value="10000">Above &#36;10,000</option>
                </select>
            </div>
            <div className="PropertyTypeContainer">
                <span className="Label">Property Type</span>
                <select className="PropertyType">
                    <option value="Houses">Houses</option>
                    <option value="Villa">Villas</option>
                </select>
            </div>
            <div className="SearchButtonContainer">
                <button className="SearchButton">Search</button>
            </div>
        </div>

        <div className="PropertyLists">
            {property.map((data)=><Card key={data.id} data={data}/>)}
        </div>
    </div>
  )
}

export default Head