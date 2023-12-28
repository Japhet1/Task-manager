import { BsTwitterX, BsInstagram, BsDiscord, BsTelegram } from 'react-icons/bs'
const Footer = () => {

  return (
    <main className=" mx-10 mt-10 px-10 py-6">
        <div className="flex justify-between items-center text-slate-500 border-t-2 border-slate-300 py-8">
            <div className='flex items-center space-x-5 text-xl text-slate-500'>
                <BsTwitterX/>
                <BsInstagram/>
                <BsDiscord/>
                <BsTelegram/>
            </div>
            <div><h1>@Gunstein.dev 2023</h1></div>
        </div>

    </main>
  )
}

export default Footer