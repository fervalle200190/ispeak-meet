import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';

export default function Header () {
    return<>
        <header className='flex items-center justify-between h-[72px] px-10 bg-white shadow-sm'>
            <form className="flex items-center h-[36px] w-1/2 rounded-md border border-gray-200">
                <SearchIcon className='h-5 fill-primary px-2'/>
                <input type='text' className="px-1 text-xs h-full w-full outline-none"/>
            </form>
            <div className='flex items-center'>
            <ProfileIcon className='h-7 fill-primary px-2'/>
            <span className='font-medium'>Username</span>
            </div>

        </header>
    </>;
};