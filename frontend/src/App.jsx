import { useState } from "react";
import TaskList from "./components/TaskList.jsx";

const VEHICULE_INITIALE = [
  { 
    id: 1, 
    vehicleName: "Dacia Logan (B 101 ABC)", 
    activeFlag: true, 
    fuelType: "petrol", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVRpFpw-0me3Kn-_I97P9m_4KQ_l14jMJBgRqaETe3Q&s=10" 
  },
  { 
    id: 2, 
    vehicleName: "Volvo FH16 (B 202 DEF)", 
    activeFlag: false, 
    fuelType: "diesel", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdH3nQpW7jSAhhmlRU5eIldtTKra7Ji5wT3pbmg8gUnQ&s=10" 
  },
  { 
    id: 3, 
    vehicleName: "Tesla Model 3 (B 303 GHI)", 
    activeFlag: true, 
    fuelType: "electric", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDU3A38hzW7xMrIHwR5pcg7e3R-JGT6TKMq3BF1UTuaw&s=10" 
  }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [vehicule, setVehicule] = useState(VEHICULE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setVehicule((prev) =>
      prev.map((v) => (v.id === id ? { ...v, activeFlag: !v.activeFlag } : v))
    );
  }

  function handleDelete(id) {
    setVehicule((prev) => prev.filter((v) => v.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const activeCount = vehicule.filter((v) => v.activeFlag).length;

  return (
    <div className="app-container">
      <header className="app-header animate-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        {/* Logo vectorial în cerc roșu */}
        <div className="logo-badge-wrapper">
          <div className="brand-logo-box">
            <svg className="svg-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <span className="brand-name">AutoParc SaaS</span>
        </div>

        <div className="header-text-group">
          <h1>Sistem Inteligent de Flotă Auto</h1>
          <p className="hero-desc">Monitorizează, gestionează și controlează vehiculele tale în timp real.</p>
        </div>

        <div className="stats-pill">
          <span className="badge-dot"></span>
          {vehicule.length} vehicule înregistrate ({activeCount} active)
        </div>
      </header>

      <main className="container">
        <section className="panel animate-panel">
          <div className="panel-header">
            <h2>Flota de Vehicule</h2>
          </div>
          <TaskList
            vehicule={vehicule}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}