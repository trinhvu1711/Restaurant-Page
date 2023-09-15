import { useState } from 'react'

const MenuPage = () => {
  const changeTab = (index) => {
    setActiveTab(index)
  }
  const [activeTab, setActiveTab] = useState(1)

  return (

    <div className="flex justify-start items-center flex-col w-full min-h-[1200px] menu text-black">
      <div className="hidden mb-10 sm:block">
        <div className="border-b border-gray-200">
          <nav className="flex gap-6 -mb-px" aria-label="Tabs">
            <a
              href="#"
              className={`px-1 pb-4 text-sm font-medium border-b-2 shrink-0  ${activeTab === 1 ? 'text-sky-600 border-sky-500' : 'text-gray-500 border-transparent'}`}
              onClick={() => changeTab(1)}
            >
              Recommend
            </a>

            <a
              href="#"
              className={`px-1 pb-4 text-sm font-medium border-b-2 shrink-0  ${activeTab === 2 ? 'text-sky-600 border-sky-500' : 'text-gray-500 border-transparent'}`}
              onClick={() => changeTab(2)}
            >
              News Items
            </a>

            <a
              href="#"
              className={`px-1 pb-4 text-sm font-medium border-b-2 shrink-0  ${activeTab === 3 ? 'text-sky-600 border-sky-500' : 'text-gray-500 border-transparent'}`}
              onClick={() => changeTab(3)}
            >
              Restock Items
            </a>

            <a
              href="#"
              className={`px-1 pb-4 text-sm font-medium border-b-2 shrink-0  ${activeTab === 4 ? 'text-sky-600 border-sky-500' : 'text-gray-500 border-transparent'}`}
              aria-current="page"
              onClick={() => changeTab(4)}
            >
              Search By Motif
            </a>
          </nav>
        </div>
      </div>

      {activeTab === 1 && <div id="recommend" className="text-center tab-content">
        <span className='p-4 mb-5 text-3xl'>Recommend</span>
        <hr />
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 text-center gap-x-8">
          <div>
            <img src="public\images\item_onlinelimited2.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_Halloweenmelt.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">Halloween</span>
          </div>
          <div>
            <img src="public\images\villains_Ursula.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">Villains</span>
          </div>
          <div>
            <img src="public\images\icon_shoes.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">
              Q-pot.SHOES</span>
          </div>
          <div>
            <img src="public\images\item_onlinelimited2.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">
              Q-pot.SHOES</span>
          </div>
          <div>
            <img src="public\images\item_onlinelimited2.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\item_onlinelimited2.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\item_onlinelimited2.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>

        </div>
      </div>}
      {activeTab === 2 && <div id="newsItems" className="text-center tab-content">
        <span className='p-4 mb-5 text-3xl'>New items</span>
        <hr />
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 text-center gap-x-8">
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">Chocolate</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\000000006049-01-m.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>

        </div>
      </div>}
      {activeTab === 3 && <div id="restockItems" className="text-center tab-content">
        <span className='p-4 mb-5 text-3xl'>Restock items</span>
        <hr />
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 text-center gap-x-8">
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">Chocolate</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_chocolate3.jpg" alt="" className="object-cover w-48 h-48" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>

        </div>
      </div>}
      {activeTab === 4 && <div id="searchByMotif" className="text-center tab-content">
        <span className='p-4 mb-5 text-3xl'>Search by motif</span>
        <hr />
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4 text-center gap-x-8">
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">Chocolate</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>
          <div>
            <img src="public\images\motif_candy.jpg" alt="" className="object-cover w-48 h-48 rounded-full" />
            <span className="text-xs font-thin title text-slate-900">ONLINE SHOP exclusive items</span>
          </div>

        </div>
      </div>}
    </div>
  )
}

export default MenuPage