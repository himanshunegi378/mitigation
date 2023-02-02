import Head from "next/head";
import { useImmer } from "use-immer";
import dummyResponse from "@/util/dummyresponse";
import { memo, useState } from "react";
import { useTableData } from "@/contexts/dataContext";
import { useRouter } from "next/router";

// This component is made to just memoize the Row and improve performance of each row by preventing re-rendering
const Row = memo(function Row({ row, i, setTableData }) {
  return (
    <tr>
      {row.map((cell, j) => (
        <td key={j}>
          <input
            type="text"
            value={cell}
            onChange={(e) => {
              setTableData((draft) => {
                draft.rows[i][j] = e.target.value;
              });
            }}
          />
        </td>
      ))}
    </tr>
  );
});

export default function Home() {
  const router = useRouter();
  const { tableData, setTableData } = useTableData();
  const [excelFile, setExcelFile] = useState(null);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            overflow: "auto",
            maxHeight: "90vh",
          }}
        >
          <table
            style={{
              overflow: "auto",
            }}
          >
            <thead>
              <tr>
                {tableData.headers.map((header, i) => (
                  <th
                    key={i}
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "white",
                      zIndex: 1,
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, i) => (
                <Row key={i} row={row} i={i} setTableData={setTableData} />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => setExcelFile(e.target.files[0])}
            accept={".xlsx, .xls, .csv"}
          />
        </div>
        <button
          onClick={() => {
            router.push("/mitigation");
          }}
        >
          Submit Data
        </button>
      </main>
    </>
  );
}
