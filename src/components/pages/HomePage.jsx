import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Scrollbar, Autoplay } from 'swiper/modules'

const HomePage = () => {
  return (
    <div className=''>
      <div className="p-5 banner">
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
                  Accented with whipped cream chains and bracelets that resemble pearls.
                  You can choose one of the sweets below.</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="about" className='flex flex-col items-center justify-center p-5 bg-slate-100'>
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
          <br />
          ※Q-pot. Please register as an ONLINE SHOP (domestic) member from here.
        </span>

        <div className='w-full ml-auto mr-auto text-center about-content'>
          <span className='text-4xl font-light text-slate-700'>Brand Line</span>
          <div className='mb-5'></div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            speed={1200}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false
          // }}
          // modules={[Autoplay]}
          >
            <SwiperSlide>
              <img src="public\images\babyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\disneyimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\dressimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\eyeloveimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\hotelimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\loungeimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\marcheimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\parlorimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\productsimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\shoesimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\timeimg.jpg" alt=""
                className='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="public\images\weddingimg.jpg" alt=""
                className='' />
            </SwiperSlide>
          </Swiper>
          <div className='grid grid-cols-2 gap-6 p-10 main max-w-[60vw] ml-auto mr-auto'>
            <div className='grid gap-6'>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <span className='text-5xl font-semibold text-slate-800'>Precautions.</span><br />
                <span className='text-5xl font-semibold text-pink-800'>When.</span><br />
                <span className='text-5xl font-semibold text-sky-800'>Registering.</span> <br />

                <span className='text-lg font-light text-slate-600'>
                  Domestic Q-pot. ONLINE It will be a member registration that allows you to use SHOP conveniently.
                  There are various services such as point awarding and membership rank.
                  In addition, you can register for official e-mail newsletters in Japan as well as membership registration.
                  ※Q-pot. Please register as an ONLINE SHOP (domestic) member from here.
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\disneyimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  The unique, colorful designs are pop art
                  with twists and the positive jewelry can make everyone smile.</span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\dressimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  The finest materials and sophisticated skills
                  provide a luxurious experience
                  as high quality as a three stars restaurant.
                </span>
              </div>
            </div>
            <div className='grid gap-6'>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\eyeloveimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  Q-pot.&apos;s unique and original wedding.
                  Helping unique couples live happy lives.
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\hotelimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  Shopping at marché where fresh vegetables and fruits
                  are all available makes your everyday start with excitements.
                  What encounters are you having today?
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\loungeimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  For business, for private, for vacation.
                  A line of fun amenity goods to make
                  your lifestyle more comfortable and enjoyable.
                </span>
              </div>
            </div>
            <div className='grid gap-6'>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\marcheimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  Every time I look at the time, happiness always comes.
                  Every second with Q-pot. is a happy time.
                  Whenever you see the time, you will find the bliss around.
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\parlorimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  When I see something I love, my eyes are hearted!
                  The world seen from the glasses of &quot;eye love Q-pot.&quot; is full of smiles.
                  Pop and sweet eye accessory.
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\productsimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  《Q-pot baby.》
                  Taisetsuna Taisetsuna Communicate with
                  children with smiles.
                </span>
              </div>
            </div>
            <div className='grid gap-6'>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\shoesimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  Positive shoes that make the world smile.
                  Be yourself on any path.
                  Positive shoes that make the world smile.
                  Be yourself and walk your own path.
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\weddingimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'>
                  pread from the inspiration of Q-pot.
                  Disney Story.
                  It invites you
                  to the world of eternal dreams of Q-pot.
                </span>
              </div>
              <div className='flex flex-col items-start justify-start h-auto max-w-full p-5 text-left bg-white rounded-lg gap-x-5'>
                <img src="public\images\babyimg.jpg" alt=""
                  className='w-60 h-60' />
                <span className='text-lg font-light text-slate-600'> profound story woven in the world of Q-pot.
                  Versatile design like pop art with a unique twist.
                  A positive accessory that makes everyone smile.

                  A wonderland with meaningful stories behind.
                  The unique, colorful designs are pop art
                  with twists and the positive jewelry can make everyone smile.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="review">
        <section className="bg-white">
          <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
            <h2
              className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl"
            >
              Read trusted reviews from our customers
            </h2>

            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 md:gap-8">
              <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="object-cover rounded-full h-14 w-14"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
                  rerum incidunt, a consequuntur recusandae ab saepe illo est quia
                  obcaecati neque quibusdam eius accusamus error officiis atque
                  voluptates magnam!
                </p>
              </blockquote>

              <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="object-cover rounded-full h-14 w-14"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
                  rerum incidunt, a consequuntur recusandae ab saepe illo est quia
                  obcaecati neque quibusdam eius accusamus error officiis atque
                  voluptates magnam!
                </p>
              </blockquote>

              <blockquote className="p-6 rounded-lg shadow-sm bg-gray-50 sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="object-cover rounded-full h-14 w-14"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
                  rerum incidunt, a consequuntur recusandae ab saepe illo est quia
                  obcaecati neque quibusdam eius accusamus error officiis atque
                  voluptates magnam!
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
      <div id="contact">
        <div className="relative flex justify-center min-h-[500px] bg-slate-100 items-top sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                    Get in touch
                  </h1>
                  <p className="mt-2 text-lg font-medium text-gray-600 text-normal sm:text-2xl dark:text-gray-400">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                      Acme Inc, Street, State,
                      Postal Code
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                      +44 1234567890
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                      info@acme.org
                    </div>
                  </div>
                </div>

                <form className="flex flex-col justify-center p-6">
                  <div className="flex flex-col">
                    <label className="hidden">Full Name</label>
                    <input type="name" name="name" id="name" placeholder="Full Name" className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-indigo-500 focus:outline-none" />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-indigo-500 focus:outline-none" />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">Number</label>
                    <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-indigo-500 focus:outline-none" />

                  </div>

                  <button type="submit" className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}

export default HomePage