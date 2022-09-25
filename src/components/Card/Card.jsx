import { useState } from "react";
import "./Card.css"
import {Favorite, FavoriteBorderOutlined} from "@material-ui/icons"
import AutoAwesome from '@mui/icons-material/AutoAwesome';

function Card({data}) {
  const [liked, setliked] = useState(false);

  return (
    <div className="CardContainer">
        <div className="PropertyImageContainer">
            <img src={data.property_image} alt="PropertyImage" className="PropertyImage" />
        </div>
        <div className="PropertyDetails">
            <div>
                <div className="RentContainer">
                    <span className="Rent">&#36;{data.rent}</span>
                    <span className="RentLabel">/month</span>
                </div>
                <div className="PropertyNameContainer">
                    <span className="PropertyName">{data.property_name}</span>
                </div>
                <div className="LocationContainer">
                    <span className="LocationArea">{(data.area.length <=50)?data.area:data.area.slice(0,47)+"..."}</span>
                    <span className="LocationState">, {data.state}</span>
                </div>
            </div>
            <div className="details">
                <div className="BedroomsContainer">
                    <img src="/assets/BedIcon.svg" alt="Bed" className="BedIcon" />
                    <span className="Bedrooms">{data.bedrooms} Beds</span>
                </div>
                <div className="BathroomsContainer">
                <img src="/assets/BathTubIcon.svg" alt="BathTub" className="BathTubIcon" />
                <span className="Bathrooms">{data.bathrooms} Bathrooms</span>
                </div>
                <div className="DimensionContainer">
                <img src="/assets/DimensionIcon.svg" alt="Dimension" className="DimensionIcon" />
                    <span className="Bedrooms">{data.dimensions[0]}<span className="crossmark">x</span>{data.dimensions[1]} m<sup>2</sup> </span>
                </div>
            </div>
        </div>

        <div className="PopularTagContainer">
            <AutoAwesome className="PopularIcon"/><span className="PopularTag">POPULAR</span>
        </div>

        {
            (liked)? 
                <div className="LikedButtonContainer" onClick={()=>{setliked(!liked)}}>
                    <Favorite className="LikeButton"/>
                </div>
                :
                <div className="LikeButtonContainer" onClick={()=>{setliked(!liked)}}>
                    <FavoriteBorderOutlined className="LikeButton" />
                </div>
        }
    </div>
  )
}

export default Card