const { createContext, useContext } = require("react");

export const DataContext = createContext({
  tableData: {},
  setTableData: () => {},
});

export const useTableData = () => {
  const { tableData, setTableData } = useContext(DataContext);

  return { tableData, setTableData };
};
