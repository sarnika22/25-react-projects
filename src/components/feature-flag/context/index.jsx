import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlag, setEnabledFlag] = useState(null);

  async function fetchFeatureFlag() {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      setEnabledFlag(response);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }
  useEffect(() => {
    fetchFeatureFlag();
  });

  return (  
    <FeatureFlagContext.Provider value={{loading, enabledFlag}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
