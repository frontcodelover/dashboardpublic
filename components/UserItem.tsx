export const UserItem = () => {
  return (
    <div className='flex items-center justify-start gap-2 rounded-xl border p-2'>
      <div className='avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-bold flex items-center justify-center'>
        <p>NDR</p>
      </div>
      <div>
        <p className='font-bold'>Nicolas</p>
        <p className='text-sm text-neutral-500'>email</p>
      </div>
    </div>
  );
};
