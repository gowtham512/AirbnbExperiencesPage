import React from "react"
import Navbar from "./Components/Navbar";
import Heroo from "./Components/Heroo";
import Card from "./Components/Card";
import courses from "./Components/courses";

function App() {
  const cards = courses.map(item=>{
  return (
    <Card 
    key={item.id}
    item={item}
    // img={item.coverImg}
    // rating={item.stats.rating}
    // reviewCount={item.stats.reviewCount}
    // country={item.location}
    // title={item.title}
    // price={item.price}
    // openSpots={item.openSpots}
    // location={item.location}
    />)})

  return (
    <div>
    <Navbar />
    <Heroo />
    <section className="cards-list">
    {cards}
    </section>
    
    </div>
  )}
export default App;
