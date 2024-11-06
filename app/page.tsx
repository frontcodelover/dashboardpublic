
import ClientSatisfaction from '@/components/graph/clientSatisfaction/Graph';
import EmployeePerform from '@/components/graph/employee/Graph';
import { Title } from '@/components/ui/title';
import Budget from '@/components/graph/budget/Graph';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="w-11/12 flex flex-col gap-6">
        
        <div className="w-full flex flex-col gap-4">
          <Title text="Performance employé" heading="h2" />
					<div className="w-full flex gap-4 h-80">
						<div>
						<EmployeePerform />
						</div>
						<div className="grow">
							<Budget />
							</div>
          </div>
				</div>
				
        <div className="w-full flex flex-col gap-4">
          <Title text="Satisfaction client" heading="h2" />
          <div className="w-full h-auto">
            <ClientSatisfaction />
          </div>
        </div>

      </div>
    </div>
  );
}
