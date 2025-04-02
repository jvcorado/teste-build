import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Estilos (mantidos os mesmos)
const stylesHeaderRow =
  "font-bold text-sm text-center bg-primary-brand-800 border border-white rounded-md text-white uppercase";
const stylesHeaderColumn =
  "font-bold text-xs text-center bg-primary-brand-800 border border-white rounded-md text-white";
const stylesDataTable =
  "font-bold text-xs text-center bg-primary-brand-401 border border-white rounded-md text-primary-brand-900";
const stylesDataTableObj =
  "font-bold text-xs text-center bg-primary-light-green-500 border border-white rounded-md text-primary-brand-900";

// Tipos
type TableHeaderType = { head: string };
type TableSubHeaderType = { subHaed: string };
export type TableDataType = { [key: string]: string | number };

type DynamicTableProps = {
  headers: TableHeaderType[];
  headers2: TableHeaderType[];
  subHeaders: TableSubHeaderType[];
  data: TableDataType[];
};

export function DynamicTable({
  headers,
  headers2,
  subHeaders,
  data,
}: DynamicTableProps) {
  return (
    <Table>
      <TableHeader>
        {/* Primeira linha de cabeçalho (grupos principais) */}
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={`header-${index}`}
              colSpan={3} // Gramatura, RCT, CMT e Tração têm 3 colunas cada
              className={stylesHeaderRow}
            >
              {header.head}
            </TableHead>
          ))}
          {headers2.map((header, index) => (
            <TableHead
              key={`header2-${index}`}
              colSpan={2} // Os demais grupos têm 2 colunas cada
              className={stylesHeaderRow}
            >
              {header.head}
            </TableHead>
          ))}
        </TableRow>

        {/* Segunda linha de cabeçalho (subcabeçalhos) */}
        <TableRow>
          {subHeaders.map((subHeader, index) => (
            <TableHead
              key={`subheader-${index}`}
              className={index === 0 ? stylesHeaderColumn : stylesHeaderRow}
            >
              {subHeader.subHaed}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      {/* Corpo da tabela */}
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={`row-${rowIndex}`}>
            {Object.entries(row).map(([key, value], colIndex) => (
              <TableCell
                key={`cell-${rowIndex}-${colIndex}`}
                className={
                  key.toLowerCase().includes("obj")
                    ? stylesDataTableObj
                    : key.toLowerCase().includes("gramatura") && colIndex === 0
                    ? stylesHeaderColumn
                    : stylesDataTable
                }
              >
                {String(value)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
