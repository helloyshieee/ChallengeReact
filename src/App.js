import "./styles.css";

// Challenge 5 React
// Aira Ashley Villalobos

const DisplayData = ({ item }) => {
  return (
    <tr>
      <td>{item.service_request}</td>
      <td>{item.neighbourhood}</td>
      <td>{item.sr_date}</td>
    </tr>
  );
};

export default function App({ items }) {
  return (
    <div className="home">
      <h1>Winnipeg 311 Service Request</h1>
      <table className="heading">
        <thead>
          <tr>
            <td>Service Request:</td>
            <td>Neighbourhood:</td>
            <td>Date:</td>
          </tr>
        </thead>
        <tbody>
          {items.map((req, r) => (
            <DisplayData key={r} item={req} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
