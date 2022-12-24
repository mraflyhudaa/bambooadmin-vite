import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { userRequest } from '../requestMethods';
import Spinner from '../components/Spinner';
import { MailOutline, PermIdentity } from '@mui/icons-material';
import Input from '../components/Input';

const Transaction = () => {
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];

  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getTransaction = async () => {
      setIsFetching(true);
      await userRequest
        .get(`/orders/${orderId}`)
        .then((res) => {
          setData(res.data.data);
          setIsFetching(false);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setIsFetching(false);
        });
    };
    getTransaction();
  }, [orderId]);

  return (
    <div className='flex-[4_4_0%] p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='userTitle'>Order Details</h1>
        <Link to='/newUser'>
          <button className='w-20 border-none p-[5px] bg-teal-600 rounded-[5px] cursor-pointer text-white text-base'>
            Create
          </button>
        </Link>
      </div>

      <div className='flex mt-5'>
        <div className='flex-1 p-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
          <div className='flex items-center'>
            <div className='flex flex-col ml-5'>
              <span className='font-semibold'></span>
            </div>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Account Details
            </span>
            <div className='flex items-center mx-5 text-[#444]'>
              <PermIdentity className='!text-base' />
              <span className='ml-[10px]'></span>
            </div>
            <div className='flex items-center mx-5 text-[#444]'>
              <MailOutline className='!text-base' />
              <span className='ml-[10px]'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
