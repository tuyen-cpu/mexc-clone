import React, {useState, useEffect} from 'react';

const CountdownTimer = ({days, hours, minutes, seconds}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: days || 0,
        hours: hours || 0,
        minutes: minutes || 0,
        seconds: seconds || 0,
    });

    useEffect(() => {
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + timeLeft.days);
        countDownDate.setHours(countDownDate.getHours() + timeLeft.hours);
        countDownDate.setMinutes(countDownDate.getMinutes() + timeLeft.minutes);
        countDownDate.setSeconds(countDownDate.getSeconds() + timeLeft.seconds);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({days, hours, minutes, seconds});
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div>
            <div
                className="price_hotListPrice__wMs3R count-down_countdown__x6uQ4 count-down_countdown-size__m__281lC count-down_countdown-responsive__99lYa count-down_countdown-color-primary__7B_p0 countdown">
                <div className="count-down_countdown-content__0juoW countdown-content">
                    <div className="count-down_countdown-title__dFAlT countdown-title"><span
                        className="count-down_countdown-title-text__LW70v countdown-title-text">Bắt đầu sau:</span>
                    </div>
                    <div dir="ltr" className="count-down_countdown-middle-content__sRyeH countdown-middle-content">
                        <span>{timeLeft.days.toString().padStart(2, '0')} </span>
                        <b dir="ltr" className="count-down_countdown-unit-label__fH_cq">Ngày</b>
                        <span>{timeLeft.hours.toString().padStart(2, '0')}</span><b
                        dir="ltr" className="count-down_countdown-unit-label__fH_cq">giờ</b>
                        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        <b dir="ltr"
                           className="count-down_countdown-unit-label__fH_cq">phút</b>
                        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        <b dir="ltr" className="count-down_countdown-unit-label__fH_cq">giây</b></div>
                    <div className="count-down_countdown-small-content__ZSJoO countdown-small-content">
                       </div>
                </div>
            </div>
           </div>
    );
};

export default CountdownTimer;