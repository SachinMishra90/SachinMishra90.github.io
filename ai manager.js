/**
 * SACHIN TECH - AI DEV CHATBOT (v2.5)
 * Feature: Line-by-Line HTML/CSS Code Generation
 */

const AIChatbot = {
    // Basic Knowledge Base (Isse aap baad mein expand kar sakte hain)
    responses: {
        "login": '<div class="login-box">\n  <input type="text" placeholder="Username">\n  <input type="password" placeholder="Password">\n  <button>Login</button>\n</div>',
        "button": '<button style="padding: 10px 20px; background: #00f2fe; border: none; border-radius: 5px;">Click Me</button>',
        "navbar": '<nav style="display: flex; justify-content: space-between; padding: 20px; background: #333; color: white;">\n  <div>Logo</div>\n  <div>Home | Services | Contact</div>\n</nav>',
        "card": '<div style="border: 1px solid #ccc; padding: 20px; border-radius: 10px; max-width: 300px;">\n  <h3>Card Title</h3>\n  <p>This is a sample description.</p>\n</div>',
        "table": '<table border="1">\n  <tr><th>Name</th><th>Role</th></tr>\n  <tr><td>Sachin</td><td>Engineer</td></tr>\n</table>'
    },

    askAI() {
        const input = document.getElementById('chat-input').value.toLowerCase();
        const output = document.getElementById('chat-output');
        
        if (!input) return;

        output.innerHTML = "<code>AI is thinking...</code>";

        setTimeout(() => {
            let found = false;
            let result = "";

            // User ki demand check karna (Keyword based search)
            for (let key in this.responses) {
                if (input.includes(key)) {
                    result = this.responses[key];
                    found = true;
                    break;
                }
            }

            if (found) {
                output.innerHTML = `<strong>Manager:</strong> Here is your code for "${input}":<br><pre><code>${this.escapeHTML(result)}</code></pre>`;
            } else {
                output.innerHTML = "<strong>Manager:</strong> Sorry, I can only generate basic components like 'Login', 'Button', 'Navbar', 'Card', or 'Table' right now. I am learning more!";
            }
            
            document.getElementById('chat-input').value = ""; // Clear input
        }, 800);
    },

    // HTML ko text form mein dikhane ke liye helper
    escapeHTML(str) {
        return str.replace(/[&<>"']/g, function(m) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[m];
        });
    }
};

// Global function linking for HTML button
function askAI() {
    AIChatbot.askAI();
}
