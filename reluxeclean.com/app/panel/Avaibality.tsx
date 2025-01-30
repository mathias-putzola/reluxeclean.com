// components/Availbality.tsx

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { format, addDays, startOfDay, getDay } from "date-fns";

interface Availability {
  id?: number;
  date: string;
  timeSlot: number;
  available: boolean;
}

const AvailabilityForm = () => {
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  const fetchAvailabilities = async () => {
    try {
      const response = await axios.get("/api/availabilities");
      setAvailabilities(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des disponibilités:", error);
      alert("Erreur lors de la récupération des disponibilités.");
    } finally {
      setLoading(false);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour < 20; hour++) {
      slots.push(hour);
    }
    return slots;
  };

  const generateDates = () => {
    const dates = [];
    const today = startOfDay(new Date());
    for (let i = 0; i < 14; i++) {
      const date = addDays(today, i);
      // S'assurer que ce soit du lundi au dimanche
      if (getDay(date) === 0) continue; // Ignorer dimanche si nécessaire
      dates.push(date);
    }
    return dates;
  };

  const handleAvailabilityChange = (date: string, timeSlot: number) => {
    setAvailabilities((prev) => {
      const index = prev.findIndex(
        (a) => a.date === date && a.timeSlot === timeSlot
      );
      if (index > -1) {
        const updated = [...prev];
        updated[index].available = !updated[index].available;
        return updated;
      } else {
        // Si la disponibilité n'existe pas, l'ajouter avec la valeur opposée
        return [
          ...prev,
          { date, timeSlot, available: false },
        ];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/availabilities", { availabilities });
      alert("Disponibilités mises à jour avec succès !");
      fetchAvailabilities();
    } catch (error) {
      console.error("Erreur lors de la mise à jour des disponibilités:", error);
      alert("Erreur lors de la mise à jour des disponibilités.");
    }
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  if (loading) return <div>Chargement des disponibilités...</div>;

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Heure</th>
            {dates.map((date) => (
              <th key={date.toISOString()}>
                {format(date, "dd/MM")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((hour) => (
            <tr key={hour}>
              <td>{`${hour}h - ${hour + 1}h`}</td>
              {dates.map((date) => {
                const dateString = format(date, "yyyy-MM-dd");
                const availability = availabilities.find(
                  (a) => a.date === dateString && a.timeSlot === hour
                );
                const isAvailable = availability
                  ? availability.available
                  : true;
                return (
                  <td key={dateString} style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      checked={isAvailable}
                      onChange={() =>
                        handleAvailabilityChange(dateString, hour)
                      }
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Enregistrer les Disponibilités
      </button>
    </div>
  );
};

export default AvailabilityForm;