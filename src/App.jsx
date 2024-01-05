import Map from "./modules/Map";

const markers = [
  {
    lat: 40.748817,
    lng: -73.985428,
    title: "Empire State Building",
    description: '<p>A 102-story Art Deco skyscraper in Midtown Manhattan.</p>'
  },
  {
    lat: 40.689247,
    lng: -74.044502,
    title: "Statue of Liberty",
    description: '<p>A colossal neoclassical sculpture on Liberty Island.</p>'
  },
  {
    lat: 40.758896,
    lng: -73.985130,
    title: "Times Square",
    description: '<p>A major commercial and entertainment center in Midtown Manhattan.</p>'
  },
  {
    lat: 40.730610,
    lng: -73.935242,
    title: "Central Park",
    description: '<p>An urban park in Manhattan, New York City.</p>'
  },
  {
    lat: 40.706192,
    lng: -74.009160,
    title: "Wall Street",
    description: '<p>The financial district of New York City.</p>'
  },
  {
    lat: 40.750504,
    lng: -73.993439,
    title: "Penn Station",
    description: '<p>The main intercity railroad station in New York City.</p>'
  },
  {
    lat: 40.712743,
    lng: -74.013379,
    title: "One World Trade Center",
    description: '<p>The main building of the rebuilt World Trade Center complex.</p>'
  },
  {
    lat: 40.741895,
    lng: -73.989308,
    title: "Madison Square Garden",
    description: '<p>A multi-purpose indoor arena in Midtown Manhattan.</p>'
  },
  {
    lat: 40.782865,
    lng: -73.965355,
    title: "The Metropolitan Museum of Art",
    description: '<p>The largest art museum in the United States.</p>'
  },
  {
    lat: 40.7580,
    lng: -73.9855,
    title: "Rockefeller Center",
    description: '<p>A large complex consisting of 19 commercial buildings.</p>'
  }
]; 

export default function App() {
  return (
    <>
      <Map center={[40.7128, -74.0060]} markers={markers} />
    </>
  )
}


