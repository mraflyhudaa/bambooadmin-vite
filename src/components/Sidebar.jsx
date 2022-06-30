import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex-1 h-[calc(100vh-60vh)] bg-[rgb(251, 251, 255)] sticky top-[50px]'>
      <div className='p-5 fill-[#555]'>
        <div className='mb-[10px]'>
          <h3 className='text-xs text-[rgb(187,186,186)]'>Dashboard</h3>
          <ul className='list-none p-1'>
            <Link to='/' className='link'>
              <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
                <LineStyle className='mr-1 text-xl' />
                Home
              </li>
            </Link>
            {/* <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
              <Timeline className='mr-1 text-xl' />
              Analytics
            </li>
            <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
              <TrendingUp className='mr-1 text-xl' />
              Sales
            </li> */}
          </ul>
        </div>
        <div className='mb-[10px]'>
          <h3 className='text-xs text-[rgb(187,186,186)]'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
                <PermIdentity className='mr-1 text-xl' />
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
                <Storefront className='mr-1 text-xl' />
                Products
              </li>
            </Link>
            <Link to='/transactions'>
              <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
                <AttachMoney className='mr-1 text-xl' />
                Transactions
              </li>
            </Link>
            {/* <li className='p-1 cursor-pointer flex items-center rounded-xl active:bg-[rgb(240,240,255)] hover:bg-[rgb(240,240,255)]'>
              <BarChart className='mr-1 text-xl' />
              Reports
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
