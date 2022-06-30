import { CheckIcon, LockClosedIcon, SaveIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useHistory } from 'react-router-dom';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import Input from '../components/Input';
import app from '../firebaseConfig';
import { addProduct } from '../redux/apiCalls';

const NewProduct = () => {
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

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + inputs.title;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            dimension: dimension,
            price: price,
          };
          addProduct(product, dispatch);
          history.push('/products');
        });
      }
    );
  };

  return (
    <div className='w-[80%] my-4 mr-4'>
      <h1 className='font-semibold text-lg'>New Product</h1>
      <form className='mt-[10px]'>
        <div className=' flex flex-col mb-[10px]'>
          <Input
            htmlFor='title'
            label='Product Name'
            id='title'
            name='title'
            type='text'
            autoComplete='title'
            onChange={handleChange}
          />
        </div>

        <div className=' flex flex-col mb-[10px]'>
          <Input
            htmlFor='category'
            label='Category'
            id='category'
            name='category'
            type='text'
            autoComplete='category'
            onChange={handleCat}
          />
        </div>

        <div className=' flex flex-col mb-[10px]'>
          <Input
            htmlFor='dimension'
            label='Dimension'
            id='dimension'
            name='dimension'
            type='text'
            autoComplete='dimension'
            onChange={handleDimension}
          />
        </div>
        <div className=' flex flex-col mb-[10px]'>
          <Input
            htmlFor='price'
            label='Price'
            id='price'
            name='price'
            type='text'
            autoComplete='price'
            onChange={handlePrice}
          />
        </div>
        <div className=' flex flex-col mb-[10px]'>
          <label
            htmlFor='inStock'
            className='block text-sm font-semibold text-black mt-4'>
            In Stock
          </label>
          <select
            className='form-select mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
            name='inStock'
            id='inStock'
            onChange={handleChange}
            required={true}
            defaultValue=''>
            <option value='' disabled>
              Set products stock
            </option>
            <option aria-required value='true'>
              Yes
            </option>
            <option aria-required value='false'>
              No
            </option>
          </select>
        </div>
        <div className=' flex flex-col mb-[10px]'>
          <label
            htmlFor='desc'
            className='block text-sm font-semibold text-black mt-4'>
            Description
          </label>
          <textarea
            id='desc'
            name='desc'
            onChange={handleChange}
            className='form-textarea mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
          />
        </div>
        <div className=' flex flex-col mb-[10px]'>
          <Input
            htmlFor='img'
            label='Image'
            id='img'
            name='img'
            type='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type='button'
          onClick={handleClick}
          disabled={inputs.inStock == undefined ? true : false}
          className=' w-full flex justify-center py-2 px-4  border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-6'>
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

export default NewProduct;
