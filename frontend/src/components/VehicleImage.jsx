import { useState } from "react";
import { imagineVehicul } from "../constants.js";
import styles from "./VehicleImage.module.css";

export default function VehicleImage({ vehicul, mare = false }) {
  const [esuat, setEsuat] = useState(null);
  const imagine = imagineVehicul(vehicul);
  const clasa = mare ? `${styles.wrap} ${styles.mare}` : styles.wrap;

  if (!imagine || esuat === imagine.src) {
    return (
      <div className={`${clasa} ${styles.gol}`} aria-hidden="true">
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
        <span>Fara imagine pentru acest model</span>
      </div>
    );
  }

  return (
    <figure className={clasa}>
      <img
        src={imagine.src}
        alt={vehicul.vehicleName}
        loading="lazy"
        className={styles.img}
        onError={() => setEsuat(imagine.src)}
      />
      {mare && imagine.sursa && (
        <figcaption className={styles.credit}>
          <a href={imagine.sursa} target="_blank" rel="noreferrer">
            Foto: Wikimedia Commons
          </a>
        </figcaption>
      )}
    </figure>
  );
}
