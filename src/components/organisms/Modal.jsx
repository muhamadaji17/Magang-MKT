import { IoMdClose } from 'react-icons/io';
import FormAuth from './FormAuth';
import { handleSubmitData } from '../../pattern';

export const Modal = ({
    titleModal,
    dataForm,
    setShowModal,
    handleShowModal,
    handleModal,
    trigger,
    loading,
    setLoading,
    accessToken,
    addService,
}) => {
    return (
        <div
            ref={trigger}
            className='fixed inset-0 bg-transparent drop-shadow-md backdrop-blur-md flex items-center justify-center z-50'
            onClick={handleModal}
        >
            <div className='bg-white rounded-lg p-2 w-[1100px] h-[700px] relative flex flex-col'>
                <div>
                    <h1 className='text-2xl font-semibold text-center p-2'>
                        {titleModal}
                    </h1>
                    <div className='absolute top-3 right-2 w-[24px] h-[24px] rounded-full cursor-pointer'>
                        <IoMdClose
                            className='w-full h-full rounded-full'
                            onClick={handleShowModal}
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center flex-1 flex-col overflow-y-auto'>
                    <FormAuth
                        dataForm={dataForm}
                        handleSubmitData={(data, reset) =>
                            handleSubmitData(
                                data,
                                addService,
                                accessToken,
                                setShowModal,
                                reset,
                                setLoading
                            )
                        }
                        loading={loading}
                        buttonName='Send'
                        buttonStyle='w-24 text-white bg-blue-600 hover:bg-blue-800'
                    />
                </div>
            </div>
        </div>
    );
};
