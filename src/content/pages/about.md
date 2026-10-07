---
kind: about
title: За клуба
description: Теми, за кого е клубът и как да изнесеш лекция.
prompt: ~/devops/about $
lead: Ученическа група в ТУЕС. Разглеждаме как приложенията се пишат, пакетират, тестват и пускат и какво става с тях след това.
tocLabel: На тази страница
who:
  heading: За кого е
  paragraphs:
    - Не се иска предварително знание и няма изискване за ниво. Достатъчно е да си любопитен.
  facts:
    - label: "Клас:"
      value: 9.–11. в ТУЕС
    - label: "Кога:"
      value: учебен ден, след часовете
    - label: "Честота:"
      value: веднъж на една-две седмици
    - label: "Къде:"
      value: сградата на ТУЕС
    - label: "Зала:"
      value: обявява се в Discord
topics:
  heading: Теми
  note: Не е програма и не обещава ред или дати. Конкретните теми избираме заедно.
  command: kubectl get topics -n devops
  columns: [Тема, Инструменти, Лекции]
  none: още няма
  items:
    - id: linux
      name: Linux и команден ред
      tools: [Linux, Bash]
    - id: containers
      name: Контейнери
      tools: [Docker, Podman]
    - id: ci-cd
      name: CI/CD и автоматизация
      tools: [GitHub Actions]
    - id: networking
      name: Мрежи и как стига заявката до сървъра
      tools: [DNS, HTTP]
    - id: cloud
      name: Облак и Kubernetes
      tools: [Kubernetes]
    - id: iac
      name: Инфраструктура като код
      tools: [Terraform, Ansible]
    - id: observability
      name: Наблюдаемост
      tools: [Prometheus, Grafana]
speakers:
  heading: Изнеси лекция
  paragraphs:
    - Клубът се води от Кирил Рангелов. Отворен е за съорганизатори и гост-лектори.
    - Ако искаш да изнесеш лекция или да помагаш с организацията, пиши.
  cta: Пиши в Discord
  mail: или на
faq:
  heading: Въпроси
  items:
    - question: Трябва ли да знам Linux или Docker?
      answer: Не. Започваме от основите и въпросите са нормална част от срещите.
    - question: Пропуснах среща. Какво сега?
      answer: Материалите са отворени и можеш да ги прегледаш и без да си присъствал.
    - question: Кой избира темите?
      answer: Хората в клуба, заедно. Предложения се пускат в Discord.
---
