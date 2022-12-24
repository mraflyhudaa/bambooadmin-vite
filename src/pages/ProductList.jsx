import { DataGrid } from '@mui/x-data-grid';

import { DeleteOutline } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../redux/apiCalls';
import { Box } from '@mui/material';
import { userRequest } from '../requestMethods';
import Spinner from '../components/Spinner';
import { reset } from '../redux/productRedux';
import { toast } from 'react-toastify';

const ProductList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  const { products, isSuccess, isFetching, error, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      toast.error(message);
    }

    if (products || isSuccess) {
      history.push('/products');
    }

    dispatch(reset());
  }, [products, error, message, history, dispatch]);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirmBox = window.confirm(
      'Do you really want to delete this User?'
    );
    if (confirmBox == true) {
      deleteProduct(id, dispatch);

      if (isSuccess) {
        toast.success(message);
      }
    }
  };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     setIsFetching(true);
  //     await userRequest
  //       .get('products/')
  //       .then((res) => {
  //         setData(res.data.data);
  //         setIsFetching(false);
  //         console.log(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setIsFetching(false);
  //       });
  //   };
  //   getUsers();
  // }, []);

  // const handleDelete = async (id) => {
  //   await userRequest
  //     .delete(`/products/${id}`)
  //     .then((res) => {
  //       toast.success('data deleted!');
  //     })
  //     .catch((err) => console.log(err));
  // };

  if (isFetching) {
    return <Spinner />;
  }

  const columns = [
    {
      field: 'title',
      headerName: 'Product',
      width: 300,
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
    { field: 'inStock', headerName: 'Stock', width: 100 },
    {
      field: 'price',
      headerName: 'Price',
      width: 250,
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
            <button className='w-20 border-none p-[5px] bg-green-600 rounded-[5px] cursor-pointer text-white text-base'>
              Create
            </button>
          </Link>
        </div>
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={products}
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
