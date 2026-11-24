import VehicleCard from "./VehicleCard.jsx";
import styles from "./VehicleList.module.css";

export default function VehicleList({ vehicule, onToggle, onDelete }) {
  if (vehicule.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu exista vehicule in parc.
      </p>
    );
  }

  return (
    <ul className={styles.grid}>
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
