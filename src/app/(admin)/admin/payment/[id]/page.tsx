import { PaymentForm } from '@/components/ui/Admin';
import { getPayment } from '@/lib';
import { UUID } from 'crypto';

const PaymentPage = async (props: any) => {
  const data = await getPayment(props.params.id as UUID);
  console.log(data);
  if (data) return <PaymentForm payment={data} />;
};

export default PaymentPage;
