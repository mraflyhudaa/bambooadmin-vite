const Input = (props) => {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className='block text-sm font-semibold text-black mt-4'>
        {props.label}
      </label>
      <input
        {...props}
        required
        className='form-input mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
      />
    </div>
  );
};

export default Input;
