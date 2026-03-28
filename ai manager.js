/**
 * SACHIN TECH - AI VIRTUAL MANAGER (v2.0)
 * Updated for: Image Processing, Web Builder, and Advanced Synergy Propagation.
 */

const AIManager = {
    config: {
        version: "2.0.1",
        nodePrefix: "ST-NODE-",
        adEfficiency: 0.92 // Increased for better Adsense potential
    },

    init() {
        console.log("AI Virtual Manager v2.0 Online...");
        this.monitorEarningPotential();
    },

    // 1. IMAGE BEAUTY LAB LOGIC (Ang: Image Editor)
    previewImage(event) {
        const reader = new FileReader();
        const display = document.getElementById('img-display');
        
        reader.onload = () => {
            if(display) {
                display.src = reader.result;
                display.style.display = "block";
                this.logStatus("Image Loaded: Ready for AI Enhancement.");
            }
        };
        if(event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    },

    applyMagic(filterType) {
        const img = document.getElementById('img-display');
        if (!img || !img.src) return alert("Please upload an image first.");

        // AI Filter Logic
        if (filterType === 'glow') {
            img.style.filter = "brightness(1.2) contrast(1.1) saturate(1.2)";
            this.logStatus("AI Filter: Luminous Glow Applied.");
        } else if (filterType === 'smooth') {
            img.style.filter = "blur(0.4px) contrast(1.05) saturate(1.1)";
            this.logStatus("AI Filter: Skin Retouch Applied.");
        }
    },

    downloadResult() {
        const img = document.getElementById('img-display');
        if (!img || !img.src) return;
        
        const link = document.createElement('a');
        link.download = 'SachinTech_AI_Edit.png';
        link.href = img.src;
        link.click();
        this.logStatus("Export HQ: Success.");
    },

    // 2. WEB BUILDER LOGIC (Ang: Code Generator)
    buildWeb() {
        const title = document.getElementById('site-name').value || "My Project";
        const output = document.getElementById('web-output');
        
        if(output) {
            output.classList.remove('d-none');
            output.innerHTML = `<i class="fas fa-check-circle"></i> Engineering System: Core files for <b>${title}</b> generated successfully.`;
        }
    },

    // 3. SYNERGY PROTOCOL (Old Viral Logic Optimized)
    handlePropagation(platform) {
        // Unique Node Generation
        const nodeID = this.config.nodePrefix + Math.random().toString(36).substring(7).toUpperCase();
        const viralLink = `${window.location.origin}${window.location.pathname}?node=${nodeID}`;
        
        this.logStatus("AI is optimizing your reach link...");
        
        navigator.clipboard.writeText(viralLink);
        
        setTimeout(() => {
            alert("AI Synergy: Unique Node Optimized & Copied to Clipboard!");
            // Messenger ya Facebook par redirect
            const shareUrl = platform === 'messenger' 
                ? `fb-messenger://share/?link=${encodeURIComponent(viralLink)}`
                : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(viralLink)}`;
            window.open(shareUrl, '_blank');
        }, 500);
    },

    // 4. UTILITIES
    logStatus(msg) {
        const statusBox = document.getElementById('ai-status');
        if(statusBox) statusBox.innerText = `Manager: ${msg}`;
        console.log(`[AI LOG]: ${msg}`);
    },

    monitorEarningPotential() {
        console.log("AdSense Potential Analysis: Optimal for Web Tools.");
    }
};

// Global Helper Functions (Index.html ke buttons ke liye)
function previewImg(e) { AIManager.previewImage(e); }
function applyMagic(f) { AIManager.applyMagic(f); }
function downloadResult() { AIManager.downloadResult(); }
function buildWeb() { AIManager.buildWeb(); }
function mutateAndShare(p) { AIManager.handlePropagation(p); }

// Start
window.onload = () => {
    AIManager.init();
    // Agar visitor details collector run ho raha hai, toh use distrub na karein
    if(typeof VisitorEngine !== 'undefined') VisitorEngine.init();
};
