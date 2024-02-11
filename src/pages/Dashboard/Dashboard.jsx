'use client';

import { Sidebar } from 'flowbite-react';
import { HiInbox, HiUser, HiBookOpen } from 'react-icons/hi';
import { BiSolidCategory } from 'react-icons/bi';
import { FaUser, FaUserEdit } from 'react-icons/fa';
import { TbReportMoney } from 'react-icons/tb';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard/authors" icon={HiUser}>
              All Authors
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/publishers" icon={FaUserEdit}>
              All Publishers
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/users" icon={FaUser}>
              All Users
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/books" icon={HiBookOpen}>
              All Books
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/categories" icon={BiSolidCategory}>
              All Categories
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/transactions" icon={TbReportMoney}>
              Transactions
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="flex-1 p-2">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
