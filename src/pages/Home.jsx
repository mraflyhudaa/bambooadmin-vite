import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import { userData } from '../dummyData';
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';

const Home = () => {
  return (
    <div className='flex-[4_4_0%]'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='flex m-5'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
