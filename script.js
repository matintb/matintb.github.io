let skip = false;

const terminal = document.getElementById("terminal");

const lines = [
  {
    type: "command",
    text: "$whoami",
  },
  {
    type: "output",
    text: "Software Engineer - Django Developer ",
  },
  {
    type: "command",
    text: "$ls -l",
  },
  {
    type: "output",
    text: `<span style="color:#8b949e">برای مشاهده کلیک کنید</span><br>`,
  },
  {
    type: "output",
    text: `
<span style="color:#00ff9c">📁 </span>
<a class="link" href="/dev">dev/</a>
<span style="color:#8b949e">← رزومه توسعه بک‌اند</span><br>

<span style="color:#00ff9c">📁 </span>
<a class="link" href="/blog">blog/</a>
<span style="color:#8b949e">← بلاگ</span><br>

📄 <a class="link" href="/contact" title="صفحه تماس">contact.txt</a>
<span style="color:#8b949e">← راه های ارتباطی</span><br>
`,
  },
];

let lineIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "█";
    terminal.appendChild(cursor);
    return;
  }

  const line = lines[lineIndex];
  const div = document.createElement("div");
  div.className = line.type;
  terminal.appendChild(div);

  const text = line.text;
  let i = 0;

  if (skip) {
    div.innerHTML = text;
    lineIndex++;
    setTimeout(typeLine, 50);
    return;
  }

  const interval = setInterval(() => {
    div.innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
      lineIndex++;
      setTimeout(typeLine, 120);
    }
  }, 10);
}

typeLine();

//  Skip animation on click

document.addEventListener("click", () => {
  skip = true;
});
