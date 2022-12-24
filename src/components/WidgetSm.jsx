import { Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userRequest } from '../requestMethods';

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      await userRequest
        .get('users/?new=true')
        .then((res) => setUsers(res.data.data))
        .catch((err) => console.log(err));
    };
    getUsers();
  }, []);

  return (
    <div className='flex-1 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] p-5 mr-5'>
      <span className='text-[22px] font-semibold'>New Join Members</span>
      <ul className='m-0 p-0 list-none'>
        {users.map((user) => (
          <li key={user._id} className='flex items-center justify-between my-5'>
            <img
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=''
              className='w-10 h-10 rounded-[50%] object-cover'
            />
            <div className='flex flex-col'>
              <span className='font-semibold'>{user.username}</span>
            </div>
            <Link
              to={`user/${user._id}`}
              className='flex items-center border-none rounded-xl p-[7px_10px] bg-[#eeeef7] text-[#555] cursor-pointer'
            >
              <Visibility className='!text-base mr-[5px]' />
              Display
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
