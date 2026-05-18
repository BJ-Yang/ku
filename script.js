window.onload = function () {
    // === 1. 渲染導覽列 ===
    document.getElementById("navBar").innerHTML = `
    <nav class="navBar">
        <div class="logo">風火倫の進擊</div>
        <div class="menu-toggle" id="menuOpen">☰</div>
    </nav>`;

    // === 2. 渲染側邊欄 ===
    document.getElementById("sliderMenu").innerHTML = `    
    <div class="sidebar" id="sidebar">
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
            <button class="btn btn-dark">加入我們</button>
        </div>
    </div>`;

    // === 3. 側邊欄選單控制 (DOM 元素必須在 innerHTML 執行完後才抓得到) ===
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // 開啟選單函式
    function openSidebar() {
        console.log('click open side menu------');
        if (sidebar) sidebar.classList.add('active');     // 加上安全防護防 null
        if (overlay) overlay.classList.add('active');     
        body.classList.add('no-scroll');    
    }

    // 關閉選單函式
    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('active');  
        if (overlay) overlay.classList.remove('active');  
        body.classList.remove('no-scroll'); 
    }

    // 綁定點擊事件 (防禦性寫法：確定抓得到元件才綁定)
    if (menuOpen) menuOpen.addEventListener('click', openSidebar);   
    if (menuClose) menuClose.addEventListener('click', closeSidebar); 
    if (overlay) overlay.addEventListener('click', closeSidebar);   

    // 監聽網頁顯示事件（處理上一頁快取回復的情況）
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            closeSidebar();
        }
    });
}

// === 4. 平滑捲動效果 (不依賴動態生成的標籤，可以放外面) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// === 5. 簡單的導覽列陰影效果 ===
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navBar'); // 注意：你上面 innerHTML 寫的是大寫 .navBar，這裡同步修正
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});