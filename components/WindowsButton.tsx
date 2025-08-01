"use client"

type WindowsButtonProps = {
  onClick: () => void
  onClose?: () => void
  children: React.ReactNode
  className?: string
  title?: string
  closeButton?: boolean
}

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className="text-xs font-bold w-5 h-5 flex items-center translate-x-[-35px] justify-center text-gray-600 hover:text-red-600 hover:bg-red-100 rounded-sm transition-colors duration-100 z-10"
      title="Remove permanently"
    >
      ×
    </button>
  )
}

const WindowsButton = ({ onClick, onClose, children, className = '', title, closeButton = false }: WindowsButtonProps) => {
  const baseClasses = `
    bg-gradient-to-b from-gray-100 to-gray-200
    border-2
    border-t-white border-l-white border-r-gray-400 border-b-gray-400
    hover:bg-gradient-to-b hover:from-white hover:to-gray-100
    active:bg-gradient-to-b active:from-gray-300 active:to-gray-200
    active:border-t-gray-400 active:border-l-gray-400 active:border-r-white active:border-b-white
    transition-all duration-100
    select-none
    outline-none
    focus:outline-none
    text-black
  `

  if (closeButton && onClose) {
    return (
      <div className="flex flex-row items-center">
        <button
          onClick={onClick}
          className={`${baseClasses} ${className} pr-8`}
          title={title}
          style={{
            borderStyle: 'solid',
            boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.9), inset -1px -1px 0px rgba(128,128,128,0.6)'
          }}
        >
          {children}
        </button>
        <CloseButton onClick={onClose} />
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      title={title}
      style={{
        borderStyle: 'solid',
        boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.9), inset -1px -1px 0px rgba(128,128,128,0.6)'
      }}
    >
      {children}
    </button>
  )
}

export default WindowsButton

