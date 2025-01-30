// components/RendezVous.tsx
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

const RendezVous: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    // Simuler une requête à la base de données pour obtenir les créneaux
    const fetchTimeSlots = () => {
      // Remplacez cette partie par une requête réelle à votre API
      const slots: TimeSlot[] = [
        { time: '09:00', isAvailable: true },
        { time: '10:00', isAvailable: false },
        { time: '11:00', isAvailable: true },
        { time: '14:00', isAvailable: true },
        { time: '15:00', isAvailable: false },
        { time: '16:00', isAvailable: true },
      ];
      setTimeSlots(slots);
    };

    fetchTimeSlots();
  }, [date]);

  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '2rem 0',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const calendarStyle = {
    flex: 1,
  };

  const timeSlotStyle = {
    flex: 1,
    marginLeft: '2rem',
  };

  const slotStyle = (isAvailable: boolean) => ({
    padding: '0.5rem',
    margin: '0.5rem 0',
    backgroundColor: isAvailable ? '#e0ffe0' : '#ffe0e0',
    borderRadius: '4px',
  });

  return (
    <section id="rendezvous" style={sectionStyle}>
      <h2 style={{ textAlign: 'center', color: '#262626' }}>
        Disponibilités
      </h2>
      <div style={containerStyle}>
        <div style={calendarStyle}>
          <Calendar onChange={(value) => value instanceof Date && setDate(value)} value={date} />
        </div>
        <div style={timeSlotStyle}>
          <h3>
            Créneaux du {date.toLocaleDateString('fr-FR')}
          </h3>
          {timeSlots.map((slot, idx) => (
            <div key={idx} style={slotStyle(slot.isAvailable)}>
              {slot.time} - {slot.isAvailable ? 'Disponible' : 'Indisponible'}
            </div>
          ))}
          <p>
            Pour réserver un créneau, veuillez nous appeler au{' '}
            <a href="tel:+33123456789">01 23 45 67 89</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RendezVous;