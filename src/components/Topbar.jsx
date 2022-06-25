import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='w-full h-12 bg-white sticky top-0 z-[999]'>
      <div className='h-full px-5 flex items-center justify-between'>
        <div className='flex- items-start'>
          <span className='font-bold text-3xl text-blue-900 cursor-pointer'>
            BambooIna
          </span>
        </div>
        <div className='flex items-center'>
          <div className='relative cursor-pointer mr-2 fill-[#555]'>
            <NotificationsNone />
            <span className='w-4 g-4 absolute -top-[5px] right-0 bg-red-700 fill-white flex items-center justify-center text-xs'>
              2
            </span>
          </div>
          <div className='relative cursor-pointer mr-2 fill-[#555]'>
            <Language />
            <span className='w-4 g-4 absolute -top-[5px] right-0 bg-red-700 fill-white flex items-center justify-center text-xs'>
              2
            </span>
          </div>
          <div className='relative cursor-pointer mr-2 fill-[#555]'>
            <Settings />
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='w-10 h-10 rounded-[50%] cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
