import React from 'react'
import { MdDashboard, MdSignalWifiStatusbarConnectedNoInternet4, MdOutlineSettings } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import DashboardView from "../component/dashboardView"
import TodoList from "../features/todoList"
import Status from './status';
import Settings from './settings';

const SideBar = () => {
  return (
    <main>
        <div className=''>
            <Tabs>
                <TabList className='flex items-center space-x-5 text-md text-slate-900 mb-5'>
                    <Tab selectedClassName="bg-slate-600 text-slate-50" className="w-[10%] bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdDashboard />
                            <h1>Dashboard</h1>
                        </div>
                    </Tab>
                    <Tab selectedClassName="bg-slate-600 text-slate-50" className="w-[10%] bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <FaTasks />
                            <h1>Task</h1>
                        </div>
                    </Tab>
                    <Tab selectedClassName="bg-slate-600 text-slate-50" className="w-[10%] bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdSignalWifiStatusbarConnectedNoInternet4 />
                            <h1>Status</h1>
                        </div>
                    </Tab>
                    <Tab selectedClassName="bg-slate-600 text-slate-50" className="w-[10%] bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdOutlineSettings />
                            <h1>Settings</h1>
                        </div>
                    </Tab>
                </TabList>
                <TabPanel>
                    <DashboardView/>
                </TabPanel>
                <TabPanel>
                    <TodoList/>
                </TabPanel>
                <TabPanel>
                    <Status/>
                </TabPanel>
                <TabPanel>
                    <Settings/>
                </TabPanel>
            </Tabs>
        </div>
    </main>
  )
}

export default SideBar