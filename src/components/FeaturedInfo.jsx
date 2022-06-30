import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income');
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };
    getIncome();
  }, []);

  console.log(income);
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-[100vh] w-[100vh]'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='w-full flex justify-between'>
      <div className='flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <span className='text-xl'>Revanue</span>
        <div className='my-[10px] flex items-center'>
          <span className='text-3xl'>Rp. {income[1]?.total} </span>
          <span className='flex items-center ml-5'>
            %{Math.floor(perc)}
            {perc < 0 ? (
              <ArrowDownward className='text-sm text-red-700' />
            ) : (
              <ArrowUpward className='text-sm' />
            )}
          </span>
        </div>
        <span className='text-base text-gray-900'>Compared to last month</span>
      </div>
      <div className='flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <span className='text-xl'>Customer</span>
        <div className='my-[10px] flex items-center'>
          <span className='text-3xl'>12</span>
          <span className='flex items-center ml-5'></span>
        </div>
        <span className='text-base text-gray-900'>Compared to last month</span>
      </div>
      <div className='flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <span className='text-xl'>Transaction</span>
        <div className='my-[10px] flex items-center'>
          <span className='text-3xl'>10</span>
          {/* <span className='flex items-center ml-5'>
            +2.4 <ArrowUpward className='text-sm' />
          </span> */}
        </div>
        <span className='text-base text-gray-900'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
