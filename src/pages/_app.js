// import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { DataContext } from "@/contexts/dataContext";
import { useImmer } from "use-immer";
import dummyResponse from "@/util/dummyresponse";
import { useEffect } from "react";
import { fetchScreenRiskWeight } from "@/api";
export default function App({ Component, pageProps }) {
  const [tableData, setTableData] = useImmer({
    headers: [],
    rows: [],
  });
  useEffect(() => {
    fetchScreenRiskWeight().then(setTableData);
  }, [setTableData]);
  return (
    <DataContext.Provider value={{ tableData, setTableData }}>
      <Component value={{ tableData, setTableData }} {...pageProps} />
    </DataContext.Provider>
  );
}
