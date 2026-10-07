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
meetings:
  title: Срещи | DevOps клуб ТУЕС
  description: Предстоящите срещи на DevOps клуба в ТУЕС и архив на досегашните лекции с материали.
  heading: Срещи
  paragraphs:
    - Намерението е да се срещаме в учебен ден след часовете, веднъж на една-две седмици, в сградата на ТУЕС.
    - Точните дата, час и зала на всяка среща се обявяват в Discord.
  upcomingHeading: Предстоящи
  emptyTitle: Очаквайте скоро
  emptyText: Следващата среща още не е насрочена. Ще я обявим в Discord.
  roomLabel: зала
  materialsLabel: Материали
past:
  heading: Досега
notFound:
  title: Страницата не е намерена
  text: Адресът е грешен или страницата вече не съществува.
  back: Към началото
  terminal:
    label: Имитация на изход от kubectl
    output: |-
      NAME                READY   STATUS         RESTARTS   AGE
      devops-elsys-club   0/1     ErrImagePull   0          404s
    log: Back-off pulling image "devops.elsys.club/stranica:latest"
---
