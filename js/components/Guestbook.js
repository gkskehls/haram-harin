import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const renderGuestbook = () => {
    return `
    <section class="py-16 bg-stone-50">
        <div class="max-w-sm mx-auto px-5">
            <h2 class="text-center text-xl font-bold text-rose-400 mb-8 font-dodum">축하 메시지</h2>
            <div class="bg-white p-6 rounded-2xl shadow-sm mb-8 border border-stone-100">
                <input type="text" id="guest-name" placeholder="보내시는 분 성함" class="w-full mb-3 p-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all text-sm font-dodum">
                <textarea id="guest-message" placeholder="하람이와 하린이에게 축하의 한마디를 남겨주세요." class="w-full mb-4 p-3 border border-stone-200 rounded-xl h-24 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all text-sm resize-none font-dodum"></textarea>
                <button id="btn-save-message" class="w-full py-3.5 bg-rose-400 text-white rounded-xl font-bold shadow-sm active:scale-[0.98] transition-all font-dodum">메시지 남기기</button>
            </div>
            <div id="guestbook-list" class="space-y-4">
                <div class="text-center text-gray-400 text-sm py-10">메시지를 불러오고 있습니다...</div>
            </div>
        </div>
    </section>
    `;
};

export const initGuestbook = (app) => {
    const db = getFirestore(app);
    const guestbookList = document.getElementById('guestbook-list');
    const btnSaveMessage = document.getElementById('btn-save-message');

    btnSaveMessage.onclick = async () => {
        const nameInput = document.getElementById('guest-name');
        const messageInput = document.getElementById('guest-message');
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !message) {
            alert("성함과 축하 메시지를 모두 입력해주세요! 😊");
            return;
        }

        btnSaveMessage.disabled = true;
        try {
            await addDoc(collection(db, "guestbook"), {
                name: name,
                message: message,
                timestamp: serverTimestamp()
            });
            nameInput.value = "";
            messageInput.value = "";
        } catch (e) {
            console.error(e);
        } finally {
            btnSaveMessage.disabled = false;
        }
    };

    const q = query(collection(db, "guestbook"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
        guestbookList.innerHTML = "";
        if (querySnapshot.empty) {
            guestbookList.innerHTML = '<div class="text-center text-gray-400 text-sm py-10 font-dodum">첫 번째 축하 메시지를 남겨주세요!</div>';
            return;
        }
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const date = data.timestamp ? new Date(data.timestamp.seconds * 1000).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : "방금 전";
            const item = document.createElement('div');
            item.className = "bg-white p-5 rounded-2xl shadow-sm border border-stone-100";
            item.innerHTML = `
                <div class="flex justify-between items-center mb-2 font-dodum">
                    <span class="font-bold text-rose-400 text-sm">${data.name}</span>
                    <span class="text-[10px] text-gray-400 font-light">${date}</span>
                </div>
                <div class="text-gray-700 text-sm leading-relaxed font-dodum">${data.message.replace(/\n/g, '<br>')}</div>
            `;
            guestbookList.appendChild(item);
        });
    });
};
