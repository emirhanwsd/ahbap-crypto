const TableRow = (
  { image, a, b, c, d } // TODO: Name
) => (
  <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-y-4 justify-between border-b">
    <div className="flex items-center gap-x-2.5">
      <img className="h-8 w-8" src={image} alt="" />

      <div className="flex flex-col">
        <span>{a}</span>
        <span>{b}</span>
      </div>
    </div>

    <div className="text-sm sm:text-base flex flex-row sm:flex-col justify-between sm:justify-start">
      <span>{c}</span>
      <span>{d}</span>
    </div>
  </div>
);

export default TableRow;
