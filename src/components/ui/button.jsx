import React from 'react'

export function Button({ className = '', variant = 'default', size = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md transition border text-sm font-medium focus:outline-none focus:ring-0 focus-visible:shadow-accent'
  const variants = {
    default: 'bg-accent text-white border-accent hover:bg-accent-600',
    outline: 'bg-transparent text-accent border-accent hover:bg-accent/10'
  }
  const sizes = { default: 'h-10 px-4 py-2', lg: 'h-11 px-6', sm: 'h-9 px-3' }
  const cls = [base, variants[variant] || variants.default, sizes[size] || sizes.default, 'shadow-sm', 'rounded-2xl', className].join(' ')
  return <button className={cls} {...props} />
}
