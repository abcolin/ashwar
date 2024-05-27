import { UserNav } from './user-nav';
import { NavBar } from './navbar';
import AshwarLogo from './ashwar-logo';

export default function Header() {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b backdrop-blur bg-zinc-950">
            <nav className="flex h-14 items-center justify-between px-4 md:h-[100px]">
                <div className="flex h-full shrink-0 items-end rounded-lg p-4">
                    <AshwarLogo />
                </div>
                <div className="flex items-center gap-2">
                    <NavBar />
                    <UserNav />
                </div>
            </nav>
        </div>
    );
}