// import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { DataContext } from "@/contexts/dataContext";
import { useImmer } from "use-immer";
import dummyResponse from "@/util/dummyresponse";

export default function App({ Component, pageProps }) {
  const [tableData, setTableData] = useImmer(dummyResponse);
  return (
    <DataContext.Provider value={{ tableData, setTableData }}>
      <Component value={{ tableData, setTableData }} {...pageProps} />
    </DataContext.Provider>
  );
}
