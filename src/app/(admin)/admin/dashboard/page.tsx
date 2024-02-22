import { getBookings } from '@/lib/supabase/bookings';
import { getBuses } from '@/lib/supabase/buses';
import { getDrivers } from '@/lib/supabase/drivers';

const DashboardPage = async () => {
  return (
    <div className="flex flex-col w-full h-full p-4 items-center">
      <section
        id="statistics"
        className="p-4 rounded border-2 border-accent flex flex-row gap-4"
      >
        <div id="bookings">{`Bookings: ${((await getBookings()) as [])
          ?.length}`}</div>
        <div id="carport">{`Carport: ${((await getBuses()) as [])
          ?.length}`}</div>
        <div id="drivers">{`Drivers: ${((await getDrivers()) as [])
          ?.length}`}</div>
      </section>
    </div>
  );
};

export default DashboardPage;
