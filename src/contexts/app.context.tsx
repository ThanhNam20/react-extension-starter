import { createContext, useState } from 'react';
import { getProfileFromLS } from '../services/utils/auth';

interface AppContextInterface {
  // isAuthenticated: boolean;
  // setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const initialAppContextInterface: AppContextInterface = {
  profile: getProfileFromLS('profile'),
  setProfile: () => null,
};

export const AppContext = createContext<AppContextInterface>(
  initialAppContextInterface
);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<any>(
    initialAppContextInterface.profile
  );
  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
