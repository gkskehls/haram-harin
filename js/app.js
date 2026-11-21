import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { firebaseConfig } from "./config.js";

// 컴포넌트 임포트
import { renderHeader } from "./components/Header.js";
import { renderInvitation } from "./components/Invitation.js";
import { renderTimeline, initTimeline } from "./components/Timeline.js";
import { renderMap, initMap } from "./components/Map.js";
import { renderCalendar } from "./components/Calendar.js";
import { renderCountdown, initCountdown } from "./components/Countdown.js";
import { renderGallery, initGallery } from "./components/Gallery.js";
import { renderGuestbook, initGuestbook } from "./components/Guestbook.js";

// 1. Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. 모드 판별
const urlParams = new URLSearchParams(window.location.search);
const isInviteMode = urlParams.has('invite');

// 3. 전체 렌더링
const root = document.getElementById("app");
if (root) {
    let content = "";
    content += renderHeader(isInviteMode);
    content += renderInvitation();
    content += renderTimeline();
    
    if (isInviteMode) {
        content += renderMap();
    }
    
    content += renderCalendar(isInviteMode); // 날짜 인자 추가
    content += renderCountdown(isInviteMode); // 날짜 인자 추가
    content += renderGallery();
    content += renderGuestbook();
    content += `
        <footer class="bg-stone-100 py-10 text-center border-t border-stone-200">
            <p class="text-gray-500 text-sm mb-2 font-bold font-dodum">하람 & 하린 첫돌 기록</p>
            <p class="text-gray-400 text-[10px]">© 2026. Made with Love.</p>
        </footer>
    `;

    root.innerHTML = content;

    // 4. 로직 초기화
    initTimeline(app);
    if (isInviteMode) initMap();
    initCountdown(isInviteMode); // 날짜 인자 추가
    initGallery();
    initGuestbook(app);
}
