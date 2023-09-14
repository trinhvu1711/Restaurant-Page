import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'

const HomePage = () => {
  return (
    <div className='p-5'>
      <div className="banner">
        <Swiper
          grabCursor='true'
          slidesPerView={'auto'}
          modules={[Scrollbar]}
          scrollbar={{
            hide: true
          }}
        >
          <SwiperSlide>
            <div className='flex items-center justify-center w-4/5 banner-item gap-7'>
              <img src="public\images\banner1.jpg" alt="" className='w-[480px] h-[400px]' />
              <div className='flex flex-col items-start justify-start'>
                <div className='mb-10 text-6xl'>
                  <span className='text-pink-400'>SEASON</span> <br /> <span>LIMITED</span>
                </div>
                <h1 className='mb-3 text-3xl font-light text-slate-500'>&quot;Q-pot. accessories turn into real sweets!&quot;</h1>
                <h1 className='text-xl font-light text-slate-500'>
                  The chest of the elegant monochrome dress is decorated with a colorful delicious necklace.
                  Accented with whipped cream chains and bracelets that resemble pearls.
                  You can choose one of the sweets below.</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex items-center justify-center w-4/5 banner-item gap-7'>
              <img src="public\images\banner2.png" alt="" className='w-[480px] h-[400px]' />
              <div className='flex flex-col items-start justify-start'>
                <div className='mb-10 text-6xl'>
                  <span className='text-pink-400'>SEASON</span> <br /> <span>LIMITED</span>
                </div>
                <h1 className='mb-3 text-3xl font-light text-slate-500'>&quot;Q-pot. accessories turn into real sweets!&quot;</h1>
                <h1 className='text-xl font-light text-slate-500'>
                  The chest of the elegant monochrome dress is decorated with a colorful delicious necklace.
                  Accented with whipped cream chains and bracelets that resemble pearls.
                  You can choose one of the sweets below.</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex items-center justify-center w-4/5 banner-item gap-7'>
              <img src="public\images\banner3.png" alt="" className='w-[480px] h-[400px]' />
              <div className='flex flex-col items-start justify-start'>
                <div className='mb-10 text-6xl'>
                  <span className='text-pink-400'>SEASON</span> <br /> <span>LIMITED</span>
                </div>
                <h1 className='mb-3 text-3xl font-light text-slate-500'>&quot;Q-pot. accessories turn into real sweets!&quot;</h1>
                <h1 className='text-xl font-light text-slate-500'>
                  The chest of the elegant monochrome dress is decorated with a colorful delicious necklace.
                  Accented with whipped cream chains and bracelets that resemble pearls.
                  You can choose one of the sweets below.</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex items-center justify-center w-4/5 banner-item gap-7'>
              <img src="public\images\banner4.png" alt="" className='w-[480px] h-[400px]' />
              <div className='flex flex-col items-start justify-start'>
                <div className='mb-10 text-6xl'>
                  <span className='text-pink-400'>SEASON</span> <br /> <span>LIMITED</span>
                </div>
                <h1 className='mb-3 text-3xl font-light text-slate-500'>&quot;Q-pot. accessories turn into real sweets!&quot;</h1>
                <h1 className='text-xl font-light text-slate-500'>
                  The chest of the elegant monochrome dress is decorated with a colorful delicious necklace.
                  Accented with whipped cream chains and bracelets that resemble pearls.
                  You can choose one of the sweets below.</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex items-center justify-center w-4/5 banner-item gap-7'>
              <img src="public\images\banner5.png" alt="" className='w-[480px] h-[400px]' />
              <div className='flex flex-col items-start justify-start'>
                <div className='mb-10 text-6xl'>
                  <span className='text-pink-400'>SEASON</span> <br /> <span>LIMITED</span>
                </div>
                <h1 className='mb-3 text-3xl font-light text-slate-500'>&quot;Q-pot. accessories turn into real sweets!&quot;</h1>
                <h1 className='text-xl font-light text-slate-500'>
                  The chest of the elegant monochrome dress is decorated with a colorful delicious necklace.
                  Accented with whipped cream chains and bracelets that resemble pearls.
                  You can choose one of the sweets below.</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="about" className='flex flex-col items-center justify-center'>
        <span className='p-10 mb-12 text-6xl font-light text-center text-black'>
          <div className='relative'>
            <span className='text-pink-400'>About </span><span>GrandCafe</span>
            <span className='absolute -top-10 left-0 right-0 opacity-5 text-[150px] '>About</span>
          </div>
        </span>
        <span className='mb-16 text-xl font-light text-center text-slate-500'>
          Domestic Q-pot. ONLINE It will be a member registration that allows you to use SHOP conveniently.
          There are various services such as point awarding and membership rank.
          In addition, you can register for official e-mail newsletters in Japan as well as membership registration.
          Q-pot. Please register as an ONLINE SHOP (domestic) member from here.
        </span>

        <div className='about-content'>
          <span className='text-4xl font-light text-center text-slate-700'>Brand Line</span>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}>
            <SwiperSlide>
              <img src="public\images\babyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\babyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\babyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\babyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\babyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div id="review">review</div>
      <div id="contact">contact</div>
    </div >
  )
}

export default HomePage