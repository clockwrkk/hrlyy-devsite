setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('terminal').style.display = 'block';
    }, 3500);
    
    const input = document.getElementById('input');
    const output = document.getElementById('terminal-output');
    
    const responses = {
    "/help": [
    "/HELP — See what you can say.",
    "/ABOUT ME — Who made this chaos.",
    "/SOCIALS — Where to stalk me.",
    "/PROJECTS — My controlled disasters.",
    "/MANIFESTO — How I live.",
    "/CLEAR — Wipe it all."
    ],
    "/about me": "I'm hrlyy or mostly known as nick. I make really good (bad) websites. i love all my friends and tea.",
    "/socials": "GitHub: github.com/hrlyy | Discord: hrlyy | No TikTok, I’m not 12.",
    "/projects": "TerminalVOID, AetherOS, and whatever’s next.",
    "/manifesto": "I make the most outrageous bullshit ever, anything fucking goes. If it's never meant to see the light of day, with me it will. NORMALIZE MAKING UNFILTERED CONTENT.",
    "/clear": "CLEAR"
    };
    
    let wreckCount = 0;
    
    input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
    const cmd = input.value.toLowerCase().trim();
    input.value = "";
    
    const commandLine = document.createElement("p");
    commandLine.textContent = "> " + cmd;
    output.appendChild(commandLine);
    
    if (cmd === "/clear") {
    output.innerHTML = "";
    return;
    }
    
    if (cmd === "/sudo wreck") {
    wreckCount++;
    const p = document.createElement("p");
    if (wreckCount >= 3) {
    p.textContent = "Shut the fuck up.";
    } else {
    p.textContent = "System wreck initialized. You're happy now?";
    }
    output.appendChild(p);
    return;
    }
    
    const res = responses[cmd];
    if (res) {
    if (Array.isArray(res)) {
    res.forEach(r => {
    const p = document.createElement("p");
    p.textContent = r;
    output.appendChild(p);
    });
    } else {
    const p = document.createElement("p");
    p.textContent = res;
    output.appendChild(p);
    }
    } else {
    const p = document.createElement("p");
    p.textContent = "Unknown command. Try harder.";
    output.appendChild(p);
    }
    
    output.scrollTop = output.scrollHeight;
    }
    });