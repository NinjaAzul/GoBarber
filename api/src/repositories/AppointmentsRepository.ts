// startOfHour = 00:00:00 | parseISO = String for Object Date

// Imports
import { isEqual } from 'date-fns';

// Models
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppontment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppontment || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
