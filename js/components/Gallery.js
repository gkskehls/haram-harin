import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

export const renderGallery = () => {
    return `
    <section class="py-16 bg-white">
        <div class="max-w-sm mx-auto px-5 text-center">
            <h2 class="text-center text-xl font-bold text-rose-400 mb-8 font-dodum italic underline underline-offset-8 decoration-rose-200">Our Photo Gallery</h2>
            
            <div class="grid grid-cols-3 gap-2 mb-6" id="gallery-grid">
                <!-- 사진이 여기에 렌더링됩니다 -->
            </div>

            <!-- 안내 문구 -->
            <div class="py-6 px-4 bg-stone-50 rounded-2xl border border-dashed border-stone-200" id="gallery-notice">
                <p class="text-[11px] text-gray-400 leading-relaxed font-dodum">
                    하람이와 하린이의 소중한 순간들을 정성껏 담고 있습니다.<br>
                    곧 더 많은 사진들로 채워질 예정이니 기대해 주세요! 😊
                </p>
            </div>

            <button id="btn-more" class="w-full mt-6 py-3.5 bg-stone-100 text-gray-500 rounded-xl font-semibold hover:bg-stone-200 transition-colors font-dodum text-sm">
                더보기 (전체보기)
            </button>
        </div>
    </section>

    <!-- 이미지 상세 모달 -->
    <div id="image-modal" class="hidden fixed inset-0 z-50 bg-black/90 flex justify-center items-center backdrop-blur-sm">
        <button id="btn-close-modal" class="absolute top-6 right-6 text-white text-4xl font-light focus:outline-none">&times;</button>
        <button id="btn-prev-img" class="absolute left-3 text-white text-4xl p-2 focus:outline-none opacity-50 hover:opacity-100">&#10094;</button>
        <img id="modal-img" src="" class="max-w-[90%] max-h-[80vh] object-contain rounded-lg shadow-2xl transition-transform duration-300">
        <button id="btn-next-img" class="absolute right-3 text-white text-4xl p-2 focus:outline-none opacity-50 hover:opacity-100">&#10095;</button>
        <div class="absolute bottom-10 text-white text-[10px] tracking-[0.3em] bg-black/40 px-5 py-2 rounded-full font-dodum" id="modal-index">0 / 0</div>
    </div>
    `;
};

export const initGallery = async (app) => {
    const storage = getStorage(app);
    
    // 갤러리에 표시할 사진 리스트 (폴더 경로 포함)
    const imageFiles = [
        'IMG_3197.jpeg', 
        'IMG_3198.jpeg',
        '갤러리/IMG_3320.jpeg' // 새로 추가된 사진
    ];
    const imageUrls = [];

    // Storage에서 URL 가져오기
    for (const filePath of imageFiles) {
        try {
            const url = await getDownloadURL(ref(storage, filePath));
            imageUrls.push(url);
        } catch (e) {
            console.error("Gallery image load failed:", filePath, e);
        }
    }

    let isExpanded = false;
    let currentIndex = 0;
    const grid = document.getElementById("gallery-grid");
    const btnMore = document.getElementById("btn-more");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const modalIndex = document.getElementById("modal-index");
    const notice = document.getElementById("gallery-notice");

    const render = () => {
        if (!grid) return;
        grid.innerHTML = "";
        
        // 사진이 6개 이하일 때의 노출 로직
        const limit = isExpanded ? imageUrls.length : 6;
        const displayCount = Math.min(limit, imageUrls.length);

        for (let i = 0; i < displayCount; i++) {
            const img = document.createElement("img");
            img.src = imageUrls[i];
            img.className = "aspect-square object-cover rounded-xl shadow-sm bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity border border-stone-50";
            img.onclick = () => openModal(i);
            grid.appendChild(img);
        }
        
        // 더보기 버튼 제어
        if (imageUrls.length <= 6 || isExpanded) {
            if (btnMore) btnMore.style.display = "none";
        }

        // 사진이 어느 정도 차면 안내 문구 숨기기 (선택 사항)
        // if (imageUrls.length >= 9 && notice) notice.style.display = "none";
    };

    const openModal = (index) => {
        currentIndex = index;
        updateModal();
        modal.classList.remove("hidden");
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add("hidden");
        document.body.style.overflow = 'auto';
    };

    const updateModal = () => {
        if (imageUrls.length > 0) {
            modalImg.src = imageUrls[currentIndex];
            modalIndex.innerText = `${currentIndex + 1} / ${imageUrls.length}`;
        }
    };

    if (btnMore) btnMore.onclick = () => { isExpanded = true; render(); };
    
    const closeBtn = document.getElementById('btn-close-modal');
    if (closeBtn) closeBtn.onclick = closeModal;

    const prevBtn = document.getElementById('btn-prev-img');
    if (prevBtn) prevBtn.onclick = () => { 
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length; 
        updateModal(); 
    };

    const nextBtn = document.getElementById('btn-next-img');
    if (nextBtn) nextBtn.onclick = () => { 
        currentIndex = (currentIndex + 1) % imageUrls.length; 
        updateModal(); 
    };

    if (modal) {
        modal.onclick = (e) => { if(e.target === modal) closeModal(); };
    }

    render();
};
