import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlag, setEnabledFlag] = useState(null);

  async function fetchFeatureFlag() {
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledFlag(response);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  useEffect(() => {
    fetchFeatureFlag();
  });

  return (
    <FeatureFlagContext.Provider value={{enabledFlag}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
