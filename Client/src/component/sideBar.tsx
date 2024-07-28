import React from 'react'
import { MdDashboard, MdSignalWifiStatusbarConnectedNoInternet4, MdOutlineSettings } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import DashboardView from "../component/dashboardView"
import TodoList from "../features/todoList"
import Status from './status';
import Settings from './settings';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Chat from './chat';

const SideBar = () => {
  return (
    <main>
        <div className=''>
            <Tabs>
                <TabList className='flex items-center space-x-5 text-md text-black mb-5'>
                    {/* <Tab selectedClassName="bg-slate-600 text-slate-50" className="w-[8%] bg-[#9B3922] rounded-md text-center p-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdDashboard className='text-lg'/>
                            <h1 className='text-sm'>Dashboard</h1>
                        </div>
                    </Tab> */}
                    <Tab selectedClassName="bg-black dark:bg-slate-800 dark:border-none text-white" className="w-[6%] border border-black dark:border-slate-700 dark:text-white rounded-md text-center p-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <FaTasks className='text-sm'/>
                            <h1 className='text-sm font-bold'>Task</h1>
                        </div>
                    </Tab>
                    {/* <Tab selectedClassName="bg-slate-600 text-slate-50" className="w-[8%] bg-[#9B3922] rounded-md text-center p-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdSignalWifiStatusbarConnectedNoInternet4 className='text-lg'/>
                            <h1 className='text-sm'>Status</h1>
                        </div>
                    </Tab> */}
                    {/* <Tab selectedClassName="bg-black dark:bg-slate-800 dark:border-none text-white" className="w-[6%] border border-black dark:border-slate-700 dark:text-white rounded-md text-center p-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <IoChatboxEllipsesOutline className='text-base'/>
                            <h1 className='text-sm font-bold'>Chat</h1>
                        </div>
                    </Tab> */}
                    {/* <Tab selectedClassName="bg-black dark:bg-slate-800 text-white" className="w-[6%] border border-black dark:bg-slate-800 rounded-md text-center p-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdOutlineSettings className='text-sm'/>
                            <h1 className='text-sm font-bold'>Settings</h1>
                        </div>
                    </Tab> */}
                </TabList>
                {/* <TabPanel>
                    <DashboardView/>
                </TabPanel> */}
                <TabPanel>
                    <TodoList/>
                </TabPanel>
                {/* <TabPanel>
                    <Status/>
                </TabPanel> */}
                {/* <TabPanel>
                    <Chat/>
                </TabPanel> */}
                {/* <TabPanel>
                    <Settings/>
                </TabPanel> */}
            </Tabs>
        </div>
    </main>
  )
}

export default SideBar