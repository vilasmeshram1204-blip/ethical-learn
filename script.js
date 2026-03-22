// All tools data
const allToolsData = [
    { name: "Nmap", page: "tools/nmap.html", category: "1️⃣ Information Gathering Tools", command: "nmap -sV target.com" },
    { name: "Maltego", page: "tools/maltego.html", category: "1️⃣ Information Gathering Tools", command: "Graphical OSINT tool" },
    { name: "theHarvester", page: "tools/theharvester.html", category: "1️⃣ Information Gathering Tools", command: "theHarvester -d target.com -b google" },
    { name: "Recon-ng", page: "tools/recon-ng.html", category: "1️⃣ Information Gathering Tools", command: "recon-ng" },
    { name: "dnsenum", page: "tools/dnsenum.html", category: "1️⃣ Information Gathering Tools", command: "dnsenum target.com" },
    { name: "dnsrecon", page: "tools/dnsrecon.html", category: "1️⃣ Information Gathering Tools", command: "dnsrecon -d target.com" },
    { name: "Nikto", page: "tools/nikto.html", category: "2️⃣ Vulnerability Analysis", command: "nikto -h target.com" },
    { name: "OpenVAS", page: "tools/openvas.html", category: "2️⃣ Vulnerability Analysis", command: "gvm-cli" },
    { name: "OWASP ZAP", page: "tools/owasp-zap.html", category: "2️⃣ Vulnerability Analysis", command: "zap.sh" },
    { name: "SQLmap", page: "tools/sqlmap.html", category: "2️⃣ Vulnerability Analysis", command: "sqlmap -u target.com?id=1" },
    { name: "Burp Suite", page: "tools/burpsuite.html", category: "3️⃣ Web Application Attacks", command: "burpsuite" },
    { name: "Commix", page: "tools/commix.html", category: "3️⃣ Web Application Attacks", command: "commix --url target.com" },
    { name: "Skipfish", page: "tools/skipfish.html", category: "3️⃣ Web Application Attacks", command: "skipfish -o output target.com" },
    { name: "Wfuzz", page: "tools/wfuzz.html", category: "3️⃣ Web Application Attacks", command: "wfuzz -c -z file,wordlist.txt target.com/FUZZ" },
    { name: "Hydra", page: "tools/hydra.html", category: "4️⃣ Password Attacks", command: "hydra -l user -P pass.txt target.com ssh" },
    { name: "Hashcat", page: "tools/hashcat.html", category: "4️⃣ Password Attacks", command: "hashcat -m 0 hash.txt rockyou.txt" },
    { name: "John the Ripper", page: "tools/john-the-ripper.html", category: "4️⃣ Password Attacks", command: "john hash.txt" },
    { name: "Medusa", page: "tools/medusa.html", category: "4️⃣ Password Attacks", command: "medusa -h target.com -u admin -P pass.txt" },
    { name: "Aircrack-ng", page: "tools/aircrack-ng.html", category: "5️⃣ Wireless Attacks", command: "aircrack-ng capture.cap" },
    { name: "Reaver", page: "tools/reaver.html", category: "5️⃣ Wireless Attacks", command: "reaver -i wlan0mon -b MAC" },
    { name: "Kismet", page: "tools/kismet.html", category: "5️⃣ Wireless Attacks", command: "kismet" },
    { name: "Wifite", page: "tools/wifite.html", category: "5️⃣ Wireless Attacks", command: "wifite" },
    { name: "Metasploit", page: "tools/metasploit.html", category: "6️⃣ Exploitation Tools", command: "msfconsole" },
    { name: "BeEF", page: "tools/beef.html", category: "6️⃣ Exploitation Tools", command: "beef-xss" },
    { name: "Armitage", page: "tools/armitage.html", category: "6️⃣ Exploitation Tools", command: "armitage" },
    { name: "Wireshark", page: "tools/wireshark.html", category: "7️⃣ Sniffing & Spoofing", command: "wireshark" },
    { name: "Ettercap", page: "tools/ettercap.html", category: "7️⃣ Sniffing & Spoofing", command: "ettercap -T -M arp:remote" },
    { name: "Bettercap", page: "tools/bettercap.html", category: "7️⃣ Sniffing & Spoofing", command: "bettercap" },
    { name: "Autopsy", page: "tools/autopsy.html", category: "8️⃣ Forensics Tools", command: "autopsy" },
    { name: "Binwalk", page: "tools/binwalk.html", category: "8️⃣ Forensics Tools", command: "binwalk firmware.bin" },
    { name: "Foremost", page: "tools/foremost.html", category: "8️⃣ Forensics Tools", command: "foremost -i disk.dd" }
];

// Generate tools grid for overlay
function renderToolsGrid() {
    const container = document.getElementById("dynamicToolsGrid");
    if (!container) return;
    
    const categories = {};
    allToolsData.forEach(tool => {
        if (!categories[tool.category]) categories[tool.category] = [];
        categories[tool.category].push(tool);
    });
    
    let html = "";
    for (const [category, tools] of Object.entries(categories)) {
        html += `<div class="tool-category"><h3>${category}</h3><ul class="tool-list">`;
        tools.forEach(tool => {
            let filename = tool.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
            if (tool.name === "John the Ripper") filename = "john-the-ripper";
            if (tool.name === "OWASP ZAP") filename = "owasp-zap";
            if (tool.name === "Burp Suite") filename = "burpsuite";
            if (tool.name === "Recon-ng") filename = "recon-ng";
            if (tool.name === "theHarvester") filename = "theharvester";
            if (tool.name === "Aircrack-ng") filename = "aircrack-ng";
            html += `<li><a href="${tool.page}">🔧 ${tool.name}</a></li>`;
        });
        html += `</ul></div>`;
    }
    container.innerHTML = html;
}

// Close overlay
function closeOverlay() {
    const overlay = document.getElementById("toolsOverlay");
    if (overlay) overlay.classList.remove("open");
}

// Open overlay
function openOverlay() {
    const overlay = document.getElementById("toolsOverlay");
    if (overlay) {
        renderToolsGrid();
        overlay.classList.add("open");
    }
}

// Load home page
function loadHomePage() {
    const mainContainer = document.getElementById("appMain");
    if (mainContainer) {
        mainContainer.innerHTML = `
            <div class="main-content">
                <div class="hero">
                    <h2>⚡ Ethical Learn — Security Tools Hub</h2>
                    <p>Empower your security journey with ${allToolsData.length}+ ethical hacking tools.</p>
                    <button id="exploreToolsHero" class="menu-btn" style="margin-top:1rem;">🚀 Explore All Tools</button>
                </div>
                
                <div class="two-column">
                    <div class="main-column">
                        <div class="tool-showcase">
                            <h3>📌 All Security Tools (${allToolsData.length} tools)</h3>
                            <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:0.8rem; margin-top:1rem;">
                                ${allToolsData.map(tool => `<a href="${tool.page}" style="background:#eef2fa; border-radius:1rem; padding:0.8rem; text-decoration:none; color:#1f6392; display:block; text-align:center;">🔧 ${tool.name}</a>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-column">
                        <div class="sidebar">
                            <h3 style="margin-bottom:1rem;">📢 Advertisement</h3>
                            <div class="ad-container">
                                <ins class="adsbygoogle"
                                     style="display:block"
                                     data-ad-client="ca-pub-XXXXXXXXXXXXXX"
                                     data-ad-slot="XXXXXXXXXX"
                                     data-ad-format="rectangle"
                                     data-full-width-responsive="true"></ins>
                                <script>
                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                </script>
                            </div>
                            <p style="font-size:0.8rem; color:#666; text-align:center; margin-top:1rem;">Support us by allowing ads</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        const exploreBtn = document.getElementById("exploreToolsHero");
        if (exploreBtn) exploreBtn.addEventListener("click", () => openOverlay());
    }
    document.title = "Ethical Learn | Cyber Security Toolkit";
}

// Load about page
function loadAboutPage() {
    window.location.href = "about.html";
}

// Load comment page (now contact)
function loadCommentPage() {
    window.location.href = "contact.html";
}

// Initialize ads (lazy loading)
function initAds() {
    if (typeof adsbygoogle !== 'undefined') {
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch(e) {}
    }
}

// Mobile menu
function initMobileMenu() {
    const mobileToggle = document.getElementById("mobileMenuToggle");
    const mobilePanel = document.getElementById("mobileMenuPanel");
    if (mobileToggle && mobilePanel) {
        mobileToggle.addEventListener("click", () => {
            mobilePanel.style.display = mobilePanel.style.display === "none" || mobilePanel.style.display === "" ? "flex" : "none";
        });
        document.getElementById("mobileHome")?.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
        document.getElementById("mobileTools")?.addEventListener("click", (e) => {
            e.preventDefault();
            openOverlay();
            mobilePanel.style.display = "none";
        });
        document.getElementById("mobileAbout")?.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "about.html";
        });
        document.getElementById("mobileComment")?.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "contact.html";
        });
    }
}

// Initialize
function init() {
    if (!document.getElementById("toolsOverlay")) {
        const overlay = document.createElement("div");
        overlay.id = "toolsOverlay";
        overlay.className = "tools-overlay";
        overlay.innerHTML = `
            <div class="tools-container">
                <button class="close-menu" id="closeOverlayBtn">✕</button>
                <h2 style="color:white;">🛡️ Security Tools Arsenal</h2>
                <p style="color:#bbd4f0;">Click any tool to open its dedicated page</p>
                <div class="tools-grid" id="dynamicToolsGrid"></div>
            </div>
        `;
        document.body.appendChild(overlay);
        document.getElementById("closeOverlayBtn")?.addEventListener("click", closeOverlay);
        overlay.addEventListener("click", (e) => { if (e.target === overlay) closeOverlay(); });
    }
    
    const navHome = document.getElementById("navHome");
    const navTools = document.getElementById("navToolsTrigger");
    const navAbout = document.getElementById("navAbout");
    const navComment = document.getElementById("navComment");
    const toolsMenuBtn = document.getElementById("mainToolsMenuBtn");
    
    if (navHome) navHome.addEventListener("click", (e) => { e.preventDefault(); window.location.href = "index.html"; });
    if (navTools) navTools.addEventListener("click", (e) => { e.preventDefault(); openOverlay(); });
    if (navAbout) navAbout.addEventListener("click", (e) => { e.preventDefault(); window.location.href = "about.html"; });
    if (navComment) navComment.addEventListener("click", (e) => { e.preventDefault(); window.location.href = "contact.html"; });
    if (toolsMenuBtn) toolsMenuBtn.addEventListener("click", openOverlay);
    
    initMobileMenu();
    
    const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname === "";
    if (isIndexPage && document.getElementById("appMain")) {
        loadHomePage();
    }
    
    // Initialize ads after page loads
    setTimeout(initAds, 1000);
}

document.addEventListener("DOMContentLoaded", init);




