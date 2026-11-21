import { REAL_BIRTHDAY, PARTY_DATE } from "../config.js";

export const renderCalendar = (isInviteMode) => {
    const targetDateStr = isInviteMode ? PARTY_DATE : REAL_BIRTHDAY;
    const targetDate = new Date(`${targetDateStr}T00:00:00`);
    
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth(); // 0-11
    const day = targetDate.getDate();
    
    const monthNameEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
    const title = isInviteMode ? "Party Calendar" : "Birthday Calendar";

    // 달력 날짜 생성 로직
    const generateDays = () => {
        let daysHtml = "";
        const firstDay = new Date(year, month, 1).getDay(); // 월 시작 요일 (0:일 ~ 6:토)
        const lastDate = new Date(year, month + 1, 0).getDate(); // 월 마지막 날짜

        // 시작 전 공백
        for (let i = 0; i < firstDay; i++) {
            daysHtml += "<div></div>";
        }

        // 날짜 채우기
        for (let i = 1; i <= lastDate; i++) {
            const currentDay = new Date(year, month, i).getDay();
            let className = "text-gray-700";
            if (currentDay === 0) className = "text-red-400"; // 일요일
            if (currentDay === 6) className = "text-blue-400"; // 토요일
            
            if (i === day) {
                daysHtml += `
                <div class="relative w-8 h-8 flex justify-center items-center">
                    <span class="absolute inset-0 bg-rose-400 rounded-full shadow-md animate-pulse"></span>
                    <span class="relative text-white font-bold">${i}</span>
                </div>
                `;
            } else {
                daysHtml += `<div class="${className}">${i}</div>`;
            }
        }
        return daysHtml;
    };

    return `
    <section class="py-16 bg-stone-50 text-center border-y border-stone-100">
        <div class="max-w-sm mx-auto px-5">
            <h2 class="text-xl text-rose-400 font-bold mb-8 font-dodum italic">${title}</h2>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div class="text-lg font-semibold text-gray-700 mb-5 font-dodum">${month + 1}월 (${monthNameEng})</div>
                <div class="grid grid-cols-7 gap-2 text-sm text-gray-500 mb-3 font-medium font-dodum">
                    <div class="text-red-400">일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div class="text-blue-400">토</div>
                </div>
                <div class="grid grid-cols-7 gap-y-4 gap-x-2 text-gray-700 text-base items-center justify-items-center font-dodum">
                    ${generateDays()}
                </div>
            </div>
        </div>
    </section>
    `;
};
