---
title: DevOps клуб ТУЕС
description: Ученически DevOps клуб в ТУЕС. Срещите се обявяват в Discord.
discordUrl: https://discord.gg/F4GwberfCp
nav:
  label: Основна навигация
  menuLabel: Меню
  discord: Влез в Discord
  links:
    - label: Начало
      href: /
    - label: Срещи
      href: /meetings
    - label: За клуба
      href: /about
hero:
  prompt: ~/devops $
  lead: Как софтуерът стига от лаптопа до сървъра. Контейнери, автоматизация, инфраструктура.
  cta: Влез в Discord
  hint: Там обявяваме срещите и отговаряме на въпроси.
events:
  label: Последни събития в клуба
  command: kubectl get events -n devops
  columns: [Кога, Статус, Събитие]
  soon: скоро
  pending: Pending
  pendingText: Следващата среща — обявява се в Discord
  completed: Completed
routes:
  label: Подстраници
  items:
    - href: /meetings
      title: Срещи
      text: Предстоящата среща и архив с материали от досегашните.
    - href: /about
      title: За клуба
      text: Теми, за кого е клубът и как да изнесеш лекция.
footer:
  tagline: Ученически DevOps клуб в ТУЕС.
  email: kiril.l.rangelov.2022@elsys-bg.org
  discord: Влез в сървъра
  links:
    - key: source
      label: Код на сайта
      href: https://github.com/rangelovkiril/devops-club-site
    - key: network
      label: elsys.club
      href: https://elsys.club
notFound:
  title: Страницата не е намерена
  description: Страницата не е намерена.
  text: Адресът е грешен или страницата вече не съществува.
  back: Към началото
---
