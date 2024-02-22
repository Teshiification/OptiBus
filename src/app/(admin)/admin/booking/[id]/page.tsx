import { BookingForm } from '@/components/ui/Admin/Forms';
import { getBooking } from '@/lib/supabase/bookings';
import { UUID } from 'crypto';

const BookingPage = async (props: any) => {
  const data = await getBooking(props.params.id as UUID);
  console.log(data);
  if (data) return <BookingForm booking={data} />;
};

export default BookingPage;
