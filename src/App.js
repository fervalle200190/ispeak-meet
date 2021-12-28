import './App.css';
import { AsideNav } from './AsideNav';
import { Header } from './Header.js'

function App() {
  return (
    <div className='App flex'>
      
      <AsideNav />
      <main className='w-full'>
        <Header />
        <section className='flex p-5 gap-8 justify-center'>
          <div className='h-72 w-[30rem] rounded-3xl bg-primary'></div>
          <div className='h-72 w-96 rounded-3xl bg-primary'></div>
        </section>
        <section className='flex flex-col gap-5 p-5'>
          <div className='flex gap-5'>
            <h2>
              Your Courses
            </h2>
            <a href className='py-1 px-2 text-xs text-primary bg-accent rounded-lg'>
              Browse All
            </a>
          </div>
          <ul>
            <li>
              <div className='flex flex-col h-52 w-52 bg-gray-100 rounded-3xl'>
                <img href='./assets/placeholder' className='h-26 w-full' alt=''></img>
              </div>
            </li>
          </ul>          
        </section>
      </main>
    </div>
  );
}

export default App;
