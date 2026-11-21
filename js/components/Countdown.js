import { REAL_BIRTHDAY, PARTY_DATE } from "../config.js";

export const renderCountdown = (isInviteMode) => {
    const title = isInviteMode ? "돌잔치까지 남은 시간" : "첫 번째 생일까지 남은 시간";
    return `
    <section class="py-16 bg-rose-50/20 text-center">
        <div class="max-w-sm mx-auto px-5">
            <h3 id="countdown-title" class="text-sm font-semibold text-gray-500 mb-6 font-dodum">${title}</h3>
            <div class="flex justify-center gap-6 text-2xl font-bold text-rose-400" id="countdown">
                <div class="flex flex-col"><span id="days" class="text-4xl font-dodum">00</span><span class="text-[10px] text-gray-500 font-normal mt-1 font-dodum">DAYS</span></div>
                <div class="flex flex-col"><span id="hours" class="text-4xl font-dodum">00</span><span class="text-[10px] text-gray-500 font-normal mt-1 font-dodum">HOURS</span></div>
                <div class="flex flex-col"><span id="minutes" class="text-4xl font-dodum">00</span><span class="text-[10px] text-gray-500 font-normal mt-1 font-dodum">MINS</span></div>
                <div class="flex flex-col"><span id="seconds" class="text-4xl font-dodum">00</span><span class="text-[10px] text-gray-500 font-normal mt-1 font-dodum">SECS</span></div>
            </div>
        </div>
    </section>
    `;
};

export const initCountdown = (isInviteMode) => {
    const targetDateStr = isInviteMode ? PARTY_DATE : REAL_BIRTHDAY;
    const targetStart = new Date(`${targetDateStr}T00:00:00`).getTime();
    const targetEnd = new Date(`${targetDateStr}T23:59:59.999`).getTime();
    let timer = null;

    const update = () => {
        const now = Date.now();
        const distance = targetStart - now;
        const el = document.getElementById("countdown");
        const titleEl = document.getElementById("countdown-title");
        if (!el) return;

        if (now > targetEnd) {
            if (titleEl) {
                titleEl.innerText = "함께해 주셔서 감사합니다";
            }
            const thankYouText = isInviteMode
                ? "하람이와 하린이의 첫돌 잔치에 함께해 주시고<br>따뜻한 마음으로 축복해 주셔서 진심으로 감사합니다. 💕"
                : "하람이와 하린이의 첫 번째 생일을<br>함께 축하해 주신 모든 분들께 진심으로 감사드립니다. 💕";
            el.innerHTML = `<div class="text-base sm:text-lg font-bold text-rose-500 leading-relaxed font-dodum">${thankYouText}</div>`;
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            return;
        }

        if (distance <= 0) {
            el.innerHTML = `<div class='text-xl font-bold text-rose-500 font-dodum'>축하해 주세요! 오늘은 하람 & 하린이의 날입니다! 🎉</div>`;
            return;
        }

        document.getElementById("days").innerText = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
        document.getElementById("hours").innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        document.getElementById("minutes").innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        document.getElementById("seconds").innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    };

    timer = setInterval(update, 1000);
    update();
};
