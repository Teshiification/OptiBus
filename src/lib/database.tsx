import {
  User,
  createServerComponentClient
} from '@supabase/auth-helpers-nextjs';
import { UUID } from 'crypto';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export interface Driver {
  driver_id?: UUID;
  first_name?: string;
  last_name?: string;
  license_number?: number;
  license_date?: Date;
  tel_number?: string;
  status?: boolean;
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
  bus_id?: UUID;
  bus_number?: number;
  capacity?: number;
  licenseplate?: string;
  model?: string;
  year?: number;
  tuev?: Date;
  status?: boolean;
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

export const supabase = createServerComponentClient({ cookies });

export const GetUser = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return (user as User) || null;
};
