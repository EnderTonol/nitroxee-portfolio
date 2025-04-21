// Prograammings
import Cpp_logo from '../../assets/logos/cpp.svg';
import Cs_logo from '../../assets/logos/csharp.svg';
import Js_logo from '../../assets/logos/js.svg';
import Ts_logo from '../../assets/logos/typeScript.svg';

// Frontend
import React_logo from '../../assets/logos/react.svg';
import Vite_logo from '../../assets/logos/vite.svg';
import Next_logo from '../../assets/logos/nextjs.svg';
import TailW_logo from '../../assets/logos/tailwindcss.svg';
import Redux from '../../assets/logos/redux-action.svg';
import Vercel from '../../assets/logos/vercel.svg';
import Netlify from '../../assets/logos/netlify.svg';

// Backend
import Node_logo from '../../assets/logos/nodejs.svg';
import Prisma_logo from '../../assets/logos/prisma.svg';
import Docker_logo from '../../assets/logos/docker.svg';
import Git_logo from '../../assets/logos/git.svg';
import sql_logo from '../../assets/logos/sql.svg';
import mongo_logo from '../../assets/logos/mongodb.svg';

// Package Managers
import N from '../../assets/logos/npm.svg';
import Y from '../../assets/logos/yarn.svg';
import P from '../../assets/logos/pnpm.svg';



export function Prograammings(){

    return (
        <div className='flex flex-col gap-8 justify-center items-center w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Programmings</h3>
        <div className='flex flex-row gap-6 justify-center items-center'>
            <img className='w-20 h-20' src={Cpp_logo} alt="Cpp_logo" />
            <img className='w-20 h-20' src={Cs_logo} alt="Cs_logo" />
            <img className='w-20 h-20' src={Js_logo} alt="Js_logo" />
            <img className='w-20 h-20' src={Ts_logo} alt="Ts_logo" />
        </div>
        </div>
    );
}

export function Libraries(){
    
    return (
        <div className='flex flex-col gap-8 justify-center items-center mt-6 w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Libraries</h3>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <img className='w-20 h-20' src={React_logo} alt="React_logo" />
            <img className='w-20 h-20' src={Node_logo} alt="Cs_logo" />
            <img className='w-20 h-20' src={TailW_logo} alt="Tw_logo" />
            <img className='w-20 h-20' src={Redux} alt="Tw_logo" />
            
        </div>
        </div>
    )
}

export function Frameworks(){
    
    return (
        <div className='flex flex-col gap-8 justify-center items-center mt-6 w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Frameworks</h3>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <img className='w-20 h-20' src={Next_logo} alt="React_logo" />
            <img className='w-20 h-20' src={Vite_logo} alt="Cs_logo" />
        </div>
        </div>
    )
}

export function PackageManagers(){
    
    return (
        <div className='flex flex-col gap-8 justify-center items-center mt-6 w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Package Managers</h3>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <img className='w-20 h-20' src={N} alt="React_logo" />
            <img className='w-20 h-20' src={P} alt="Cs_logo" />
            <img className='w-20 h-20' src={Y} alt="Tw_logo" />
        </div>
        </div>
    )
}

export function BackEndTech(){
    
    return (
        <div className='flex flex-col gap-8 justify-center items-center mt-6 w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Backend Tech</h3>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <img className='w-20 h-20' src={Prisma_logo} alt="React_logo" />
            <img className='w-20 h-20' src={Docker_logo} alt="Cs_logo" />
            <img className='w-20 h-20' src={sql_logo} alt="Tw_logo" />
            <img className='w-20 h-20' src={mongo_logo} alt="Tw_logo" />
        </div>
        </div>
    )
}

export function VC(){
    
    return (
        <div className='flex flex-col gap-8 justify-center items-center mt-6 w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Version Control</h3>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <img className='w-20 h-20' src={Git_logo} alt="React_logo" />
        </div>
        </div>
    )
}

export function Deploys(){
    
    return (
        <div className='flex flex-col gap-8 justify-center items-center mt-6 w-full h-full'>
        <h3 className='text-xl text-greenyellow font-Xwide'>Version Control</h3>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <img className='h-20 w-19' src={Vercel} alt="React_logo" />
            <img className='w-20 h-20' src={Netlify} alt="React_logo" />
        </div>
        </div>
    )
}