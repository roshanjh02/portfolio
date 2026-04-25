
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Ye wahi details hain jo aapke HTML mein thi
const firebaseConfig = {
    apiKey: "AIzaSyAVk-58GZAOz hS-n-v-p28Z6G08",
    authDomain: "pixicraft-ai.firebaseapp.com",
    projectId: "pixicraft-ai",
    storageBucket: "pixicraft-ai.appspot.com",
    messagingSenderId: "319768666868",
    appId: "1:319768666868:web:9d24768fc69768565da3a5",
    databaseURL: "https://pixicraft-ai-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Ye function database mein "clicks" naam ka folder banayega
window.recordClick = function(name) {
    const clickRef = ref(database, 'clicks/' + name);
    set(clickRef, {
        time: new Date().toLocaleString(),
        user: "Visitor"
    }).then(() => {
        alert("Data sent! Ab Firebase Data tab check karo.");
    });
}
// Ye code buttons ko click hote hi database se connect karega
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const skillName = card.querySelector('h3').innerText;
        window.recordClick(skillName);
    });
});
