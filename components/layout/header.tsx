import { UserNav } from './user-nav';

export default function Header() {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-14 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <UserNav />
                </div>
            </nav>
        </div>
    );
}