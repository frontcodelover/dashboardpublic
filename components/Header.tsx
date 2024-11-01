'use client';

import React, { useState } from 'react';
import { CommandDemo } from './Command';
import { Button } from './ui/button';
import { BellIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [notifications, setNotifications] = useState<any>([
    {
      text: 'You have 1 new message',
      date: '2 hours ago',
      read: true,
    },
    {
      text: 'You have another new message',
      date: '2 hours ago',
      read: false,
    },
  ]);

  return (
    <div className='grid grid-cols-2 gap-4 p-4 border-b'>
      <CommandDemo />
      <div className='flex items-center justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='outline' size='icon' className='relative'>
							<div className={`absolute -top-2 -right-2 h-3 w-3 my-1 rounded-full ${notifications.find((x:any) => x.read === true) ? 'bg-green-500' : 'bg-transparent'}`} />
							<BellIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {notifications.map((notification: any, index: number) => (
              <DropdownMenuItem key={index} className='p-1 bg-neutral-50 cursor-pointer transition flex items-start gap-2'>
                <div className={`h-3 w-3 my-1 rounded-full ${notification.read ? 'bg-transparent' : 'bg-green-500'}`} />
                <div>
                  <p>{notification.text}</p>
                  <p className='text-xs text-neutral-500'>{notification.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
