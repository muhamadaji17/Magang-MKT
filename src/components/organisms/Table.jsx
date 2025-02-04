import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import dayjs from 'dayjs';
import { ModalLayout } from '../organisms';
import { Button } from '../atoms';

const Table = ({
    headers,
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
    getId,
    type,
    handleCancelModalId,
    setReGetDatas,
    paginationIconNext: PaginationIconNext,
    paginationIconPrev: PaginationIconPrev,
}) => {
    return (
        <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-gray-500 dark:text-gray-400 text-center'>
                <thead className='text-white bg-blue-950 uppercase dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        {headers.map((header, i) => (
                            <th scope='col' className='px-6 py-3 ' key={i}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {datas &&
                        datas?.data?.payload?.slice(0, 9).map((data, i) => (
                            <tr
                                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                                key={data.id}
                            >
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                >
                                    {i + 1}
                                </th>
                                <td className='px-6 py-4'>
                                    {data?.nama_departement}
                                </td>
                                <td className='px-6 py-4'>
                                    {data?.departement_code}
                                </td>
                                <td className='px-6 py-4'>
                                    {dayjs(data?.createdAt).format(
                                        'DD-MM-YYYY (HH:mm)'
                                    )}
                                </td>
                                <td className='px-6 py-4'>
                                    {data?.created_admin?.username}
                                </td>
                                <td className='px-6 py-4 flex gap-3 justify-center'>
                                    <FaRegEdit
                                        className='w-6 h-6 cursor-pointer text-blue-500'
                                        onClick={() =>
                                            handleShowModalId(data.id, 'edit')
                                        }
                                    />
                                    <FaTrashAlt
                                        className='w-6 h-6 cursor-pointer text-red-500'
                                        onClick={() =>
                                            handleShowModalId(data.id, 'delete')
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {datas.length > 0 && (
                <div className='flex justify-center items-center gap-3'>
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
                    getId={getId}
                    type={type}
                    handleCancelModalId={handleCancelModalId}
                    showModal={showModalId}
                    setReGetDatas={setReGetDatas}
                />
            )}
        </div>
    );
};

export default Table;
