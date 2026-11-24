import VehicleCard from "./VehicleCard.jsx";

export default function TaskList({ vehicule, onToggle, onDelete }) {
  if (!vehicule || vehicule.length === 0) {
    return <p className="empty-message">Nu există vehicule în parc.</p>;
  }

  return (
    <ul className="vehicle-grid">
      {vehicule.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}