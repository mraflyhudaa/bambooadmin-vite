import { PencilIcon } from '@heroicons/react/solid';
import { MailOutline, PermIdentity } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import { userRequest } from '../requestMethods';

const User = () => {
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputs);
  };

  useEffect(() => {
    const getUser = async () => {
      setIsFetching(true);
      await userRequest
        .get(`/users/find/${userId}`)
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
    getUser();
  }, [userId]);

  const handleClick = async () => {
    setIsUpdating(true);
    await userRequest
      .put(`users/${userId}`, inputs)
      .then((res) => {
        console.log(res.data);
        setIsUpdating(false);
        toast.success(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  if (isUpdating) {
    return <Spinner />;
  }

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
      {isFetching ? (
        <div>Fetching Data...</div>
      ) : (
        <div className='flex mt-5'>
          <div className='flex-1 p-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
            <div className='flex items-center'>
              <div className='flex flex-col ml-5'>
                <span className='font-semibold'>{data.username}</span>
              </div>
            </div>
            <div className='mt-5'>
              <span className='text-sm font-semibold text-[rgb(175,170,170)]'>
                Account Details
              </span>
              <div className='flex items-center mx-5 text-[#444]'>
                <PermIdentity className='!text-base' />
                <span className='ml-[10px]'>{data.username}</span>
              </div>
              <div className='flex items-center mx-5 text-[#444]'>
                <MailOutline className='!text-base' />
                <span className='ml-[10px]'>{data.email}</span>
              </div>
            </div>
          </div>
          <div className='flex-[3_3_0%]'>
            <form className='flex justify-evenly mt-5'>
              <div className='userUpdateLeft'>
                <span className='text-2xl font-semibold'>Edit</span>
                <div className='flex flex-col mt-[10px]'>
                  <Input
                    htmlFor='username'
                    label='Username'
                    id='username'
                    name='username'
                    type='text'
                    defaultValue={data.username}
                    onChange={handleChange}
                  />
                </div>

                <div className='flex flex-col mt-[10px]'>
                  <Input
                    htmlFor='email'
                    label='Email'
                    id='email'
                    name='email'
                    type='email'
                    defaultValue={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col mt-[10px]'>
                  <label
                    htmlFor='isAdmin'
                    className='block text-sm font-semibold text-black mt-4'>
                    Is Admin
                  </label>
                  <select
                    className='form-select mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
                    name='isAdmin'
                    id='isAdmin'
                    onChange={handleChange}
                    required={true}
                    defaultValue={data.isAdmin}>
                    <option aria-required value='true'>
                      Yes
                    </option>
                    <option aria-required value='false'>
                      No
                    </option>
                  </select>
                </div>
                <button
                  type='button'
                  onClick={handleClick}
                  disabled={inputs == undefined ? true : false}
                  className=' w-full flex justify-center py-2 px-4  border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-6'>
                  <PencilIcon
                    className='h-5 w-5 text-green-500 group-hover:text-green-400 '
                    aria-hidden='true'
                  />
                  Edit User Data
                </button>
              </div>
              <div className='flex flex-col justify-between'></div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
