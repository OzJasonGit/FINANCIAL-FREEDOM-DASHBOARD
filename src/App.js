

























import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups'; 

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie,
Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider'; 



import './App.css';

const App = () => {

  const { activeMenu } = useStateContext();

  return (
    <div>   
    
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
          <TooltipComponent content='Settings' position='top'>
            <button type='button'
            className='text-3xl p-3
            hover:drop-shadow-xl
            hover:bg-light-gray text-white'
            style={{background:'blue',
            borderRadius: '50%'}}>
              <FiSettings/>

            </button>


          </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className = 'w-72 fixed sidebar
            dark:bg-secondary-dark-bg
            bg-white'>
              <Sidebar/>
            </div>
          ) : ( 
            <div className='w-0
            dark:bg-secondary-dark-bg'>
              <Sidebar/> 
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg 
            min-h-screen w-full ${activeMenu ?
            'md:ml-72' : 'flex-2'}`       
          }>
            <div className= 'fixed md:static
            bg-main-bg dark:bg-main-dark-bg
            navbar w-full'>
              <Navbar/>

            </div>         
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element = {<Ecommerce/>}/>
              <Route path='/ecommerce' element = {<Ecommerce/>}/>


              {/* pages */}
              <Route path='/orders' orders = {<Orders/>}/>
              <Route path='/employees' employees = {<Employees/>}/>
              <Route path='/customers' customers = {<Customers/>}/>


              {/* Apps */}
              <Route path='/kanban' kanban = {<Kanban/>}/>
              <Route path='/editor' editor = {<Editor/>}/>
              <Route path='/calendar' calendar = {<Calendar/>}/>
              <Route path='/color-picker' color-picker = {<ColorPicker/>}/>
              

              {/* charts */}
              <Route path='/line' line = {<Line/>}/>
              <Route path='/area' area = {<Area/>}/>
              <Route path='/bar' bar = {<Bar/>}/>
              <Route path='/pie' pie = {<Pie/>}/>
              <Route path='/financial' financial = {<Financial/>}/>
              <Route path='/color-mappinng' colormapping = {<ColorMapping/>}/>
              <Route path='/pyramid' pyramid = {<Pyramid/>}/>
              <Route path='/stacked' stacked = {<Stacked/>}/>
              


            </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>    
  </div>

     
  
  )
}

export default App;
