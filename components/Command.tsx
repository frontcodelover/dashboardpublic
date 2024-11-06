import { useState, useRef, useEffect } from 'react';
import { Calendar, Smile } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

export function CommandDemo() {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const commandRef = useRef<HTMLDivElement>(null);

  // Ouvrir le menu lors du focus
  const handleFocus = () => {
    setOpen(true);
  };

  // Fermer le menu lors d'un clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={commandRef} className='relative'>
      <Command className='border'>
        <CommandInput placeholder='Tapez une commande ou recherchez...' onFocus={handleFocus} onValueChange={(value) => setInputValue(value)} />
        {open && (
          <CommandList className='absolute left-0 right-0 z-10 bg-white border rounded-b top-full'>
            <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              <CommandItem className='cursor-pointer'>
                <Calendar />
                <span>Calendrier</span>
              </CommandItem>
              <CommandItem className='cursor-pointer'>
                <Smile />
                <span>Sourire</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
