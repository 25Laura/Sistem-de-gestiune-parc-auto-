export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchVehicule() {
  return request("/vehicule");
}

export function fetchVehicul(id) {
  return request(`/vehicule/${id}`);
}

export function createVehicul(vehicul) {
  return request("/vehicule", { method: "POST", body: JSON.stringify(vehicul) });
}

export function updateVehicul(id, changes) {
  return request(`/vehicule/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteVehicul(id) {
  return request(`/vehicule/${id}`, { method: "DELETE" });
}
