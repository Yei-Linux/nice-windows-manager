import { useManageColumns } from "../../hooks/useManageColumns";

type TScreenWindowsAddColumns = { screenNumber: number; columns: number };

export const ScreenWindowsAddColumns = ({
  screenNumber,
  columns,
}: TScreenWindowsAddColumns) => {
  const { changeColumns } = useManageColumns({ screenNumber });

  return (
    <div className="flex gap-3">
      <button
        className="bg-sky-500 rounded-full w-[20px] h-[20px] p-0 cursor-pointer"
        onClick={() => changeColumns("remove")}
      >
        -
      </button>
      <span>Columns: {columns}</span>
      <button
        className="bg-sky-500 rounded-full w-[20px] h-[20px] p-0 cursor-pointer"
        onClick={() => changeColumns("add")}
      >
        +
      </button>
    </div>
  );
};
