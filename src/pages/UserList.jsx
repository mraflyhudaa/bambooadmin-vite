import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { DeleteOutline } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { userRows } from '../dummyData';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUsers, getUsers } from '../redux/apiCalls';
import { reset } from '../redux/allUserRedux';
import Spinner from '../components/Spinner';

const UserList = () => {
  const [data, setData] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const { allUsers, isSuccess, isFetching, error, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (error) {
      toast.error(message);
    }

    if (isSuccess) {
      history.push('/users');
    }

    dispatch(reset());
  }, [error, message, history, dispatch]);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirmBox = window.confirm(
      'Do you really want to delete this User?'
    );
    if (confirmBox == true) {
      deleteUsers(id, dispatch);
      if (isSuccess) {
        toast.success(message);
      }
    }
  };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     setIsFetching(true);
  //     await userRequest
  //       .get('/users/')
  //       .then((res) => {
  //         setData(res.data.data);
  //         setIsFetching(false);
  //         // console.log(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setIsFetching(false);
  //       });
  //   };
  //   getUsers();
  // }, []);

  // const handleDelete = async (id) => {
  //   const confirmBox = window.confirm(
  //     'Do you really want to delete this User?'
  //   );
  //   if (confirmBox == true) {
  //     setIsFetching(true);
  //     await userRequest
  //       .delete(`/users/${id}`)
  //       .then((res) => {
  //         toast.success(res.data.message);

  //         setIsFetching(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setIsFetching(false);
  //       });
  //   }
  // };

  if (isFetching) {
    return <Spinner />;
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Is Admin',
      width: 100,
      renderCell: (params) => {
        if (params.row.isAdmin) {
          return 'Yes';
        } else {
          return 'No';
        }
      },
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row._id}>
              <button className='border-none rounded-[10px] p-[5px_10px] bg-green-600 hover:bg-green-500 text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className='fill-red-600 cursor-pointer'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className='flex-[4_4_0%] my-2 mr-6'>
        <div className='flex items-center justify-between my-4'>
          <h1 className='font-semibold text-lg'>Users</h1>
          <Link to='/newuser'>
            <button className='w-20 border-none p-[5px] bg-green-600 rounded-[5px] cursor-pointer text-white text-base'>
              Create
            </button>
          </Link>
        </div>
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={allUsers}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
            rowsPerPageOptions={[8]}
          />
        </Box>
      </div>
    </>
  );
};

export default UserList;
