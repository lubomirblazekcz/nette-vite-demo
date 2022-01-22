import dayjs from 'dayjs'

setInterval(() => document.body.innerHTML = dayjs().toString(),100)
