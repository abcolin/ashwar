import { UserNav } from './user-nav';
import NavBar from './navbar';
import AshwarLogo from './ashwar-logo';

export default function Header() {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b backdrop-blur bg-zinc-950 flex h-14 items-center justify-between">
            <AshwarLogo />
            <NavBar />
            <UserNav />
        </div>
    );
}