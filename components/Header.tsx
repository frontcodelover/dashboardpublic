'use client';

import { CommandDemo } from './Command';
import { Button } from './ui/button';
import { BellIcon } from 'lucide-react';

export const Header = () => {
  return (
    <div className='grid grid-cols-2 gap-4 p-4 border-b'>
			<CommandDemo />
			<div className='flex items-center justify-end'>
				<Button variant="outline" size="icon">
					<BellIcon />
				</Button>
			</div>
    </div>
  );
};
