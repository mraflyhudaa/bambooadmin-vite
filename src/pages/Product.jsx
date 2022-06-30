import { Link, useHistory, useLocation } from 'react-router-dom';
import Chart from '../components/Chart';
import { Publish } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../requestMethods';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [pStats, setPStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [dimension, setDimension] = useState([]);
  const [price, setPrice] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputs);
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleDimension = (e) => {
    setDimension(e.target.value.split(','));
  };

  const handlePrice = (e) => {
    setPrice(e.target.value.split(','));
  };

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('orders/income?pid=' + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <div className='flex-[4_4_0%] p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
          <button className='w-20 border-none p-[5px] bg-green-600 text-white ronuded-[5px] text-base cursor-pointer'>
            Create
          </button>
        </Link>
      </div>
      <div className='flex'>
        <div className='flex-1'>
          <Chart data={pStats} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='flex-1'>
          <div className='p-5 m-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
            <img
              src={product.img}
              alt=''
              className='w-24 g-10 rounded-[50%] object-cover mr-5'
            />
            <span className='font-semibold'>{product.title}</span>
            <div className=' mt-4 '>
              <span className='font-bold'>ID : </span>
              <span className='font-light'>{product._id}</span>
            </div>
            <span className='productInfoKey'>In Stock : </span>
            <span className='font-light'>{product.inStock.toString()}</span>
          </div>
          {/* <div className='mt-[10px]'>
            <div className='w-[150px] flex justify-between'>
              <span className='font-bold'>ID : </span>
              <span className='font-light'>{product._id}</span>
            </div>
            <div className='w-[150px] flex justify-between'>
              <span className='productInfoKey'>In Stock : </span>
              <span className='font-light'>{product.inStock.toString()}</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className='p-5 m-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <form className=' justify-evenly'>
          <div className='flex flex-col'>
            <Input
              htmlFor='productName'
              label='Product Name'
              id='productName'
              name='title'
              type='text'
              defaultValue={product.title}
              onChange={handleChange}
            />
            <Input
              htmlFor='category'
              label='Category'
              id='category'
              name='category'
              type='text'
              autoComplete='category'
              defaultValue={product.categories}
              onChange={handleCat}
            />
            <Input
              htmlFor='dimension'
              label='Dimension'
              id='dimension'
              name='dimension'
              type='text'
              defaultValue={product.dimension}
              onChange={handleDimension}
            />
            <Input
              htmlFor='price'
              label='Price'
              id='price'
              name='price'
              type='text'
              defaultValue={product.price}
              onChange={handlePrice}
            />

            <label className='block text-sm font-semibold text-black mt-4'>
              In Stock
            </label>
            <select
              className='mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
              name='inStock'
              id='idStock'
              defaultValue={product.inStock}>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
            <label
              htmlFor='desc'
              className='block text-sm font-semibold text-black mt-4'>
              Description
            </label>
            <textarea
              id='desc'
              name='desc'
              onChange={handleChange}
              defaultValue={product.desc}
              className='form-textarea mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex items-center my-6'>
              <img
                src={product.img}
                alt=''
                className='w-[100px] h-[100px] rounded-[10px] object-cover mr-5'
              />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='border-none p-[5px] rounded-[5px] bg-blue-900 text-white font-semibold cursor-pointer'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
