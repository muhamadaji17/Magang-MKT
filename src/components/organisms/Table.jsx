import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import dayjs from 'dayjs';

const Table = ({ headers, datas }) => {
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
                        datas.data.payload.slice(0, 9).map((data, i) => (
                            <tr
                                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                                key={i}
                            >
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                >
                                    {i + 1}
                                </th>
                                <td className='px-6 py-4'>
                                    {data.nama_departement}
                                </td>
                                <td className='px-6 py-4'>
                                    {data.departement_code}
                                </td>
                                <td className='px-6 py-4'>
                                    {dayjs(data.createdAt).format(
                                        'DD-MM-YYYY (HH:mm)'
                                    )}
                                </td>
                                <td className='px-6 py-4'>
                                    {data.created_admin.username}
                                </td>
                                <td className='px-6 py-4 flex gap-3 justify-center'>
                                    <FaRegEdit className='w-6 h-6 cursor-pointer' />
                                    <FaTrashAlt className='w-6 h-6 cursor-pointer' />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
