import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <img
              className='w-8 h-8 rounded-[50%] object-cover mr-[10px]'
              src={params.row.avatar}
              alt=''
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='border-none rounded-[10px] px-[5px] py-[10px] bg-[#3bb077] text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className='fill-red-600'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='flex-[4_4_0%]'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
