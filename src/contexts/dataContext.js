import { fetchScreenRiskWeight } from "@/api";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";

const { createContext, useContext } = require("react");

export const DataContext = createContext({
  tableData: {},
  setTableData: () => {},
});

export const useTableData = () => {
  const { tableData, setTableData } = useContext(DataContext);

  return { tableData, setTableData };
};

export const DataProvider = ({ children }) => {
  const [tableData, setTableData] = useImmer({
    headers: [],
    rows: [],
  });

  useQuery(["screenRiskWeight"], fetchScreenRiskWeight, {
    onSuccess: (data) => {
      setTableData(data);
    },
    refetchOnWindowFocus: false,
  });
  return (
    <DataContext.Provider value={{ tableData, setTableData }}>
      {children}
    </DataContext.Provider>
  );
};
