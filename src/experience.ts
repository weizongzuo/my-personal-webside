import type { Locale } from './i18n'

export function calculateExperienceMonths(periods: string[], asOf: Date): number {
  const months = new Set<number>()
  const currentMonth = asOf.getFullYear() * 12 + asOf.getMonth()

  for (const period of periods) {
    const match = period.match(/^(\d{4})\.(\d{2})[–-](\d{4})\.(\d{2})$/)
    if (!match) {
      throw new Error(`Invalid work period: ${period}`)
    }

    const [, startYear, startMonth, endYear, endMonth] = match
    const start = Number(startYear) * 12 + Number(startMonth) - 1
    const end = Math.min(Number(endYear) * 12 + Number(endMonth) - 1, currentMonth)

    for (let month = start; month <= end; month += 1) {
      months.add(month)
    }
  }

  return months.size
}

export function formatExperience(monthCount: number, locale: Locale): string {
  const years = Math.floor(monthCount / 12)
  const months = monthCount % 12

  if (locale === 'en') {
    const yearLabel = years === 1 ? 'year' : 'years'
    const monthLabel = months === 1 ? 'month' : 'months'
    return [years > 0 && `${years} ${yearLabel}`, months > 0 && `${months} ${monthLabel}`]
      .filter(Boolean)
      .join(' ')
  }

  if (locale === 'zh') {
    return `${years ? `${years}年` : ''}${months ? `${months}个月` : ''}`
  }

  return `${years ? `${years}年` : ''}${months ? `${months}ヶ月` : ''}`
}
