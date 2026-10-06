# devops-club-site

Сайтът на DevOps клуба в ТУЕС: [devops.elsys.club](https://devops.elsys.club). Изискванията са в [`docs/requirements.md`](docs/requirements.md).

Astro без UI framework, Bun, Biome и ръчен CSS. Сайтът не изпраща JavaScript към браузъра.

## Локална разработка

Нужен е [Bun](https://bun.sh).

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # статичен изход в dist/
bun run preview  # преглед на dist/
bun run check    # Biome: lint и формат
bun run format   # Biome: поправя форматирането
```

## Страници

- `/` — hero, За клуба, За кого е, Какво караме, кратък блок за срещите, Кой го води, Влез в клуба.
- `/meetings` — предстоящи срещи и архив с материалите.
- `404` — страница за непознат адрес.

Пътищата са на английски, текстовете са на български.

## Как се добавя среща

Нов файл в `src/content/meetings/` и pull request. Не се пипа нищо друго.

```yaml
---
date: 2026-10-15
time: 16:10–17:30        # по избор
title: Заглавие на лекцията
topic: Една-две изречения за темата.
speaker: Име Фамилия
room: "8.3.1"            # по избор
status: planned          # planned | past
materials: https://...   # по избор, за минали срещи
---
```

- `planned` се показва в «Срещи», по дата нагоре. Ако няма нито една, се показва «Очаквайте скоро».
- `past` се показва в «Досега», по дата надолу.
- Без `materials` не се показва линк.

## Къде са текстовете

Всички текстове на началната страница, адресът на Discord поканата и контактът във футъра са във frontmatter на `src/content/home.md`. Смяната на имейла е една стойност: `footer.email`.

## Бранд и тема

`public/brand/colors.css` е непроменен от бранд кита и се зарежда с `<link>`. Токените в `src/styles/global.css` само ги именуват по роля. Шрифтовете в `public/fonts/` са със своите OFL лицензи.

Тъмната тема е по подразбиране. Светлата се включва от `prefers-color-scheme: light`, без превключвател и без JavaScript. И двете групи токени са в началото на `src/styles/global.css`, със стойности от бранд токените (само рамката и фонът на картите в тъмния режим са смес от тях). Логата се сменят с `<picture>`, не с `filter`.

## Деплой

Push към `main` публикува в Cloudflare Pages, а всеки pull request получава preview. Виж `.github/workflows/deploy.yml`.
