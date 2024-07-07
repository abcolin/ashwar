import UserPanel from './user-panel';
import NavBar from './navbar';
import AshwarLogo from './ashwar-logo';

export default function Header() {
    return (
        <div className="fixed h-[100px] left-0 right-0 top-0 z-20 bg-zinc-950 flex items-center justify-between px-8 py-5">
            <AshwarLogo />
            <div className='grow'><NavBar /></div>
            <UserPanel />
        </div>
    );
}