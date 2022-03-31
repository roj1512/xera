function fix(string: string) {
  string = string.replace(/‌/g, "");
  string = string.replace(/ـ/g, "");
  string = string.replace(/ھ/g, "ه");
  string = string.replace(/ي/g, "ی");
  string = string.replace(/ك/g, "ک");
  string = string.replace(/ة/g, "ە");
  string = string.replace(/ء/g, "ئ");
  string = string.replace(/ؤ/g, "ۆ");
  return string;
}

export function areEqual(x: string, y: string) {
  return fix(x) == fix(y);
}

export async function nextContent() {
  const content =
    (await (await fetch("https://xera.deno.dev/nextContent")).json()).reduce(
      (a, o, i) => {
        const c = Math.floor(i / 10);
        a[c] = [].concat(a[c] || [], o);
        return a;
      },
      [],
    ).map((l) => l.join(" ") + " ").sort((a, b) => a.length - b.length);
  content[content.length - 1] = content[content.length - 1].trim();
  return content;
}

export function getContentLength(content: string[]) {
  return content.join("").length;
}
