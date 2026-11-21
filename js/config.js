export const firebaseConfig = {
    apiKey: "AIzaSyDmhcITAKopnHKeEnkq0W9jV7o_H-ytneQ",
    authDomain: "haram-harin.firebaseapp.com",
    projectId: "haram-harin",
    storageBucket: "haram-harin.firebasestorage.app",
    messagingSenderId: "503312945551",
    appId: "1:503312945551:web:8b7f3a14f473934c4b7bfa",
    measurementId: "G-SECHNN0SRT"
};

export const naverMapClientId = "sljbc1x8t9";

export const loadFirebaseConfig = async () => {
    try {
        const res = await fetch('/api/config');
        if (res.ok) {
            const contentType = res.headers.get('content-type') || '';
            if (contentType.includes('application/json')) {
                const data = await res.json();
                if (data?.firebaseConfig) {
                    for (const [key, value] of Object.entries(data.firebaseConfig)) {
                        if (value) {
                            firebaseConfig[key] = value;
                        }
                    }
                }
            }
        }
    } catch {
        // 정적 호스팅(Firebase Hosting) 등 백엔드가 없는 환경에서는 기본 설정 사용
    }
    return firebaseConfig;
};

// 날짜 설정
export const REAL_BIRTHDAY = "2026-09-11"; // 실제 첫 생일
export const PARTY_DATE = "2026-08-29";    // 돌잔치 당일 (8월 말 임시)
export const PARTY_TIME = "오전 11:30";
