import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'medium',
  full = false,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    size === 'small' ? styles.small : '',
    size === 'large' ? styles.large : '',
    full ? styles.full : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
