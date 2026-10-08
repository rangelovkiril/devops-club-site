---
kind: meetings
title: Срещи
description: Предстоящата среща и архив с материали от досегашните.
prompt: ~/devops/meetings $
lead: Учебен ден след часовете, веднъж на една-две седмици, в сградата на ТУЕС.
leadNote: Дата, час и зала се обявяват в Discord.
upcoming: Предстоящи
past: Досега
plannedStatus: Scheduled
upcomingCommand: kubectl get meetings --field-selector status=Pending
upcomingEmpty: No resources found in devops namespace.
discordCta: Следи в Discord
roomLabel: зала
listCommand: kubectl get meetings -n devops
columns: [Дата, Заглавие]
describeCommand: kubectl describe meeting
fields:
  time: Час
  room: Зала
  speaker: Лектор
  description: Описание
  materials: Материали
materialsPrefix: "[repo]"
---
