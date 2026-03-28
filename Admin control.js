/**
 * SACHIN TECH - ADMIN ACCESS ENGINE (PRIVATE)
 * Key: sachin_admin_786
 */
const AdminEngine = {
    init() {
        const params = new URLSearchParams(window.location.search);
        // Sirf secret key milne par hi console unlock hoga
        if (params.get('access') === "sachin_admin_786") {
            this.unlockConsole();
        }
    },

    unlockConsole() {
        const root = document.getElementById('admin-root');
        if (root) {
            root.style.display = 'block';
            root.innerHTML = `
                <div class="glass-card mt-5" style="border: 1px solid #00f2fe;">
                    <h4 class="text-info"><i class="fas fa-user-shield"></i> Sachin's Private Console</h4>
                    <hr class="border-secondary">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="small text-white-50">Total Real Traffic</p>
                            <h2 class="text-accent">${localStorage.getItem('st_real_count')}</h2>
                        </div>
                        <div class="col-md-8">
                            <p class="small text-white-50">System Status</p>
                            <p class="text-success"><i class="fas fa-circle"></i> Cloud Logging Active (Google Sheets)</p>
                            <p class="text-info small">Tip: Details like IP and City are directly synced to your sheet.</p>
                        </div>
                    </div>
                </div>
            `;
            console.log("Admin Authorized: Dashboard Loaded Successfully.");
        }
    }
};
AdminEngine.init();
