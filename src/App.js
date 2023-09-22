import logo from "./logo.svg";
import "./App.css";
import Place from "./components/Place";

const destinations = [
  {
    name: "Hyderabad",
    amount: 3000,
    img: "https://media.istockphoto.com/id/1010240892/photo/the-spectacular-char-minar-during-the-blue-hour.jpg?s=2048x2048&w=is&k=20&c=u_TsqZJW9kASPfJ8AO0RB_PuZwYxBrQATw3e1fk-hQE=",
    description: "This is about hyderabad",
    rating: 4.4,
  },
  {
    name: "Mumbai",
    amount: 6000,
    img: "https://i.ytimg.com/vi/tWD_-Rzrn8o/maxresdefault.jpg",
    description: "This is about Mumbai",
    rating: 4.0,
  },
  {
    name: "Delhi",
    amount: 9000,
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg",
    description: "This is about Delhi",
    rating: 3.4,
  },
];
console.log(destinations);

function App() {
  const filteredDestinations = destinations.filter((item) => item.rating > 2.1);

  return (
    <div className="container">
      {filteredDestinations.map((item, index) => (
        <Place
          key={index}
          name={item.name}
          img={item.img}
          description={item.description}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default App;
