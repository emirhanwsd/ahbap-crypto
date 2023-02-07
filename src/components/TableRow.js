import { SYMBOL_NAMES } from "../constants";

const TableRow = (
  { chain, value, symbol, from_address, transaction_hash } // TODO: Name
) => (
  <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-y-4 justify-between border-b">
    <div className="flex items-center gap-x-2.5">
      <img className="h-8 w-8" src={`/${chain}.svg`} alt="" />

      <div className="flex flex-col">
        <span>{SYMBOL_NAMES[symbol]} ({symbol})</span>
        <span className="truncate max-w-[200px]">{from_address}</span>
      </div>
    </div>

    <div className="text-sm sm:text-base flex flex-row sm:flex-col justify-between sm:justify-start">
      <span>
        {value} <b>{symbol}</b>
      </span>
    </div>
  </div>
);

export default TableRow;
