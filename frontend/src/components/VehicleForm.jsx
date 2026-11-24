import { useState } from "react";
import { AN_MIN, COMBUSTIBILI, NUME_MAX } from "../constants.js";
import styles from "./VehicleForm.module.css";

export default function VehicleForm({ onAdd }) {
  const [vehicleName, setVehicleName] = useState("");
  const [fuelType, setFuelType] = useState("petrol");
  const [an, setAn] = useState("");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  const anCurent = new Date().getFullYear();

  function valideaza() {
    const nume = vehicleName.trim();
    if (nume === "") return "Denumirea vehiculului este obligatorie.";
    if (nume.length > NUME_MAX) return `Denumirea are maximum ${NUME_MAX} de caractere.`;
    const anNumar = Number(an);
    if (an === "" || !Number.isInteger(anNumar) || anNumar < AN_MIN || anNumar > anCurent) {
      return `Anul de fabricatie trebuie sa fie intre ${AN_MIN} si ${anCurent}.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }
    setEroare("");
    setTrimite(true);
    try {
      await onAdd({
        vehicleName: vehicleName.trim(),
        fuelType,
        an: Number(an),
        activeFlag: true,
      });
      setVehicleName("");
      setFuelType("petrol");
      setAn("");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Denumire si numar
        <input
          type="text"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
          placeholder="Ex: Dacia Logan (B 101 ABC)"
          maxLength={NUME_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>
      <label>
        Combustibil
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          data-testid="form-fuelType"
        >
          {COMBUSTIBILI.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        An fabricatie
        <input
          type="number"
          value={an}
          onChange={(e) => setAn(e.target.value)}
          placeholder={`Ex: ${anCurent - 3}`}
          min={AN_MIN}
          max={anCurent}
          aria-invalid={Boolean(eroare)}
          data-testid="form-an"
        />
      </label>
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salveaza..." : "Adauga vehiculul"}
      </button>
    </form>
  );
}
