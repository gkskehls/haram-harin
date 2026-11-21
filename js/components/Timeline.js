export const renderTimeline = () => {
    return `
    <section class="py-20 bg-stone-50 overflow-hidden">
        <div class="max-w-sm mx-auto px-5">
            <h2 class="text-center text-xl font-bold text-rose-400 mb-12 font-dodum">1년의 기록</h2>
            <div class="relative w-full">
                <!-- 중앙선 -->
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200/50"></div>
                
                <div class="space-y-16 relative flex flex-col w-full">
                    
                    <!-- 1. 2025. 02. 14 : 초음파 -->
                    <div class="flex items-center w-full timeline-item gap-4">
                        <div class="w-[45%] timeline-text">
                            <p class="text-xs font-bold text-rose-500 mb-1 font-dodum">2025. 02. 14</p>
                            <p class="text-[11px] text-gray-600 leading-relaxed font-dodum">두 개의 작은 기적을<br>처음 마주한 날</p>
                        </div>
                        <div class="w-[10%] flex justify-center relative z-10">
                            <div class="w-3 h-3 bg-rose-400 rounded-full ring-4 ring-stone-50 shadow-sm"></div>
                        </div>
                        <div class="w-[45%]">
                            <img src="pic/IMG_4248.jpeg" class="w-full aspect-square object-cover rounded-2xl shadow-md border border-white mx-auto">
                        </div>
                    </div>

                    <!-- 2. 2025. 09. 11 : 출산 직전 -->
                    <div class="flex items-center w-full timeline-item gap-4">
                        <div class="w-[45%] timeline-text">
                            <p class="text-xs font-bold text-rose-500 mb-1 font-dodum">2025. 09. 11</p>
                            <p class="text-[11px] text-gray-600 leading-relaxed font-dodum">너희를 만나기 직전,<br>가장 설레던 기다림</p>
                        </div>
                        <div class="w-[10%] flex justify-center relative z-10">
                            <div class="w-3 h-3 bg-rose-400 rounded-full ring-4 ring-stone-50 shadow-sm"></div>
                        </div>
                        <div class="w-[45%]">
                            <img src="pic/IMG_3189.jpeg" class="w-full aspect-square object-cover rounded-2xl shadow-md border border-white mx-auto">
                        </div>
                    </div>

                    <!-- 3. 2025. 09. 11 : 탄생 -->
                    <div class="flex items-center w-full timeline-item gap-4">
                        <div class="w-[45%] timeline-text">
                            <p class="text-xs font-bold text-rose-500 mb-1 font-dodum">2025. 09. 11</p>
                            <p class="text-[11px] text-gray-600 leading-relaxed font-dodum">설레는 기다림 끝에<br>세상과 처음 만난 날</p>
                        </div>
                        <div class="w-[10%] flex justify-center relative z-10">
                            <div class="w-3 h-3 bg-rose-400 rounded-full ring-4 ring-stone-50 shadow-sm"></div>
                        </div>
                        <div class="w-[45%]">
                            <img src="pic/IMG_3188.jpeg" class="w-full aspect-square object-cover rounded-2xl shadow-md border border-white mx-auto">
                        </div>
                    </div>

                    <!-- 4. 2025. 10. 30 : 50일 -->
                    <div class="flex items-center w-full timeline-item gap-4">
                        <div class="w-[45%] timeline-text">
                            <p class="text-xs font-bold text-rose-500 mb-1 font-dodum">2025. 10. 30</p>
                            <p class="text-[11px] text-gray-600 leading-relaxed font-dodum">작은 손과 발,<br>어느덧 맞이한 50일</p>
                        </div>
                        <div class="w-[10%] flex justify-center relative z-10">
                            <div class="w-3 h-3 bg-rose-400 rounded-full ring-4 ring-stone-50 shadow-sm"></div>
                        </div>
                        <div class="w-[45%]">
                            <img src="pic/IMG_3196.jpeg" class="w-full aspect-square object-cover rounded-2xl shadow-md border border-white mx-auto">
                        </div>
                    </div>

                    <!-- 5. 2025. 12. 20 : 100일 -->
                    <div class="flex items-center w-full timeline-item gap-4">
                        <div class="w-[45%] timeline-text">
                            <p class="text-xs font-bold text-rose-500 mb-1 font-dodum">2025. 12. 20</p>
                            <p class="text-[11px] text-gray-600 leading-relaxed font-dodum">백 일간의 기적,<br>더 크고 소중해진 우리</p>
                        </div>
                        <div class="w-[10%] flex justify-center relative z-10">
                            <div class="w-3 h-3 bg-rose-400 rounded-full ring-4 ring-stone-50 shadow-sm"></div>
                        </div>
                        <div class="w-[45%]">
                            <img src="pic/IMG_3267.jpeg" class="w-full aspect-square object-cover rounded-2xl shadow-md border border-white mx-auto">
                        </div>
                    </div>

                    <!-- 6. 2026. 07. 08 : 돌 기념 촬영 -->
                    <div class="flex items-center w-full timeline-item gap-4">
                        <div class="w-[45%] timeline-text">
                            <p class="text-xs font-bold text-rose-500 mb-1 font-dodum">2026. 07. 08</p>
                            <p class="text-[11px] text-gray-600 leading-relaxed font-dodum">첫 생일을 준비하며<br>담아본 환한 미소</p>
                        </div>
                        <div class="w-[10%] flex justify-center relative z-10">
                            <div class="w-3 h-3 bg-rose-400 rounded-full ring-4 ring-stone-50 shadow-sm"></div>
                        </div>
                        <div class="w-[45%]">
                            <img src="pic/IMG_3283.jpeg" class="w-full aspect-square object-cover rounded-2xl shadow-md border border-white mx-auto">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    `;
};

// 로컬 이미지 방식이므로 초기화 로직이 필요 없음
export const initTimeline = () => {
    // 필요한 경우 여기에 추가 로직 작성
};
