// msw/cookies.ts

// 📖 Получить куку из запроса
export const getCookie = (request: Request, name: string): string | null => {
  const cookieHeader = request.headers.get('Cookie')
  if (!cookieHeader) return null

  const match = cookieHeader.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

// 📝 Установить куку в ответ
export const setCookie = (name: string, value: string, options?: any) => {
  const cookieOptions = {
    HttpOnly: true,
    Secure: process.env.NODE_ENV === 'production',
    SameSite: 'Strict',
    Path: '/',
    MaxAge: 7 * 24 * 60 * 60, // 7 дней
    ...options
  }

  let cookieString = `${name}=${value}`

  if (cookieOptions.HttpOnly) cookieString += '; HttpOnly'
  if (cookieOptions.Secure) cookieString += '; Secure'
  if (cookieOptions.SameSite) cookieString += `; SameSite=${cookieOptions.SameSite}`
  if (cookieOptions.Path) cookieString += `; Path=${cookieOptions.Path}`
  if (cookieOptions.MaxAge) cookieString += `; Max-Age=${cookieOptions.MaxAge}`

  return cookieString
}

// 🗑️ Удалить куку
export const clearCookie = (name: string) => {
  return `${name}=; HttpOnly; Path=/; Max-Age=0`
}