import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import MenuDropdown from './DropdownMenu';

const Topbar = () => {
  return (
    <div className='w-full h-12 bg-white sticky top-0 z-[999] border-b-[1px]'>
      <div className='h-full px-5 flex items-center justify-between'>
        <div className='flex- items-start'>
          <span className='font-bold text-3xl text-green-600 cursor-pointer'>
            Dekorindo
          </span>
        </div>
        <div className='flex items-center'>
          <div className='relative cursor-pointer mr-2 fill-[#555]'>
            <MenuDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
