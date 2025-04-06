import Button from '@/components/ui/button/Button'

interface ButtonCardProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md'
  position?: 'absolute' | 'relative'
  top?: string
  right?: string
  href?: string
  className?: string
}
export const ButtonCard: React.FC<ButtonCardProps> = ({
  children,
  href,
  top = '4',
  right = '4',
  size = 'sm',
  ...props
}) => {
  return (
    <div className="relative">
      <div className={`absolute mt-4 top-${top} right-${right} z-10`}>
        <Button
          size={size}
          as="link"
          href={href}
          {...props}
        >
          {children}
        </Button>
      </div>
    </div>
  )
}
