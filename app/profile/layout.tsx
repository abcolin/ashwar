import NavPanel from '@/components/profile/nav-panel';
import UserPanel from '@/components/profile/user-panel';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-full'>
      <NavPanel />
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <UserPanel />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}