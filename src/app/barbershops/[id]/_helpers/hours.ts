import { addMinutes, format, setHours, setMinutes } from 'date-fns'

export function generateDayTimeList(data: Date): string[]{
  const startTime = setMinutes(setHours(data, 9), 0)
  const endTime = setMinutes(setHours(data, 21), 0)
  const interval = 45
  const timeList: string[] = []

  let currentTime = startTime

  while (currentTime <= endTime) {
    timeList.push(format(currentTime, 'HH:mm'))
    currentTime = addMinutes(currentTime, interval)
  }

  return timeList
}