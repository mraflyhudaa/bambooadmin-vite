import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { DeleteOutline } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { Box } from '@mui/material';

const TransactionList = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsFetching(true);
      await userRequest
        .get('/orders/')
        .then((res) => {
          setData(res.data);
          setIsFetching(false);
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setIsFetching(false);
        });
    };
    getUsers();
  }, []);

  const handleClick = () => {};

  const handleDelete = async (id) => {
    await userRequest
      .delete(`/users/${id}`)
      .then((res) => {
        toast.success('data deleted!');
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'userId',
      headerName: 'Customer ID',
      width: 200,
    },
    { field: 'amount', headerName: 'Amount', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row._id}>
              <button className='border-none rounded-md px-2 py-4 bg-green-600 text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            {/* <DeleteOutline
              className='fill-red-600'
              onClick={() => handleDelete(params.row._id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className='flex-[4_4_0%] my-2 mr-6'>
        {/* <div className='flex items-center justify-between my-4'>
          <h1 className='font-semibold text-lg'>Product</h1>
          <Link to='/newuser'>
            <button className='w-20 border-none p-[5px] bg-green-600 text-white ronuded-[5px] text-base cursor-pointer'>
              Create
            </button>
          </Link>
        </div> */}
        <Box sx={{ height: 500, width: '100%' }}>
          {isFetching ? (
            'Loading Data...'
          ) : (
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              getRowId={(row) => row._id}
              pageSize={8}
              checkboxSelection
              rowsPerPageOptions={[8]}
            />
          )}
        </Box>
      </div>
    </>
  );
};

export default TransactionList;
