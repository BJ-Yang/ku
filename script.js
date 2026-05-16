    window.onload=function(){
      document.getElementById("navBar").innerHTML =`<nav class="navBar">
        <div class="logo">風火倫の進擊</div>
        <div class="menu-toggle" id="menuOpen">☰</div>
    </nav>`;


    
      document.getElementById("sliderMenu").innerHTML =`    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="close-btn" id="menuClose">✕</div>
        </div>
        <ul class="sidebar-links">
            <li><a href="index.html">首頁 <span>›</span></a></li>
            <li><a href="courses.html">課程簡介 <span>›</span></a></li>
            <li><a href="coach.html">教練簡介 <span>›</span></a></li>
            <li><a href="tools.html">配速工具 <span>›</span></a></li>
            <li><a href="training.html">訓練日誌 <span>›</span></a></li>
            <li><a href="match.html">賽事日誌 <span>›</span></a></li>
        </ul>
        <div class="sidebar-footer">
            <p>成為會員，獲得啟發並掌握運動界相關動態。</p>
            <button class="btn btn-dark">加入我們</button>
        </div>
    </div>`;

    // --- 4. 側邊欄選單控制 (Sidebar Control) ---
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // 開啟選單函式
    function openSidebar() {
        sidebar.classList.add('active');     // 讓選單從旁邊滑入
        overlay.classList.add('active');     // 顯示深色遮罩
        body.classList.add('no-scroll');    // 防止背景網頁跟著捲動 (需配合 CSS overflow: hidden)
    }

    // 關閉選單函式
    function closeSidebar() {
        sidebar.classList.remove('active');  // 讓選單滑出畫面
        overlay.classList.remove('active');  // 隱藏深色遮罩
        body.classList.remove('no-scroll'); // 恢復背景網頁捲動
    }

    // 綁定點擊事件
    menuOpen.addEventListener('click', openSidebar);   // 點擊 ☰ 開啟
    menuClose.addEventListener('click', closeSidebar); // 點擊 ✕ 關閉
    overlay.addEventListener('click', closeSidebar);   // 點擊背景遮罩也能關閉


    }

    


// 平滑捲動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 簡單的導覽列陰影效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const body = document.body;

// 開啟選單
function openSidebar() {
    console.log('click open side menu------');
    sidebar.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('no-scroll'); // 防止底層網頁捲動

    


}

// 關閉選單
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
}

menuOpen.addEventListener('click', openSidebar);
menuClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar); // 點擊深色遮罩也能關閉

// 監聽網頁顯示事件（包含從瀏覽器快取/按上一頁回復的情況）
window.addEventListener('pageshow', function (event) {
    // event.persisted 如果是 true，代表網頁是從瀏覽器的記憶體暫存（BFCache）拉出來的
    if (event.persisted) {
        // 直接執行你寫好的關閉選單函式，把所有狀態一次重設！
        closeSidebar();
    }
});