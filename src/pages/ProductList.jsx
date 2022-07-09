import { DataGrid } from '@mui/x-data-grid';

import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../redux/apiCalls';
import { Box } from '@mui/material';
import { userRequest } from '../requestMethods';

const ProductList = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setIsFetching(true);
  //   getProducts(dispatch).then(setIsFetching(false));
  // }, [dispatch]);

  // const handleDelete = (id) => {
  //   deleteProduct(id, dispatch);
  // };

  useEffect(() => {
    const getUsers = async () => {
      setIsFetching(true);
      await userRequest
        .get('/products/')
        .then((res) => {
          setData(res.data.data);
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

  const handleDelete = async (id) => {
    await userRequest
      .delete(`/products/${id}`)
      .then((res) => {
        toast.success('data deleted!');
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      field: 'title',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <img
              className='w-[32px] h-[32px] rounded-[50%] object-cover mr-[10px]'
              src={params.row.img}
              alt=''
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row._id}>
              <button className='border-none rounded-[10px] p-[5px_10px] bg-green-600 hover:bg-green-500 text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className='fill-white cursor-pointer'
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
          <h1 className='font-semibold text-lg'>Product</h1>
          <Link to='/newproduct'>
            <button className='w-20 border-none p-[5px] bg-green-600 text-white ronuded-[5px] text-base cursor-pointer'>
              Create
            </button>
          </Link>
        </div>
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={data}
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

export default ProductList;
