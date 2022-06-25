const WidgetLg = () => {
  const Button = ({ status, type }) => {
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
        <tr className='widgetLgTr'>
          <th className='text-left'>Customer</th>
          <th className='text-left'>Date</th>
          <th className='text-left'>Amount</th>
          <th className='text-left'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='flex items-center font-semibold'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='w-10 h-10 rounded-[50%] object-cover mr-2'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='font-light'>2 Jun 2021</td>
          <td className='font-light'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' status='bg-[#e5faf2] text-[#3bb077]' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='flex items-center font-semibold'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='w-10 h-10 rounded-[50%] object-cover mr-2'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='font-light'>2 Jun 2021</td>
          <td className='font-light'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' status='bg-[#fff0f1] text-[#d95087]' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='flex items-center font-semibold'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='w-10 h-10 rounded-[50%] object-cover mr-2'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='font-light'>2 Jun 2021</td>
          <td className='font-light'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' status='bg-[#ebf1fe] text-[#2a7ade]' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='flex items-center font-semibold'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='w-10 h-10 rounded-[50%] object-cover mr-2'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='font-light'>2 Jun 2021</td>
          <td className='font-light'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' status='bg-[#e5faf2] text-[#3bb077]' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
