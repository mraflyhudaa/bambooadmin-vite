import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='flex-[4_4_0%] p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='w-20 border-none p-[5px] bg-teal-600 rounded-[5px] cursor-pointer text-white text-base'>
            Create
          </button>
        </Link>
      </div>
      <div className='flex mt-5'>
        <div className='flex-1 p-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
          <div className='flex items-center'>
            <img
              src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='w-10 h-10 rounded-[50%] object-cover'
            />
            <div className='flex flex-col ml-5'>
              <span className='font-semibold'>Anna Becker</span>
              <span className='font-light'>Software Engineer</span>
            </div>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Account Details
            </span>
            <div className='flex items-center mx-5 text-[#444]'>
              <PermIdentity className='!text-base' />
              <span className='ml-[10px]'>annabeck99</span>
            </div>
            <div className='flex items-center mx-5 text-[#444]'>
              <CalendarToday className='!text-base' />
              <span className='ml-[10px]'>10.12.1999</span>
            </div>
            <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
              Contact Details
            </span>
            <div className='flex items-center mx-5 text-[#444]'>
              <PhoneAndroid className='!text-base' />
              <span className='ml-[10px]'>+1 123 456 67</span>
            </div>
            <div className='flex items-center mx-5 text-[#444]'>
              <MailOutline className='!text-base' />
              <span className='ml-[10px]'>annabeck99@gmail.com</span>
            </div>
            <div className='flex items-center mx-5 text-[#444]'>
              <LocationSearching className='!text-base' />
              <span className='ml-[10px]'>New York | USA</span>
            </div>
          </div>
        </div>
        <div className='flex-[2_2_0%]'>
          <span className='text-2xl font-semibold'>Edit</span>
          <form className='flex justify-between mt-5'>
            <div className='userUpdateLeft'>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Username</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='border-none w-[250] h-[30px] border-b-[1px] border-gray-600'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Becker'
                  className='border-none w-[250] h-[30px] border-b-[1px] border-gray-600'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Email</label>
                <input
                  type='text'
                  placeholder='annabeck99@gmail.com'
                  className='border-none w-[250] h-[30px] border-b-[1px] border-gray-600'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Phone</label>
                <input
                  type='text'
                  placeholder='+1 123 456 67'
                  className='border-none w-[250] h-[30px] border-b-[1px] border-gray-600'
                />
              </div>
              <div className='flex flex-col mt-[10px]'>
                <label className='mb-[5px] text-sm'>Address</label>
                <input
                  type='text'
                  placeholder='New York | USA'
                  className='border-none w-[250] h-[30px] border-b-[1px] border-gray-600'
                />
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='flex items-center'>
                <img
                  className='w-[100px] h-[100px] rounded-[10px] object-cover mr-5'
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='cursor-pointer' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='rounded-md border-none p-[5px] cursor-pointer bg-blue-900 text-white font-semibold'>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
