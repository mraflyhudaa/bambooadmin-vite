import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { format } from 'timeago.js';

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      await userRequest
        .get('orders')
        .then((res) => setOrders(res.data))
        .catch((err) => console.log(err));
    };
    getOrders();
  }, []);

  const Button = ({ status, type }) => {
    if (type === 'approved') {
      status = 'bg-[#e5faf2] text-[#3bb077]';
    } else if (type === 'declined') {
      status = 'bg-[#fff0f1] text-#d95087';
    } else {
      status = 'bg-[#ebf1fe] text-[#2a7ade]';
    }
    return (
      <button className={'p-[5px_7px] border-none rounded-[10px] ' + status}>
        {type}
      </button>
    );
  };
  return (
    <div className='flex-[2_2_0%] shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] p-5'>
      <h3 className='text-xl font-semibold'>Latest transactions</h3>

      <table className='w-full border-spacing-5'>
        <thead>
          <tr className='widgetLgTr'>
            <th className='text-left'>Customer</th>
            <th className='text-left'>Date</th>
            <th className='text-left'>Amount</th>
            <th className='text-left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(-7).map((order) => (
            <tr className='widgetLgTr' key={order._id}>
              <td className='flex items-center font-semibold'>
                <span className='widgetLgName'>{order.userId}</span>
              </td>
              <td className='font-light'>{format(order.createdAt)}</td>
              <td className='font-light'>Rp.{order.amount}</td>
              <td className='widgetLgStatus'>
                <Button type='approved' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
