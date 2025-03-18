import { FaTrashAlt, FaRegEdit, FaCircle } from "react-icons/fa";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import dayjs from "dayjs";
import { ModalLayout } from "../organisms";
import { Button } from "../atoms";
import { DeleteModal, FormModal } from "../molecules";
import { Link } from "react-router-dom";

const Table = ({
    datas,
    handleShowModalId,
    getDetailsData,
    handleCancelModal,
    setReGetDatas,
    columns,
    modalType,
    setShowModal,
    showModal,
    editService,
    inputEditPattern,
    deleteService,
    titleModal,
    subDatas,
    loadingSubData,
    loadingSearch,
    imageFor,
    buttonNameDua,
}) => {
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-xs lg:text-sm text-gray-500 text-center">
                    <thead className="text-white bg-blue-950 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            {columns &&
                                columns.map((column, i) => (
                                    <th
                                        scope="col"
                                        className="px-6 py-3"
                                        key={i}
                                    >
                                        <div className="flex flex-col gap-2">
                                            {column?.title}
                                        </div>
                                    </th>
                                ))}
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loadingSearch ? (
                            <tr>
                                <td
                                    colSpan={columns.length + 2}
                                    className="px-6 py-4"
                                >
                                    <div className="flex justify-center items-center">
                                        <span className="text-gray-600">
                                            Loading...
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            datas?.length > 0 &&
                            datas.map((row, i) => (
                                <tr
                                    className="bg-white border-b border-gray-200"
                                    key={row.id}
                                >
                                    <td scope="row" className="px-6 py-4">
                                        {i + 1}
                                    </td>
                                    {columns.map((column, index) => (
                                        <td
                                            key={index}
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {row[column.key] === null ? (
                                                "-"
                                            ) : column.key === "createdAt" ||
                                              column.key === "updatedAt" ? (
                                                dayjs(row[column.key]).format(
                                                    "DD-MM-YYYY (HH:mm)"
                                                )
                                            ) : column.key === "status" ? (
                                                <div className="flex items-center gap-2 justify-center">
                                                    <FaCircle
                                                        className={`${
                                                            row[column.key]
                                                                ? "text-green-500"
                                                                : "text-red-500"
                                                        } w-5 h-5`}
                                                    />
                                                    <span>
                                                        {row[column.key]
                                                            ? "Active"
                                                            : "Inactive"}
                                                    </span>
                                                </div>
                                            ) : column.key === "url_film" ? (
                                                <img
                                                    src={row[column.key]}
                                                    alt="name"
                                                    className="w-12 h-12 m-auto"
                                                />
                                            ) : column.key ===
                                              "trailer_film" ? (
                                                <Link
                                                    to={row[column.key]}
                                                    target="_blank"
                                                >
                                                    {row[column.key]}
                                                </Link>
                                            ) : (
                                                row[column.key]
                                            )}
                                        </td>
                                    ))}
                                    <td className="px-6 py-7 w-full h-full flex gap-3 justify-center items-center">
                                        <FaRegEdit
                                            className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer text-blue-500"
                                            onClick={() =>
                                                handleShowModalId(row, "edit")
                                            }
                                        />
                                        <FaTrashAlt
                                            className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer text-red-500"
                                            onClick={() =>
                                                handleShowModalId(
                                                    row.id,
                                                    "delete"
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {datas?.length === 0 && (
                <div className="flex justify-center border items-center p-4">
                    <span className="text-gray-600">No data available</span>
                </div>
            )}
            {datas?.length > 0 && (
                <div className="flex justify-center items-center gap-3 p-4">
                    <Button
                        className="w-16 text-black border hover:bg-slate-200"
                        disable={false}
                    >
                        <MdNavigateBefore className="w-6 h-6" />
                    </Button>
                    <Button
                        className="w-16 text-black border hover:bg-slate-200"
                        disable={false}
                    >
                        <MdNavigateNext className="w-6 h-6" />
                    </Button>
                </div>
            )}
            {showModal && (
                <ModalLayout setShowModal={setShowModal}>
                    {modalType === "delete" ? (
                        <DeleteModal
                            setShowModal={setShowModal}
                            deleteService={deleteService}
                            id={getDetailsData}
                            handleCancelModal={() =>
                                handleCancelModal(setShowModal)
                            }
                            setReGetDatas={setReGetDatas}
                        />
                    ) : modalType === "edit" ? (
                        <FormModal
                            titleModal={titleModal}
                            setShowModal={setShowModal}
                            dataForm={
                                subDatas
                                    ? inputEditPattern(subDatas, getDetailsData)
                                    : inputEditPattern(getDetailsData)
                            }
                            service={editService}
                            setReGetDatas={setReGetDatas}
                            loadingSubData={loadingSubData}
                            imageFor={imageFor}
                            buttonNameDua={buttonNameDua}
                        />
                    ) : null}
                </ModalLayout>
            )}
        </div>
    );
};

export default Table;
