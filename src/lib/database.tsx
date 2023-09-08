import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export interface User {
  id?: string; // User ID
  email?: string; // User's email address
  phone?: string; // User's phone number (optional)
  app_metadata?: {
    provider: string; // Authentication provider (e.g., "google" or "github")
    [key: string]: any; // Any additional custom metadata
  };
  user_metadata?: {
    [key: string]: any; // User-specific metadata
  };
  created_at?: string; // Timestamp for user creation
  updated_at?: string; // Timestamp for user profile updates
}

export interface Driver {
  name: string;
  lastname: string;
  license_expiring: Date;
}

export interface Ticket {
  id: string;
  owner: User;
  departure: string;
  departure_date: Date;
  seat_number: number;
  destination: string;
  img: string;
}

export interface Passanger {
  name: string;
  lastname: string;
  ticket: Ticket;
}

export interface Bus {
  name: string;
  licenseplate: string;
  horsepower: number;
  fuel_consumption_per_hour: number;
  gastank_capacity: number;
  passanger_capacity: number;
  storage_capacity: number;
}

export interface Route {
  start: GeolocationCoordinates;
  destination: GeolocationCoordinates;
  stops?: GeolocationCoordinates[];
}

export interface Travel {
  bus: Bus;
  driver: Driver;
  passangers: Passanger[];
  route: Route;
}

const supabase = createServerComponentClient({ cookies });
export const GetUser = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user || null;
};
