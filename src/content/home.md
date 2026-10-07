---
title: DevOps клуб ТУЕС
description: Как софтуерът стига от лаптопа до сървъра. Контейнери, автоматизация, инфраструктура.
discordUrl: https://discord.gg/F4GwberfCp
nav:
  label: Основна навигация
  menuLabel: Меню
  discord: Влез в Discord
  links:
    - label: Начало
      href: /
      dir: ~/devops
    - label: Срещи
      href: /meetings
      dir: ~/devops/meetings
    - label: За клуба
      href: /about
      dir: ~/devops/about
hero:
  prompt: ~/devops $
  quote: „Ако се налага да го правиш два пъти — автоматизирай го.“
  cta: Влез в Discord
  more:
    label: Какво е DevOps
    href: /about#whatis
events:
  label: Последни събития в клуба
  command: kubectl get events -n devops
  columns: [Last seen, Reason, Message]
  soon: скоро
  pending: Pending
  pendingText: Следващата среща ще бъде обявена в Discord
  completed: Completed
  all: виж всички
  allHref: /meetings
routes:
  label: Подстраници
  items:
    - cmd: cd meetings
      href: /meetings
      title: Срещи
      text: Предстоящата среща и архив с материали от досегашните.
    - cmd: cd about
      href: /about
      title: За клуба
      text: Теми, за кого е клубът и как да изнесеш лекция.
  discord:
    cmd: xdg-open
    title: Влез в Discord
footer:
  tagline: Ученически DevOps клуб в ТУЕС.
  email: kiril.l.rangelov.2022@elsys-bg.org
  contact: Свържи се с нас
  discord: Влез в Discord
  links:
    - key: source
      label: Виж кода на сайта
      href: https://github.com/rangelovkiril/devops-club-site
    - key: network
      label: Разгледай други клубове
      href: https://elsys.club
notFound:
  title: Страницата не е намерена
  description: Страницата не е намерена.
  text: Адресът е грешен или страницата вече не съществува.
  back: Към началото
---
