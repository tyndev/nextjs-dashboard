// @app\ui\header.tsx
import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex h-20 shrink-0 items-end bg-blue-500 p-4 md:h-20">
        <Link href="/">
            <AcmeLogo />
        </Link>
        <Link className="pl-8" href="/dashboard">
            <button className="flex h-[32px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <div className="hidden md:block">Dashboard</div>
            </button>
        </Link>
    </div>
  );
}
