import { CheckIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import { userRequest } from '../requestMethods';
import { toast, ToastContainer } from 'react-toastify';

const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    // console.log(inputs);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await userRequest
      .post('auth/adduser', inputs)
      .then((res) => {
        console.log(res.data);
        // toast.success(res.data.message, {
        //   position: 'top-right',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   onClose: history.push('/users'),
        // });
        history.push('/users');
      })
      .catch((err) => {
        // toast.error('error', {
        //   position: 'top-right',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        console.log(err);
      });
  };

  return (
    <div className='flex-[4_4_0%] my-4 mr-4'>
      <h1 className='font-semibold text-lg'>New User</h1>
      <form className='flex flex-wrap'>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <Input
            htmlFor='username'
            label='Username'
            id='username'
            name='username'
            type='text'
            autoComplete='username'
            onChange={handleChange}
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <Input
            htmlFor='email'
            label='Email'
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            onChange={handleChange}
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <Input
            htmlFor='password'
            label='Password'
            id='password'
            name='password'
            type='password'
            onChange={handleChange}
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
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
            defaultValue=''>
            <option value='' disabled>
              Set priviledge
            </option>
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
          disabled={inputs.isAdmin == undefined ? true : false}
          className=' w-[76%] flex justify-center py-2 px-4  border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-6'>
          <CheckIcon
            className='h-5 w-5 text-green-500 group-hover:text-green-400 '
            aria-hidden='true'
          />
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewUser;
