import { Visibility } from '@mui/icons-material';

const WidgetSm = () => {
  return (
    <div className='flex-1 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] p-5 mr-5'>
      <span className='text-[22px] font-semibold'>New Join Members</span>
      <ul className='m-0 p-0 list-none'>
        <li className='flex items-center justify-between my-5'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='w-10 h-10 rounded-[50%] object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold'>Anna Keller</span>
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center border-none rounded-xl p-[7px_10px] bg-[#eeeef7] text-white cursor-pointer'>
            <Visibility className='!text-base mr-[5px]' />
            Display
          </button>
        </li>
        <li className='flex items-center justify-between my-5'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='w-10 h-10 rounded-[50%] object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold'>Anna Keller</span>
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center border-none rounded-xl p-[7px_10px] bg-[#eeeef7] text-white cursor-pointer'>
            <Visibility className='!text-base mr-[5px]' />
            Display
          </button>
        </li>
        <li className='flex items-center justify-between my-5'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='w-10 h-10 rounded-[50%] object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold'>Anna Keller</span>
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center border-none rounded-xl p-[7px_10px] bg-[#eeeef7] text-white cursor-pointer'>
            <Visibility className='!text-base mr-[5px]' />
            Display
          </button>
        </li>
        <li className='flex items-center justify-between my-5'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='w-10 h-10 rounded-[50%] object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold'>Anna Keller</span>
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center border-none rounded-xl p-[7px_10px] bg-[#eeeef7] text-white cursor-pointer'>
            <Visibility className='!text-base mr-[5px]' />
            Display
          </button>
        </li>
        <li className='flex items-center justify-between my-5'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='w-10 h-10 rounded-[50%] object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold'>Anna Keller</span>
            <span className='font-light'>Software Engineer</span>
          </div>
          <button className='flex items-center border-none rounded-xl p-[7px_10px] bg-[#eeeef7] text-white cursor-pointer'>
            <Visibility className='!text-base mr-[5px]' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
