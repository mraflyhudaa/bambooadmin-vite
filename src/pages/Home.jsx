import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import { userData } from '../dummyData';
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../requestMethods';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      await userRequest
        .get('/users/stats')
        .then((res) => {
          res.data.map((item) => {
            setUserStats((prev) => [
              ...prev,
              {
                name: MONTHS[item._id - 1],
                'Active User': item.total,
              },
            ]);
          });
        })
        .catch((err) => console.log(err));
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  return (
    <div className='flex-[4_4_0%]'>
      <FeaturedInfo />
      <Chart
        data={userStats}
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
