import { jwtVerify, SignJWT } from 'jose'

export const secret = new TextEncoder().encode('my-secret-key')

export const generateToken = async (user: any) => {
  return await new SignJWT({ email: user.email, password: user.password, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret)
}

export const verifyToken = async (token: string) => {
  try {
    const decoded = await jwtVerify(token, secret)
    return decoded
  } catch {
    return null
  }
}
