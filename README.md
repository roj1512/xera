# خێرا

> تاقیکردنەوەی خێرانووسینی کوردی

## چۆن کار دەکات؟

چەند ناوەڕۆکێک دەخاتە بەردەستی بەکارهێنەرەکەی بۆ نووسینی، و لە دوای ماوەیەک کە
زۆر کات یەک خولەکە بەکارهێنەرەکە ڕادەگرێت و خێراییی نووسینەکەی پێ دەڵێت.

## چۆن خێرایی نووسین و دەدۆزرێتەوە؟

خێرایی نووسینی بەکارهێنەر بە "وشە/خولەک" دەپێورێت و بەم شێوەیە دەدۆزرێتەوە:

```ts
(written / 5) / time;
```

- گۆڕاوی `written` ژمارەی ئەو نووسانەیە کە بەکارهێنەرەکە نووسیویوتی.
- گۆڕاوی `time` ئەو ماوەیەیە بە خولەک کە بەکارهێنەرەکە `written` نووسەی تێدا
  نووسیوە.

## چۆن وردی دەدۆزرێتەوە؟

وردیی نووسینی بەکارهێنەر بریتییە لە ژمارەی ئەو نووسانەی کە بەهەڵە دەینووسێت
لەناو سەد نووسە، بە ڕێژەی سەدی دەپێورێت و بەم شێوەیە دەدۆزرێتەوە:

```ts
((written - mistakes) / written) * 100;
```

- گۆڕاوی `mistakes` ژمارەی ئەو نووسانەیە کە بەکارهێنەرەکە بەهەڵە نووسیویەتی.

## چۆن دەتوانم هاوکاریی پڕۆژەکە بکەم؟

هەر داوایەکی ڕاکێشان بنێررێت، بەخۆشحاڵییەوە سەیر دەکرێت و وەردەگیرێت.

باشترین هاوکاری بۆ پڕۆژەکە لە ئێستادا گەورەکردنی لیستەی ناوەڕۆکەکانە کە دەدرێت
بە بەکارهێنەر.

### چۆن دەتوانم ناوەڕۆک زۆر بکەم؟

1. فایلی `src/contents.ts` بکەرەوە.
2. ناوەڕۆکەکانت لە گۆڕاوی `rawContents` زۆر بکە، بە ڕەچاوکردنی ئەم خاڵانە:
   - هەر ناوەڕۆکێک لە هێڵێکدا دەبێت.
   - هەر هێڵێک بە # دەست پێ بکات پشتگوێ دەخرێت، واتە دەتوانیت # لە سەرەتای هێڵێک
     دابنێیت بۆ ڕوونکردنەوەی شتێک.
   - دەبێت ئەو ناوەڕۆکەی زۆری دەکەیت ڕەچاوی قانوونەکانی ڕاستنووسین بکات، ئەگەر
     نا، وەرناگیرێت.
3. داوایەکی ڕاکێشان بنێرە.

## سپاس

- سپاسی بێپایە بۆ ماڵپەڕی ئاڵەکۆک.
- سپاس بۆ هەموو ئەو کەسانەش کە بە هەر جۆرێک هاوکاریی پڕۆژەکەیانن کردووە.

## مۆڵەتنامە

ئەم سەرچاوەیە لەژێر مۆڵەتنامە MIT بەردەستە.

[زۆرتر بزانە](./LICENSE)