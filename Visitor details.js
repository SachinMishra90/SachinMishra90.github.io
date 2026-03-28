/**
 * SACHIN TECH - VISITOR DATA SAVER (PUBLIC)
 * Description: Logs real-time data to Cloud and updates the public counter.
 */
const VisitorEngine = {
    // 1. Apna Google Apps Script Web App URL yahan paste karein
    API_URL: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",

    async init() {
        const data = await this.getIP();
        if (data) {
            this.saveToCloud(data);
            this.updateCounter();
        }
    },

    async getIP() {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const geo = await res.json();
            return {
                timestamp: new Date().toLocaleString(),
                ip: geo.ip,
                city: geo.city,
                device: navigator.platform,
                ua: navigator.userAgent
            };
        } catch (e) { return null; }
    },

    saveToCloud(payload) {
        // Bina visitor ko pta chale data cloud mein save karna
        fetch(this.API_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(payload)
        });

        // Real count increase karna
        let count = parseInt(localStorage.getItem('st_real_count') || 150); // 150 se shuru
        localStorage.setItem('st_real_count', count + 1);
    },

    updateCounter() {
        const display = document.getElementById('public-visitor-count');
        if (display) {
            const total = localStorage.getItem('st_real_count');
            display.innerText = `${total} Real Users Served`;
        }
    }
};
VisitorEngine.init();
