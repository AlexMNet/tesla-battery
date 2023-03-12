import wheel19 from '../assets/wheel-19.png';
import wheel21 from '../assets/wheel-21.png';
import TeslaStats from './TeslaStats';
import { Stat } from '../containers/TeslaBattery';

type TeslaCarProps = {
  wheels: string;
  stats: Stat[];
};

const TeslaCar = ({ wheels, stats }: TeslaCarProps) => {
  return (
    <div className="scale-[.55] md:scale-75 lg:scale-100 transition transform duration-500 ease-in-out relative z-50">
      <div className="w-[1050px] mt-[-100px] sm:mt-0 min-h-[350px] bg-contain bg-tesla-car bg-no-repeat bg-top animate-car relative">
        <div
          className={`${wheels === '19' && 'animate-bounceInTop'} ${
            wheels === '21' && 'animate-bounceInBottom'
          }`}
        >
          <div className="absolute left-[300px] top-[170px]">
            <img
              className="h-20 w-20 animate-tireRotation"
              src={wheels === '19' ? wheel19 : wheel21}
              alt={`tesla wheel`}
            />
          </div>
          <div className="absolute right-[318px] top-[170px]">
            <img
              className="h-20 w-20 animate-tireRotation"
              src={wheels === '19' ? wheel19 : wheel21}
              alt={`tesla wheel`}
            />
          </div>
        </div>
        <div className="-bottom-2.5 absolute left-1/2 transform -translate-x-1/2">
          <TeslaStats stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default TeslaCar;
