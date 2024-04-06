import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { LogoutButton } from '../../components/LogoutButton';
import { GenerateReport } from '../../components/GenerateReport';
import { ViewReports } from '../../components/ViewReports';
export const Home = () => {
    const { setAuthUser,authUser } = useAuthContext();
    return (
        <div className='min-w-96 flex flex-col items-center justify-center'>
            <div className='p-4 rounded-xl flex items-center justify-center bg-black'>
                <h1 className='text-3xl text-white font-serif font-bold'>Welcome Admin Select from below</h1>
            </div>
            <div className='mt-4 flex w-full justify-between'>
                <GenerateReport/>
                <ViewReports/>
            </div>
                <LogoutButton/>
        </div>
    );
};
