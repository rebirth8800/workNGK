import Logist from '@/shared/svg/logist.svg?url'
import It from '@/shared/svg/it.svg?url'
import Teacher from '@/shared/svg/teacher.svg?url'
import Buchalter from '@/shared/svg/buchalter.svg?url'
import Lawyer from '@/shared/svg/lawyer.svg?url'
import Document from '@/shared/svg/document.svg?url'
import Send from '@/shared/svg/send.svg?url'
import Plus from '@/shared/svg/plus.svg?url'
import MailRed from '@/shared/svg/mail-red.svg?url'

export const iconConfig = {
  logist: Logist,
  it: It,
  teacher: Teacher,
  buchalter: Buchalter,
  lawyer: Lawyer,
  document: Document,
  send: Send,
  plus: Plus,
  'mail-red': MailRed,
}

const defaultIcon = Document

export type IconName = keyof typeof iconConfig

export const getIconSrc = (name?: string) => {
  if (!name) return defaultIcon

  return name in iconConfig ? iconConfig[name as IconName] : defaultIcon
}
