import { BreadCrumb } from '../../utils';

const Dashboard = () => {
    return (
        <>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold'>Dashboard</h1>
                    <BreadCrumb />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='h-80 bg-gradient-to-r from-[#191714] to-[#2234AE] flex flex-col justify-center items-center shadow-md rounded-md text-white'>
                    <div className='h-16 flex items-center justify-center w-full'>
                        <h2 className='text-xl text-center font-semibold'>
                            Total Employee
                        </h2>
                    </div>
                    <div className='flex-1 flex justify-center items-center w-full'>
                        <p className='text-3xl font-semibold'>24</p>
                    </div>
                </div>
                <div className='h-80 bg-gradient-to-r from-[#191714] to-[#2234AE] flex flex-col justify-center items-center shadow-md rounded-md text-white'>
                    <div className='h-16 flex items-center justify-center w-full'>
                        <h2 className='text-xl text-center font-semibold'>
                            Total Department
                        </h2>
                    </div>
                    <div className='flex-1 flex justify-center items-center w-full'>
                        <p className='text-3xl font-semibold'>24</p>
                    </div>
                </div>
                <div className='h-80 bg-gradient-to-r from-[#191714] to-[#2234AE] flex flex-col justify-center items-center shadow-md rounded-md text-white'>
                    <div className='h-16 flex items-center justify-center w-full'>
                        <h2 className='text-xl text-center font-semibold'>
                            Total Division
                        </h2>
                    </div>
                    <div className='flex-1 flex justify-center items-center w-full'>
                        <p className='text-3xl font-semibold'>24</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
