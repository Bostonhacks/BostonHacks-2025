"use client"

import { useState, useRef, useCallback, ReactNode } from 'react'
import React from 'react'
import { DragIndicator, WebAssetSharp, FilterNoneSharp } from '@mui/icons-material'

type WindowProps =
  {
    title: string | ReactNode
    children: ReactNode
    initialPosition?: { x: number; y: number }
    initialSize?: { width: number; height: number }
    // minWidth?: string
    // minHeight?: string
    onClose?: () => void
    closable?: boolean
    minimizable?: boolean
    maximizable?: boolean
    resizable?: boolean
    className?: string
    menuItems?: string[]
  }

const titlebarButtonClassname = `
  w-5 h-4.5 bg-ms-gray border
  text-black text-sm font-bold flex items-center justify-center
  border-t-white border-l-white border-r-black border-b-black
  hover:bg-gray-200 active:bg-gray-500
  active:border-t-black active:border-l-black active:border-r-white active:border-b-white 
`;

// this component cannot be dragegd smaller than the initial size.
// any components that are overflowed are hidden
const Window = ({
  title,
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 400, height: 300 },
  // minWidth = "min-w-[400px]",
  // minHeight = "min-h-[300px]",
  onClose,
  closable = true,
  minimizable = true,
  maximizable = true,
  resizable = true,
  className = "",
  menuItems = []
}: WindowProps) => {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState('')
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [restorePosition, setRestorePosition] = useState(initialPosition)
  const [restoreSize, setRestoreSize] = useState(initialSize)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isMaximized) return

    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
    e.preventDefault()
  }, [position, isMaximized])

  const handleResizeMouseDown = useCallback((e: React.MouseEvent, direction: string) => {
    if (isMaximized) return

    setIsResizing(true)
    setResizeDirection(direction)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    })
    e.preventDefault()
    e.stopPropagation()
  }, [isMaximized, size])


  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      setPosition({ x: newX, y: newY })
    } else if (isResizing && !isMaximized) {
      const deltaX = e.clientX - resizeStart.x
      const deltaY = e.clientY - resizeStart.y

      let newWidth = resizeStart.width
      let newHeight = resizeStart.height
      const newX = position.x
      const newY = position.y

      if (resizeDirection.includes('right')) {
        // newWidth = Math.max(initialSize.width, resizeStart.width + deltaX)
        newWidth = Math.max(250, resizeStart.width + deltaX)
      }
      if (resizeDirection.includes('left')) {
        // left and bottom turned off to reduce complexity of resizing logic
        // newWidth = Math.max(initialSize.width, resizeStart.width - deltaX)
        newWidth = Math.max(250, resizeStart.width - deltaX)
      }
      if (resizeDirection.includes('bottom')) {
        // newHeight = Math.max(initialSize.height, resizeStart.height + deltaY)
        newHeight = Math.max(250, resizeStart.height + deltaY)
      }
      if (resizeDirection.includes('top')) {
        // newHeight = Math.max(initialSize.height, resizeStart.height - deltaY)
        newHeight = Math.max(250, resizeStart.height - deltaY)
      }

      setSize({ width: newWidth, height: newHeight })
      setPosition({ x: newX, y: newY })
    }
  }, [
    isDragging,
    isResizing,
    dragStart,
    resizeStart,
    position,
    resizeDirection,
    isMaximized
  ])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeDirection('')
  }, [])

  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'none'

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.userSelect = ''
      }
    }
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp])

  const handleMinimize = useCallback(() => {
    if (!minimizable) return
    if (isMaximized) return
    setIsMinimized(!isMinimized)
  }, [isMinimized, isMaximized, minimizable])

  const handleMaximize = useCallback(() => {
    if (!maximizable) return
    if (isMinimized) return

    if (!isMaximized) {
      setRestorePosition(position)
      setRestoreSize(size)
      setPosition({ x: 0, y: 0 })
    } else {
      setPosition(restorePosition)
      setSize(restoreSize)
    }
    setIsMaximized(!isMaximized)
  }, [isMaximized, position, size, restorePosition, restoreSize, maximizable, isMinimized])

  const handleClose = useCallback(() => {
    if (!closable) return

    if (onClose) {
      onClose()
    } else {
      setIsVisible(false)
    }
  }, [closable, onClose])

  if (!isVisible) {
    return null
  }

  const getResizeCursor = (direction: string) => {
    switch (direction) {
      case 'top':
      case 'bottom':
        return 'ns-resize'
      case 'left':
      case 'right':
        return 'ew-resize'
      case 'top-left':
      case 'bottom-right':
        return 'nw-resize'
      case 'top-right':
      case 'bottom-left':
        return 'ne-resize'
      default:
        return 'default'
    }
  }

  return (
    <div
      ref={modalRef}
      className={`p-1 bg-ms-gray border-2 border-b-black border-r-black border-t-white border-l-white
        shadow-md font-mssansserif shadow-gray-500 flex flex-col
        ${isMinimized ? 'h-8 overflow-hidden' : `${initialSize.height}px`}
        ${isMaximized ? 'fixed top-0 left-0 z-50' : 'relative'}
        ${className} 
      `}
      style={{
        transform: isMaximized ? 'none' : `translate(${position.x}px, ${position.y}px)`,
        width: isMaximized ? '100vw' : `${size.width}px`,
        height: isMaximized ? '100vh' : isMinimized ? '32px' : `${size.height}px`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      {/* Resize handles */}
      {resizable && !isMaximized && !isMinimized && (
        <>
          {/* Corner handles */}
          {/* <div */}
          {/*   className="absolute top-0 left-0 w-2 h-2 -translate-x-1 -translate-y-1" */}
          {/*   style={{ cursor: getResizeCursor('top-left') }} */}
          {/*   onMouseDown={(e) => handleResizeMouseDown(e, 'top-left')} */}
          {/* /> */}
          {/* <div */}
          {/*   className="absolute top-0 right-0 w-2 h-2 translate-x-1 -translate-y-1" */}
          {/*   style={{ cursor: getResizeCursor('top-right') }} */}
          {/*   onMouseDown={(e) => handleResizeMouseDown(e, 'top-right')} */}
          {/* /> */}
          {/* <div */}
          {/*   className="absolute bottom-0 left-0 w-2 h-2 -translate-x-1 translate-y-1" */}
          {/*   style={{ cursor: getResizeCursor('bottom-left') }} */}
          {/*   onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-left')} */}
          {/* /> */}
          <div
            className="absolute bottom-0 right-0 w-2 h-2 translate-x-1 translate-y-1"
            style={{ cursor: getResizeCursor('bottom-right') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
          />

          {/* Edge handles */}
          {/* <div */}
          {/*   className="absolute top-0 left-2 right-2 h-1 -translate-y-0.5" */}
          {/*   style={{ cursor: getResizeCursor('top') }} */}
          {/*   onMouseDown={(e) => handleResizeMouseDown(e, 'top')} */}
          {/* /> */}
          <div
            className="absolute bottom-0 left-2 right-2 h-1 translate-y-0.5"
            style={{ cursor: getResizeCursor('bottom') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')}
          />
          {/* <div */}
          {/*   className="absolute left-0 top-2 bottom-2 w-1 -translate-x-0.5" */}
          {/*   style={{ cursor: getResizeCursor('left') }} */}
          {/*   onMouseDown={(e) => handleResizeMouseDown(e, 'left')} */}
          {/* /> */}
          <div
            className="absolute right-0 top-2 bottom-2 w-1 translate-x-0.5"
            style={{ cursor: getResizeCursor('right') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'right')}
          />
        </>
      )}

      {/* Title bar */}
      <div
        className="bg-gradient-to-r from-[#01017D] to-blue-600 text-white px-1 py-0.5 flex justify-between items-center border-b border-gray-500 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="font-bold text-md pl-1">{title}</span>
        <div className="flex gap-0.5">
          {minimizable && (
            <button
              className={titlebarButtonClassname}
              onClick={handleMinimize}
              onMouseDown={(e) => e.stopPropagation()}
              title="Minimize"
            >
              <span className="mt-1">
                &#8213;
              </span>
            </button>
          )}
          {maximizable && (
            <button
              className={`${titlebarButtonClassname}`}
              onClick={handleMaximize}
              onMouseDown={(e) => e.stopPropagation()}
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ?
                <FilterNoneSharp fontSize='inherit' style={{ fontSize: '10px' }} />
                :
                <WebAssetSharp fontSize='inherit' style={{ fontSize: '12px' }} />
              }
            </button>
          )}
          {closable && (
            <button
              className={titlebarButtonClassname}
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              title="Close"
            >
              &#10005;
            </button>
          )}
        </div>
      </div>

      {/* Menu bar */}
      {menuItems && menuItems.length > 0 && (
        <div className="flex">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`px-2 py-0.5 text-sm hover:border-b-black 
                hover:border-r-black hover:border-t-white hover:border-l-white 
                border-1 border-transparent text-black active:bg-gray-200
                active:border-t-black active:border-l-black active:border-r-white active:border-b-white
            `}
              onClick={() => {
                // Menu item clicked - you can add functionality here later
                console.log(`Menu item clicked: ${item}`)
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}


      {/* Content */}
      {!isMinimized && (
        <div className="h-full overflow-hidden"
          style={{
            height: isMaximized ? 'calc(100%)' : `${size.height}px`,
          }}
        >
          {children}


          {!isMaximized && resizable && (
            <div className="absolute bottom-0 right-0"
              style={{ cursor: getResizeCursor('bottom-right') }}
              onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
            >
              <DragIndicator
                className="text-gray-600 translate-y-0.75 translate-x-0.5"
                style={{
                  fontSize: '12px',
                  filter: 'drop-shadow(1px 1px 0px white)',
                  cursor: getResizeCursor('bottom-right')
                }}

                onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Window
