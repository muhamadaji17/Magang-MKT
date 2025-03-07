/* eslint-disable react/prop-types */
import { Pagination, Stack } from "@mui/material";
import { SelectOptionOutRegister, TableBody, TableHead } from "../atom";
import { useGlobalHook } from "../../hook";
import { dataSetRows } from "../../pattern";

const Tables = ({
  columns,
  bodies,
  handleSubmitDelete,
  inputDataEdit,
  handleSubmitEdit,
  inputDataDelete,
}) => {
  const { page, setPage, rowsPerPage, setRowsPerPage } = useGlobalHook();
  const currentData = bodies?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="overflow-x-auto min-w-full">
      {bodies.length > 10 && (
        <div className=" flex items-center gap-5 my-5">
          <p>Pilih Banyak Data :</p>
          <SelectOptionOutRegister
            title={"Jumlah Data"}
            valueOptions={dataSetRows}
            defaultValue={10}
            selectTitle={"Pilih Jumlah Data"}
            className={"text-center"}
            onChange={(e) => setRowsPerPage(e.target.value)}
          />
        </div>
      )}

      <table className="min-w-full bg-white    shadow-md rounded-lg">
        <TableHead data={columns} inputDataEdit={inputDataEdit} />
        <TableBody
          bodies={bodies}
          columns={columns}
          inputDataEdit={inputDataEdit}
          inputDataDelete={inputDataDelete}
          handleSubmitEdit={handleSubmitEdit}
          handleSubmitDelete={handleSubmitDelete}
          currentData={currentData}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </table>

      {bodies?.length > rowsPerPage && (
        <div className="flex  items-center my-5 ml-5">
          <p>
            {/* {currentData?.length} dari {data?.length} */}
            {Math.min((page - 1) * rowsPerPage + 1, bodies.length)} -{" "}
            {Math.min(page * rowsPerPage, bodies.length)} dari {bodies.length}
          </p>
          <Stack spacing={2} className="">
            <Pagination
              count={Math?.ceil(bodies?.length / rowsPerPage)} // Total halaman
              page={page} // Halaman aktif
              onChange={(event, value) => setPage(value)}
              // onChange={handleChangePage} // Fungsi ketika halaman berubah
              shape="rounded"
            />{" "}
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Tables;
