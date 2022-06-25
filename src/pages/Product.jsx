import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import { productData } from '../dummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
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
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='flex-1'>
          <div className='p-5 m-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
            <img
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='w-10 g-10 rounded-[50%] object-cover mr-5'
            />
            <span className='font-semibold'>Apple Airpods</span>
          </div>
          <div className='mt-[10px]'>
            <div className='w-[150px] flex justify-between'>
              <span className='productInfoKey'>id:</span>
              <span className='font-light'>123</span>
            </div>
            <div className='w-[150px] flex justify-between'>
              <span className='productInfoKey'>sales:</span>
              <span className='font-light'>5123</span>
            </div>
            <div className='w-[150px] flex justify-between'>
              <span className='productInfoKey'>active:</span>
              <span className='font-light'>yes</span>
            </div>
            <div className='w-[150px] flex justify-between'>
              <span className='productInfoKey'>in stock:</span>
              <span className='font-light'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 m-5 shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)]'>
        <form className='flex justify-between'>
          <div className='flex flex-col'>
            <label className='mb-[10px] text-gray-900'>Product Name</label>
            <input
              className='mb-[10px] border-none p-[5px] border-b-[1px] border-gray-900'
              type='text'
              placeholder='Apple AirPod'
            />
            <label className='mb-[10px] text-gray-900'>In Stock</label>
            <select className='mb-[10px]' name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label className='mb-[10px] text-gray-900'>Active</label>
            <select className='mb-[10px]' name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex items-center'>
              <img
                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
                className='w-[100px] h-[100px] rounded-[10px] object-cover mr-5'
              />
              <label for='file'>
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
