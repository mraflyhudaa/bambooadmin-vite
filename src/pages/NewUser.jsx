const NewUser = () => {
  return (
    <div className='flex-[4_4_0%]'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='flex flex-wrap'>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Username
          </label>
          <input
            className='h-5 p-[10px] border-[1px] border-solid border-gray-900 rounded-md'
            type='text'
            placeholder='john'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Full Name
          </label>
          <input
            className='h-5 p-[10px] border-[1px] border-solid border-gray-900 rounded-md'
            type='text'
            placeholder='John Smith'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Email
          </label>
          <input
            className='h-5 p-[10px] border-[1px] border-solid border-gray-900 rounded-md'
            type='email'
            placeholder='john@gmail.com'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Password
          </label>
          <input
            className='h-5 p-[10px] border-[1px] border-solid border-gray-900 rounded-md'
            type='password'
            placeholder='password'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Phone
          </label>
          <input
            className='h-5 p-[10px] border-[1px] border-solid border-gray-900 rounded-md'
            type='text'
            placeholder='+1 123 456 78'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Address
          </label>
          <input
            className='h-5 p-[10px] border-[1px] border-solid border-gray-900 rounded-md'
            type='text'
            placeholder='New York | USA'
          />
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Gender
          </label>
          <div className='newUserGender'>
            <input
              className='mt-[15px]'
              type='radio'
              name='gender'
              id='male'
              value='male'
            />
            <label className='m-[10px] text-lg text-[#555]' for='male'>
              Male
            </label>
            <input
              className='mt-[15px]'
              type='radio'
              name='gender'
              id='female'
              value='female'
            />
            <label className='m-[10px] text-lg text-[#555]' for='female'>
              Female
            </label>
            <input
              className='mt-[15px]'
              type='radio'
              name='gender'
              id='other'
              value='other'
            />
            <label className='m-[10px] text-lg text-[#555]' for='other'>
              Other
            </label>
          </div>
        </div>
        <div className='w-[400px] flex flex-col mt-[10px] mr-5'>
          <label className='mb-[10px] text-sm font-semibold text-[rgb(151, 150, 150)]'>
            Active
          </label>
          <select className='h-10 rounded-md' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='w-[200px] border-none bg-blue-900 text-white p-[7px_10px] font-semibold rounded-[10px] mt-8 cursor-pointer'>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
