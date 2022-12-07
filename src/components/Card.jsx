export default function Card(props){
  let cardText
  if (props.item.openSpots === 0) {
    cardText = "SOLD OUT"
  }
  else if (props.item.location === "Online") {
    cardText = "ONLINE"
  }
  return(
    <div className = "card">
      {cardText && <div className = "card-badge">{cardText}</div>}
      <img src= {props.item.coverImg} className = "card-img" alt = "reviewer" />
      <div className = "sub-items">
        <img src = "./images/star.png" className= "star-img"  alt="rating-star" />
        <span className = "info">{props.item.stats.rating}</span>
        <span className = "info">({props.item.stats.reviewCount})</span>
        <span className = "info">{props.location}</span>
      </div>
      <p className = "card-text">{props.item.title}</p>
      <p className = "card-price"><b>From ${props.item.price}</b> / person </p>
    </div>
  )
}