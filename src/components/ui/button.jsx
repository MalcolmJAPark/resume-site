import React from 'react'

export function Button({ className = '', variant = 'default', size = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md transition border text-sm font-medium'
  const variants = {
    default: 'bg-black text-white border-black hover:opacity-90 dark:bg-white dark:text-black dark:border-white',
    outline: 'bg-transparent text-black border-neutral-300 hover:bg-neutral-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-900'
  }
  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-6',
    sm: 'h-9 px-3'
  }
  const cls = [base, variants[variant] || variants.default, sizes[size] || sizes.default, 'shadow-sm', 'rounded-2xl', className].join(' ')
  return <button className={cls} {...props} />
}
