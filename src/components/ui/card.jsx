import React from 'react'

export function Card({ className = '', ...props }) {
  const cls = ['border rounded-2xl shadow-sm bg-white/80 dark:bg-neutral-950/60 backdrop-blur hover:border-accent/50 transition', className].join(' ')
  return <div className={cls} {...props} />
}
export function CardHeader({ className = '', ...props }) {
  return <div className={['p-4 md:p-6 border-b border-transparent'].join(' ')} {...props} />
}
export function CardTitle({ className = '', ...props }) {
  return <h3 className={['text-lg font-semibold'].join(' ')} {...props} />
}
export function CardContent({ className = '', ...props }) {
  return <div className={['p-4 md:p-6 pt-0', className].join(' ')} {...props} />
}
