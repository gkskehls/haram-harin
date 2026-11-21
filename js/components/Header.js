import { REAL_BIRTHDAY, PARTY_DATE, PARTY_TIME } from "../config.js";

export const renderHeader = (isInviteMode) => {
    // 날짜 포맷팅 (예: 2026. 09. 11)
    const dateStr = isInviteMode ? PARTY_DATE : REAL_BIRTHDAY;
    const formattedDate = dateStr.replace(/-/g, ". ");
    
    // 요일 계산
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][new Date(dateStr).getDay()];
    
    let subInfo = "";
    if (isInviteMode) {
        subInfo = `
            <p class="text-lg text-rose-500 font-semibold mb-1">${PARTY_TIME}</p>
            <p class="text-lg text-rose-500 font-semibold mb-1">장소 미정 (추후 안내 예정)</p>
            <p class="text-[11px] text-gray-500 mt-2 font-normal">귀한 걸음 하시어 하람&하린이의 첫걸음을 축복해 주세요.</p>
        `;
    } else {
        subInfo = `
            <p class="text-lg text-rose-400 font-medium italic">Happy 1st Birthday!</p>
            <p class="text-sm text-gray-500 mt-1 font-normal">하람이와 하린이가 태어난 지 1년 되는 날</p>
        `;
    }

    return `
    <header class="w-full">
        <section class="w-full">
            <img src="pic/pic1.png" alt="Main Photo" class="w-full h-auto block">
        </section>

        <section class="py-12 bg-white text-center border-b border-stone-50">
            <div class="max-w-sm mx-auto px-5">
                <h2 class="text-2xl font-bold text-gray-900 mb-2 font-dodum">${formattedDate} (${dayOfWeek})</h2>
                ${subInfo}
            </div>
        </section>
    </header>
    `;
};
