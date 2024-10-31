'use client';
import { Command, CommandGroup, CommandItem, CommandList } from './ui/command';
import { UserItem } from './UserItem';
import { User, Mail, Logs, CreditCard, Settings, Cookie, Bell } from 'lucide-react';

export const Sidebar = () => {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/',
          icon: <Mail />,
          text: 'Inbox',
        },
        {
          link: '/',
          icon: <Logs />,
          text: 'Logs',
        },
        {
          link: '/',
          icon: <CreditCard />,
          text: 'Billing',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          icon: <Settings />,
          text: 'General settings',
        },
        {
          link: '/',
          icon: <Cookie />,
          text: 'Privacy',
        },
        {
          link: '/',
          icon: <Bell />,
          text: 'Notifications',
        },
      ],
    },
  ];

  return (
    <div className='flex fixed flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4 bg-gray-50'>
      <div>
        <UserItem />
      </div>
      <div className='grow'>
        <Command className='bg-gray-50' style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem key={optionKey} className='flex gap-2 cursor-pointer'>
                    {option?.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
};
