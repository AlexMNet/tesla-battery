import { Stat } from '../containers/TeslaBattery';

type TeslaStatsProps = {
  stats: Stat[];
};

const TeslaStats = ({ stats }: TeslaStatsProps) => {
  return (
    <div className="max-w-screen-md animate-teslaStats flex gap-2 bg-gray-800 p-2 rounded-lg divide-x-2 divide-slate-700">
      {stats.map((stat) => (
        <div
          key={stat.model}
          className="flex flex-col w-[100px] md:w-[130px] gap-2"
        >
          <div className="flex justify-end">
            <img
              src={`/src/assets/models/${stat.model}.svg`}
              alt="model number"
              className="w-auto h-3"
            />
          </div>
          <div>
            <p className='text-[40px] font-mono pr-[18px] relative text-blue-500 text-right after:content-["MI"] after:text-sm after:absolute after:top-2.5'>
              {stat.miles}{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeslaStats;
