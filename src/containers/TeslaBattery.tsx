import { useEffect, useState, useRef } from 'react';
import { dataModels } from '../services/BatteryService';
import TeslaCar from '../components/TeslaCar';

export type Stat = {
  model: string;
  miles: number;
};

export type Config = {
  speed: number;
  temp: number;
  climate: boolean;
  wheels: number;
};

const TeslaBattery = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [config, setConfig] = useState<Config>({
    speed: 45,
    temp: 20,
    climate: true,
    wheels: 19,
  });

  useEffect(() => {
    const calculateStats = (models: string[]) => {
      return models.map((model) => {
        const { speed, temp, climate, wheels } = config;
        const miles =
          // @ts-ignore
          dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temp];
        return { model, miles } as Stat;
      });
    };
    // @ts-ignore
    setStats(calculateStats(['60', '60D', '75', '75D', '90D', 'P100D']));
  }, [config]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-mono font-thin text-2xl sm:text-4xl text-center tracking-widest my-2.5 animate-title text-gray-500">
        Range Per Charge
      </h1>

      <TeslaCar wheels={config.wheels + ''} stats={stats} />
    </div>
  );
};

export default TeslaBattery;
