import React from 'react';
import { Button } from '../ui/button';
interface Props {
title?: string;
}
const StoreOverview: React.FC<Props> = ({ }) => {
return (<article className="relative flex flex-col justify-between items-center bg-[url('/images/washerBG.png')] bg-cover bg-center text-white min-h-[500px] mt-7 before:absolute before:inset-0 before:bg-black/50 before:z-0">
    <ul className='relative z-10 max-w-[70%] mt-[5rem]'>
        <li><h2 className='text-[32px]'>P.S.L. - надійність, якість, доступність</h2></li>
        <li><h4 className='text-[22px]'>Все, що потрібно для повноцінної роботи автомийки або вирішення різних побутових завдань в одному місці</h4></li>
        <li><p className='text-[16px]'>Наш інтернет-магазин - місце, де будь-хто може замовити автохімію, мийне обладнання або або аксесуари для нього за доступними цінами. Ретельно підібраний асортимент допоможе задовольнити потреби абсолютно кожного клієнта. Менеджери завжди готові відповісти на всі ваші запитання і допомогти обрати відповідний товар. Доставка максимально швидка в будь-який регіон країни. Є гнучка система знижок.</p></li>
        <li className='flex justify-center mt-[2rem]'>
        <Button size="xl" className="w-[220px] font-bold" variant="default">
                <a
                  href="https://github.com/lucky-chap/kaminari"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 text-zinc-100 dark:text-zinc-800"
                >
                  Асортимент
                </a>{" "}
              </Button>
        </li>
    </ul>
    <svg
  className="relative z-10 fill-[#e0dede] dark:fill-[#393838]"
  viewBox="0 0 1439 178"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 43.418h288c96 0 192 0 288 26.7 96 26.3 192 80.3 288 69.3s192-85 288-117.3c96-31.7 192-21.7 240-16l48 5.3V180H0z"></path>
</svg>
</article>

 );
};
export default StoreOverview;
{/* <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg"> <path d="M0 43.418h288c96 0 192 0 288 26.7 96 26.3 192 80.3 288 69.3s192-85 288-117.3c96-31.7 192-21.7 240-16l48 5.3V180H0z"> </path> </svg> */}