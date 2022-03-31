export function shuffle(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function fix(string: string) {
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
