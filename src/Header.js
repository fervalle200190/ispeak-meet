import { ReactComponent as SearchIcon } from './assets/search.svg';

export const Header = () => {
    return(
        <header className='flex items-center h-[72px] px-5 bg-white shadow-sm'>
            <form className="h-[36px] w-1/2 rounded-md border border-gray-200">
                <input type='text' className="px-1 w-full text-xs"></in put>
            </form>
        </header>
    );
};