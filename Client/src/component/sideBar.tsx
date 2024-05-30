import React from 'react'
import { MdDashboard, MdSignalWifiStatusbarConnectedNoInternet4, MdOutlineSettings } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import DashboardView from "../component/dashboardView"
import TodoList from "../features/todoList"

const SideBar = () => {
  return (
    <main>
        <div className=''>
            <Tabs>
                <TabList className='flex items-center space-x-5 text-md text-slate-900 mb-5'>
                    <Tab selectedClassName="bg-slate-900 text-slate-100" className="w-[10%] hover:bg-slate-900 hover:text-slate-100 bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdDashboard />
                            <h1>Dashboard</h1>
                        </div>
                    </Tab>
                    <Tab selectedClassName="bg-slate-900 text-slate-100"  className="w-[10%] hover:bg-slate-900 hover:text-slate-100 bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <FaTasks />
                            <h1>Task</h1>
                        </div>
                    </Tab>
                    <Tab selectedClassName="bg-slate-900 text-slate-100"  className="w-[10%] hover:bg-slate-900 hover:text-slate-100 bg-slate-50 rounded-xl text-center px-4 py-2">
                        <div className='flex justify-center items-center space-x-2'>
                            <MdSignalWifiStatusbarConnectedNoInternet4 />
                            <h1>Status</h1>
                        </div>
                    </Tab>
                    <Tab selectedClassName="bg-slate-900 text-slate-100"  className="w-[10%] hover:bg-slate-900 hover:text-slate-100 bg-slate-50 rounded-xl text-center px-4 py-2">
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
            </Tabs>
        </div>
    </main>
  )
}

export default SideBar