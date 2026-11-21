export const renderMap = () => {
    return `
    <section class="py-16 bg-white">
        <div class="max-w-sm mx-auto px-5 text-center">
            <h2 class="text-xl text-rose-400 font-bold mb-8 font-dodum">오시는 길</h2>
            <div id="map" class="w-full aspect-square rounded-2xl mb-6 shadow-sm border border-stone-100 bg-stone-50 overflow-hidden"></div>
            <div class="text-left mb-6 px-1">
                <p class="text-sm font-bold text-gray-800">메이필드 호텔</p>
                <p class="text-xs text-gray-500 mt-1">서울 강서구 방화대로 94</p>
            </div>
            <div class="flex gap-2">
                <a href="https://map.naver.com/v5/search/%EB%A9%94%EC%9D%B4%ED%95%84%EB%93%9C%ED%98%B8%ED%85%94" target="_blank" class="flex-1 py-3 bg-[#03C75A] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2">네이버 지도</a>
                <a href="https://map.kakao.com/link/search/%EB%A9%94%EC%9D%B4%ED%95%84%EB%93%9C%ED%98%B8%ED%85%94" target="_blank" class="flex-1 py-3 bg-[#FEE500] text-[#3C1E1E] rounded-xl font-bold text-sm flex items-center justify-center gap-2">카카오맵</a>
            </div>
        </div>
    </section>
    `;
};

export const initMap = () => {
    if (typeof naver !== 'undefined') {
        const mapOptions = {
            center: new naver.maps.LatLng(37.5458, 126.8153),
            zoom: 16,
            minZoom: 10,
            zoomControl: true,
            scrollWheel: false
        };
        const map = new naver.maps.Map('map', mapOptions);
        new naver.maps.Marker({
            position: new naver.maps.LatLng(37.5458, 126.8153),
            map: map,
            title: '메이필드 호텔'
        });
    }
};
