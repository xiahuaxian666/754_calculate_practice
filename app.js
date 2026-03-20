(function () {
  const COUNT = 5;

  const gridEl = document.getElementById("grid");
  const answersEl = document.getElementById("answers");
  const btnGenerate = document.getElementById("btn-generate");
  const btnPrint = document.getElementById("btn-print");

  /** 四位数，且各位数字互不相同（千位 1–9）。 */
  function randomFourDigitUniqueDigits() {
    const first = Math.floor(Math.random() * 9) + 1;
    const pool = [];
    for (let d = 0; d <= 9; d += 1) {
      if (d !== first) pool.push(d);
    }
    const digits = [first];
    for (let k = 0; k < 3; k += 1) {
      const idx = Math.floor(Math.random() * pool.length);
      digits.push(pool.splice(idx, 1)[0]);
    }
    return digits[0] * 1000 + digits[1] * 100 + digits[2] * 10 + digits[3];
  }

  function pairKey(a, b) {
    return a <= b ? `${a},${b}` : `${b},${a}`;
  }

  /** @returns {{ a: number, b: number, product: number }[]} */
  function generateProblems() {
    const seen = new Set();
    const out = [];
    let guard = 0;
    while (out.length < COUNT && guard < 500) {
      guard += 1;
      const a = randomFourDigitUniqueDigits();
      const b = randomFourDigitUniqueDigits();
      const key = pairKey(a, b);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ a, b, product: a * b });
    }
    while (out.length < COUNT) {
      const a = randomFourDigitUniqueDigits();
      const b = randomFourDigitUniqueDigits();
      out.push({ a, b, product: a * b });
    }
    return out;
  }

  function appendVertical(container, a, b) {
    const outer = document.createElement("div");
    outer.className = "vertical-wrap";

    const vert = document.createElement("div");
    vert.className = "vertical";

    const sa = String(a);
    const sb = String(b);
    const width = Math.max(sa.length, sb.length) + 1;
    const topPad = sa.padStart(width, " ");

    const rowTop = document.createElement("span");
    rowTop.className = "row";
    rowTop.textContent = topPad;
    vert.appendChild(rowTop);

    const rowTimes = document.createElement("span");
    rowTimes.className = "row times";
    const op = document.createElement("span");
    op.className = "op";
    op.textContent = "×";
    const num = document.createElement("span");
    num.className = "num";
    num.textContent = sb;
    rowTimes.appendChild(op);
    rowTimes.appendChild(num);
    vert.appendChild(rowTimes);

    const rule = document.createElement("hr");
    rule.className = "rule";
    vert.appendChild(rule);

    outer.appendChild(vert);
    container.appendChild(outer);
  }

  function render(problems) {
    gridEl.replaceChildren();

    problems.forEach((p, i) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (i === COUNT - 1) cell.classList.add("cell-span-2");

      const inner = document.createElement("div");
      inner.className = "cell-inner";

      const label = document.createElement("div");
      label.className = "cell-label";
      label.textContent = `第 ${i + 1} 题`;
      inner.appendChild(label);

      appendVertical(inner, p.a, p.b);

      const draft = document.createElement("div");
      draft.className = "draft";
      draft.setAttribute("aria-hidden", "true");

      cell.appendChild(inner);
      cell.appendChild(draft);
      gridEl.appendChild(cell);
    });

    answersEl.replaceChildren();
    problems.forEach((p, i) => {
      const span = document.createElement("span");
      span.textContent = `${i + 1}. ${p.product}`;
      answersEl.appendChild(span);
    });
  }

  function run() {
    render(generateProblems());
  }

  btnGenerate.addEventListener("click", run);
  btnPrint.addEventListener("click", () => window.print());

  run();
})();
