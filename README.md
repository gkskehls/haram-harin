# 👶 하람 & 하린 첫돌 기록 프로젝트 파일 가이드
firebase deploy
이 프로젝트는 하나의 소스로 '축하 페이지'와 '돌잔치 초대장' 두 가지 모드를 지원합니다.

## 🔗 접속 주소 안내
*   **기본 축하 페이지**: `https://haram-harin.web.app`
    *   아이들의 성장 기록 위주로 보여주며, 상세 시간/장소/지도는 숨겨집니다.
*   **돌잔치 초대장**: `https://haram-harin.web.app?invite`
    *   주소 끝에 `?invite`를 붙이면 상세 행사 정보와 지도가 나타납니다.

## 📁 주요 파일 구조

### 📍 Root Directory
*   **`index.html`**: 웹 초대장의 메인 뼈대입니다.
*   **`README.md`**: 프로젝트 설명서 (현재 파일).

### 📍 `/js` (메인 로직)
*   **`config.js`**: Firebase 및 네이버 지도 설정값 관리.
*   **`app.js`**: `?invite` 유무에 따른 **모드 전환(isInviteMode)** 및 컴포넌트 조립 담당.

### 📍 `/js/components` (각 영역별 모듈)
*   **`Header.js`**: 상단 사진 및 일시 정보 (초대 모드 시 시간/장소 추가 노출).
*   **`Map.js`**: 오시는 길 지도 (초대 모드에서만 렌더링).
*   **`Timeline.js`, `Guestbook.js` 등**: 공통 콘텐츠 모듈.

---

## 🛠 유지보수 팁
1.  **문구 수정**: `js/components/` 내의 해당 파일을 수정하세요.
2.  **모드별 노출 제어**: `js/app.js`의 `isInviteMode` 조건문을 확인하세요.
3.  **장소 확정 시**: `js/components/Header.js`와 `Map.js`의 텍스트 및 좌표를 수정하면 됩니다.
