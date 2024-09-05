import React from "react"

export default function Card(props){
    let badge
    if (props.item.openSpots===0){
        badge="SOLD OUT"
    }
    else if (props.item.location === "Online"){
        badge = "ONLINE"
    }
    return(
    <div className="card">
        {badge &&<div className="card--badge">{badge}</div>}
          <img src={`./image/${props.item.coverImg}`} className="card--image" alt="xyz"/>
        <div className="card--stats">
            <img src="./image/Star1.png"className="card--star" />
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount})</span>
            <span className="gray">{props.item.location}</span>
        </div>
        <div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} </span>/ person
            </p>
        </div>
    </div>)
}