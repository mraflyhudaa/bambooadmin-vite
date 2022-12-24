import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import { login } from '../redux/apiCalls';
import { Redirect, useHistory } from 'react-router-dom';
import { reset } from '../redux/userRedux';
import Spinner from '../components/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser, isSuccess, isFetching, error, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      toast.error(message);
    }

    if (currentUser || isSuccess) {
      history.push('/');
    }

    dispatch(reset());
  }, [currentUser, error, message, history, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    login(dispatch, userData);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, { email, password }).then(() => history.go(0));
  };

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className='min-h-full h-[100vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={onSubmit}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <Input
              htmlFor='email'
              label='Email'
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              onChange={onChange}
            />
            <Input
              htmlFor='password'
              label='Password'
              id='password'
              name='password'
              type='password'
              onChange={onChange}
            />
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-green-500 group-hover:text-green-400'
                  aria-hidden='true'
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
