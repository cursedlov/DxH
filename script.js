// ========================
// PANTALLAS
// ========================
const pantallas = document.querySelectorAll(".pantalla");
let actual = 0;

function mostrar(i){
    pantallas.forEach(p => p.classList.remove("activa"));
    pantallas[i].classList.add("activa");
    actual = i;
}

// ========================
// INICIO SECUENCIA BATMAN
// ========================
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=>mostrar(1), 2500);
    setTimeout(()=>mostrar(2), 5000);
    setTimeout(()=>mostrar(3), 8000);
    setTimeout(()=>mostrar(4), 12000);
});

// ========================
// BOTÓN NO IMPOSIBLE 😼
// ========================
document.querySelectorAll(".respuesta[data-valor='no']")
.forEach(btn=>{
    btn.addEventListener("mouseenter", ()=>{
        btn.style.position = "absolute";
        btn.style.left = Math.random()*80 + "vw";
        btn.style.top = Math.random()*80 + "vh";
    });
});

// ========================
// MINIJUEGOS
// ========================

const minijuegoEstado = {
    corazones: 0,
    gatitoVida: 100,
    memory: [],
    quizIndex: 0,
    runnerScore: 0
};

// ========================
// 💖 ATRAPA CORAZONES
// ========================
function spawnCorazon(){
    const c = document.createElement("div");
    c.textContent = "💖";
    c.style.position = "absolute";
    c.style.left = Math.random()*100 + "vw";
    c.style.top = "-50px";
    c.style.fontSize = "30px";
    c.style.cursor = "pointer";

    c.onclick = () => {
        minijuegoEstado.corazones++;
        c.remove();
    };

    document.body.appendChild(c);

    let fall = setInterval(()=>{
        let top = parseFloat(c.style.top);
        c.style.top = (top + 3) + "px";
        if(top > window.innerHeight){
            c.remove();
            clearInterval(fall);
        }
    },20);
}

setInterval(spawnCorazon, 1200);

// ========================
// 🐱 GATITO SALTARÍN
// ========================
function gatitoGame(){
    const g = document.createElement("div");
    g.textContent = "🐱";
    g.style.position = "absolute";
    g.style.fontSize = "40px";
    g.style.left = "50%";
    g.style.top = "10%";

    document.body.appendChild(g);

    let pos = 0;

    let interval = setInterval(()=>{
        pos += 5;
        g.style.top = pos + "px";

        if(pos > window.innerHeight - 100){
            clearInterval(interval);
            g.remove();
            alert("💔 El gatito cayó!");
        }
    },100);
}

// ========================
// 🧠 MEMORY SIMPLE
// ========================
const emojis = ["💖","💘","💖","💘"];
let opened = [];

function createMemory(){
    const container = document.createElement("div");

    emojis.sort(()=>Math.random()-0.5);

    emojis.forEach(e=>{
        const box = document.createElement("div");
        box.textContent = "❓";
        box.style.display = "inline-block";
        box.style.margin = "10px";
        box.style.fontSize = "40px";
        box.style.cursor = "pointer";

        box.onclick = ()=>{
            box.textContent = e;
            opened.push(box);

            if(opened.length === 2){
                setTimeout(()=>{
                    if(opened[0].textContent !== opened[1].textContent){
                        opened.forEach(b=>b.textContent="❓");
                    }
                    opened = [];
                },800);
            }
        };

        container.appendChild(box);
    });

    document.body.appendChild(container);
}

// ========================
// ❓ QUIZ ROMÁNTICO
// ========================
const quiz = [
    {q:"¿Te amo?", a:"sí"},
    {q:"¿Eres mi persona favorita?", a:"sí"},
    {q:"¿Batman soy yo?", a:"sí"}
];

function quizGame(){
    const q = quiz[minijuegoEstado.quizIndex];
    const r = prompt(q.q);

    if(r.toLowerCase().includes(q.a)){
        alert("💖 Correcto");
        minijuegoEstado.quizIndex++;
    }else{
        alert("😼 Intenta otra vez");
    }
}

// ========================
// 🏃‍♂️ RUNNER SIMPLE
// ========================
function runnerGame(){
    let score = 0;

    const player = document.createElement("div");
    player.textContent = "💜";
    player.style.position = "absolute";
    player.style.left = "50%";
    player.style.bottom = "50px";
    player.style.fontSize = "40px";

    document.body.appendChild(player);

    document.addEventListener("keydown", (e)=>{
        if(e.key === "ArrowUp"){
            score++;
            player.style.bottom = (50 + score*5) + "px";
        }
    });
}

// ========================
// 💥 EFECTOS
// ========================
function lluvia(){
    const e = document.createElement("div");
    e.textContent = ["💖","💘","🌸"][Math.floor(Math.random()*3)];
    e.style.position = "absolute";
    e.style.left = Math.random()*100 + "vw";
    e.style.top = "-50px";
    e.style.fontSize = "25px";

    document.body.appendChild(e);

    let t = setInterval(()=>{
        let top = parseFloat(e.style.top);
        e.style.top = (top + 4) + "px";

        if(top > window.innerHeight){
            clearInterval(t);
            e.remove();
        }
    },20);
}

setInterval(lluvia, 400);