import './Corousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from 'swiper';
import 'swiper/swiper-bundle.min.css'
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className='carousel-main'> 

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
    spaceBetween={50}
    slidesPerView={1}
    effect='flip'
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide>
        <img className='image-aboutus' src='https://imagizer.imageshack.com/img924/1860/T9Uuqv.jpg' alt='' />
        <p className='text-about'>We present Cognify, the finest companion in your mental health journey!.Experience a new level of mental wellness with Cognify, where the brilliance of AI combines with compassionate support to help you thrive in every aspect of life: experience support, acceptance, companionship and tranquillity.</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='image-aboutus' src='https://imagizer.imageshack.com/img922/315/IXYM4r.jpg' alt=''/>
        <p className='text-about'> Embark on a transformative journey towards enhanced mental well-being with Cognify. Whether you seek support for anxiety, depression, or stress or want to cultivate positive psychological habits, our chatbot is here to assist you. Together, we can break barriers, destigmatize mental health, and create a world where technology empowers us to lead happier and healthier lives. </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='image-aboutus' src='https://imagizer.imageshack.com/img924/3682/8e2rrJ.jpg' alt=''/>
        <p className='text-about'>Cognify is also one of its kind Customer Relationship Management (CRM) tool powered by Artificial Intelligence for mental health professionals and clients to connect and use services both independently and dependently. Cognify can provide patient details, a preliminary diagnosis, and a mental state evaluation before the session begins, simultaneously diagnose, prevent, treat, provide post-therapy relapse prevention treatment, and provide other tools for psychological well-being.</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className='image-aboutus' src='https://imagizer.imageshack.com/img924/6425/nF5CWO.jpg' alt='' />
        <p className='text-about'>Your mental health journey starts here, with Cognify by your side. Experience the future of mental well-being. Join the Cognify community today.</p>
      </SwiperSlide>
      
      
      ...
    </Swiper>
    </ div>
  );
};
