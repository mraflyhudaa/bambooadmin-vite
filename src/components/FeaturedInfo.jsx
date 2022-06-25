import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <span className='text-xl'>Revanue</span>
        <div className='my-[10px] flex items-center'>
          <span className='text-3xl'>$2,415</span>
          <span className='flex items-center ml-5'>
            -11.4 <ArrowDownward className='text-sm text-red-700' />
          </span>
        </div>
        <span className='text-base text-gray-900'>Compared to last month</span>
      </div>
      <div className='flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <span className='text-xl'>Sales</span>
        <div className='my-[10px] flex items-center'>
          <span className='text-3xl'>$4,415</span>
          <span className='flex items-center ml-5'>
            -1.4 <ArrowDownward className='text-sm text-red-700' />
          </span>
        </div>
        <span className='text-base text-gray-900'>Compared to last month</span>
      </div>
      <div className='flex-1 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <span className='text-xl'>Cost</span>
        <div className='my-[10px] flex items-center'>
          <span className='text-3xl'>$2,225</span>
          <span className='flex items-center ml-5'>
            +2.4 <ArrowUpward className='text-sm' />
          </span>
        </div>
        <span className='text-base text-gray-900'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
