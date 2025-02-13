import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import dayjs from 'dayjs';
import { ModalLayout } from '../organisms';
import { Button, Input } from '../atoms';

const Table = ({
    datas,
    editService,
    deleteService,
    accessToken,
    trigger,
    loading,
    setLoading,
    setShowModalId,
    showModalId,
    handleShowModalId,
    handleModal,
    dataForm,
    titleModal,
    getDetailsData,
    type,
    handleCancelModal,
    setReGetDatas,
    paginationIconNext: PaginationIconNext,
    paginationIconPrev: PaginationIconPrev,
    columns,
    query,
    handleChange,
}) => {
    return (
        <div>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-xs lg:text-sm text-gray-500 text-center'>
                    <thead className='text-white bg-blue-950 uppercase'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                No
                            </th>
                            {columns &&
                                columns
                                    ?.filter(
                                        (column) =>
                                            column.title !== 'id' &&
                                            column.title !== 'id_departement'
                                    )
                                    .map((column, i) => (
                                        <th
                                            scope='col'
                                            className='px-6 py-3'
                                            key={i}
                                        >
                                            <div className='flex flex-col gap-2'>
                                                <Input
                                                    variant='h-6 text-center text-sm text-black'
                                                    placeholder='Search...'
                                                    value={query[column.key]}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            e,
                                                            column.key
                                                        )
                                                    }
                                                />
                                                {column?.title}
                                            </div>
                                        </th>
                                    ))}
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas?.length > 0 &&
                            datas.map((row, i) => (
                                <tr
                                    className='bg-white border-b border-gray-200'
                                    key={row.id}
                                >
                                    <td scope='row' className='px-6 py-4'>
                                        {i + 1}
                                    </td>
                                    {columns
                                        ?.filter(
                                            (column) =>
                                                column.title !== 'id' &&
                                                column.title !==
                                                    'id_departement'
                                        )
                                        .map((column, index) => (
                                            <td
                                                key={index}
                                                scope='row'
                                                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                                            >
                                                {row[column.key] === null
                                                    ? '-'
                                                    : column.key ===
                                                          'createdAt' ||
                                                      column.key === 'updatedAt'
                                                    ? dayjs(
                                                          row[column.key]
                                                      ).format(
                                                          'DD-MM-YYYY (HH:mm)'
                                                      )
                                                    : row[column.key]}
                                            </td>
                                        ))}
                                    <td className='px-6 py-7 lg:py-4 w-full h-full flex gap-3 justify-center items-center'>
                                        <FaRegEdit
                                            className='w-5 h-5 lg:w-6 lg:h-6 cursor-pointer text-blue-500'
                                            onClick={() =>
                                                handleShowModalId(row, 'edit')
                                            }
                                        />
                                        <FaTrashAlt
                                            className='w-5 h-5 lg:w-6 lg:h-6 cursor-pointer text-red-500'
                                            onClick={() =>
                                                handleShowModalId(
                                                    row.id,
                                                    'delete'
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {datas?.length === 0 && (
                <div className='flex justify-center border items-center p-4'>
                    <span className='text-gray-600'>No data available</span>
                </div>
            )}
            {datas?.length > 0 && (
                <div className='flex justify-center items-center gap-3 p-4'>
                    <Button
                        className='w-16 text-black border hover:bg-slate-200'
                        disable={false}
                    >
                        <PaginationIconPrev className='w-6 h-6' />
                    </Button>
                    <Button
                        className='w-16 text-black border hover:bg-slate-200'
                        disable={false}
                    >
                        <PaginationIconNext className='w-6 h-6' />
                    </Button>
                </div>
            )}
            {showModalId && (
                <ModalLayout
                    setShowModal={setShowModalId}
                    handleShowModal={handleShowModalId}
                    handleModal={handleModal}
                    trigger={trigger}
                    loading={loading}
                    setLoading={setLoading}
                    accessToken={accessToken}
                    addService={type === 'edit' ? editService : deleteService}
                    dataForm={dataForm}
                    titleModal={titleModal}
                    getDetailsData={getDetailsData}
                    type={type}
                    handleCancelModal={handleCancelModal}
                    showModal={showModalId}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </div>
    );
};

export default Table;
