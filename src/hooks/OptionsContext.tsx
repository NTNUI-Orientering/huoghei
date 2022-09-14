import React, { createContext, useState, useEffect, useContext } from 'react';
import { HH } from '../CONSTS';
import useFetchService from '../services/FetchService';
import { Service } from '../types/Service';

interface OptionsI {
  [key: string]: string;
}

interface OptionsContext {
  options: OptionsI | undefined;
  service: Service<Array<any>> | undefined;
}

const OptionsContext = createContext({} as OptionsContext);

const useOptionsContext = () => {
  const context = useContext(OptionsContext);
  if (context === undefined) {
    throw new Error('useUserContextState was used outside of its Provider');
  }
  return context;
};

const OptionsContextProvider = (props: { children: React.ReactNode }) => {
  const [options, setOptions] = useState<OptionsI>();
  const service = useFetchService(HH.getPaameldingOptions);

  useEffect(() => {
    if (service.status === 'fetched') {
      //console.log("Fetching options");
      const opts = service.payLoad.reduce((map: Array<Array<OptionsI>>, obj) => {
        map[obj.option_name] = obj.option_value;
        return map;
      }, {});

      setOptions(opts);
    }
  }, [service.status]);

  return (
    <OptionsContext.Provider value={{ options, service }}>{props.children}</OptionsContext.Provider>
  );
};

export { OptionsContextProvider, useOptionsContext };
