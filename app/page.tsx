import Budget from '@/components/graph/budget/Graph';
import ClientSatisfaction from '@/components/graph/clientSatisfaction/Graph';
import EmployeePerform from '@/components/graph/employee/Graph';
import { Title } from '@/components/ui/title';

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-11/12 flex flex-col'>
        <div>
          <Title text={'Satisfaction client'} heading='h2' />
          <div className='md:h-80 w-full h-60'>
            <ClientSatisfaction />
          </div>
        </div>

        <div className='md:flex items-center justify-center w-full'>
          <div className='flex flex-col w-full'>
            <Title text={'Performance employé'} heading='h2' />
            <div className='md:h-80 w-full h-60'>
              <EmployeePerform />
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <Title text={'Budget global'} heading='h2' />
            <div className='md:h-80 w-full h-60'>
              <Budget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
