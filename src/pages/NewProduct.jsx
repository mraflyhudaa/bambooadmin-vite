const NewProduct = () => {
  return (
    <div className='flex-[4_4_0%]'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='mt-[10px]'>
        <div className='w-[250px] flex flex-col mb-[10px]'>
          <label className='text-gray-900 font-semibold mb-[10px]'>Image</label>
          <input className='p-[10px]' type='file' id='file' />
        </div>
        <div className='w-[250px] flex flex-col mb-[10px]'>
          <label className='text-gray-900 font-semibold mb-[10px]'>Name</label>
          <input className='p-[10px]' type='text' placeholder='Apple Airpods' />
        </div>
        <div className='w-[250px] flex flex-col mb-[10px]'>
          <label className='text-gray-900 font-semibold mb-[10px]'>Stock</label>
          <input className='p-[10px]' type='text' placeholder='123' />
        </div>
        <div className='w-[250px] flex flex-col mb-[10px]'>
          <label className='text-gray-900 font-semibold mb-[10px]'>
            Active
          </label>
          <select className='p-[10px]' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='mt-[10px] p-[7px_10px] border-none rounded-[10px] bg-blue-900 text-white font-semibold cursor-pointer'>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
