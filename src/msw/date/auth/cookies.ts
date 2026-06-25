// Установка HttpOnly cookie (в MSW имитируем через Set-Cookie header)
export const setHttpOnlyCookie = (token: string, name: string = 'access_token'): string =>{
  // В реальном мире это делает сервер
  // В MSW мы просто возвращаем строку для Set-Cookie
  return `${name}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`;
}

const  clearCookies = (): string[] => {
  return [
    'access_token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0',
    'refresh_token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0',
  ];
}