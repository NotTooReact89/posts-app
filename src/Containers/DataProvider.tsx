import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { getDetailsPosts } from "../ApiCalls";
import { getPostsFetched } from "../Redux/Actions/PostAction";

type DataProviderProps = Record<string, unknown>;

export const DataContext = createContext<(() => void) | undefined>(undefined);
export function useDataContext() {
  const reader = useContext(DataContext);
  if (!reader) {
    throw new Error("DataContext.Provider not present");
  }
  return reader();
}

export function DataProvider({
  children,
}: PropsWithChildren<DataProviderProps>) {
  const [dataLoaded, setDataLoaded] = useState(false);

  const dispatch = useDispatch();

  const loadedBefore = useRef(false);
  const promise = useMemo(async () => {
    if (loadedBefore.current) {
      console.warn("State set up happening multiple times");
    }
    loadedBefore.current = true;
    const state = await getDetailsPosts();
    dispatch(getPostsFetched(state));

    setDataLoaded(true);
  }, [setDataLoaded, dispatch]);

  const [error, setError] = useState(undefined);
  useEffect(() => {
    let mounted = true;
    promise.catch((error) => {
      if (!mounted) {
        return;
      }
      setError(error);
    });
    return () => {
      mounted = false;
    };
  }, [promise]);

  const reader = useCallback(() => {
    if (!dataLoaded) {
      throw promise;
    }
  }, [dataLoaded, promise]);

  if (error) {
    // Will show an alert dialog
    throw error;
  }

  return <DataContext.Provider value={reader}>{children}</DataContext.Provider>;
}
