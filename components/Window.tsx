"use client"

import { useState, useRef, useCallback, ReactNode } from 'react'
import React from 'react'

interface WindowProps {
  title: string
  children: ReactNode
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
  minWidth?: string
  minHeight?: string
  onClose?: () => void
  closable?: boolean
  minimizable?: boolean
  maximizable?: boolean
  resizable?: boolean
  className?: string
}

const Window = ({
  title,
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 400, height: 300 },
  minWidth = "min-w-[400px]",
  minHeight = "min-h-[300px]",
  onClose,
  closable = true,
  minimizable = true,
  maximizable = true,
  resizable = true,
  className = ""
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
        newWidth = Math.max(200, resizeStart.width + deltaX)
      }
      if (resizeDirection.includes('left')) {
        newWidth = Math.max(200, resizeStart.width - deltaX)
      }
      if (resizeDirection.includes('bottom')) {
        newHeight = Math.max(100, resizeStart.height + deltaY)
      }
      if (resizeDirection.includes('top')) {
        newHeight = Math.max(100, resizeStart.height - deltaY)
      }

      setSize({ width: newWidth, height: newHeight })
      setPosition({ x: newX, y: newY })
    }
  }, [isDragging, isResizing, dragStart, resizeStart, position, resizeDirection, isMaximized])

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
      className={`bg-gray-300 border-2 border-gray-300 shadow-lg font-mono relative ${isMinimized ? 'h-8 overflow-hidden' : `${minHeight}`} ${className} ${minWidth}`}
      style={{
        transform: isMaximized ? 'none' : `translate(${position.x}px, ${position.y}px)`,
        width: isMaximized ? '100%' : `${size.width}px`,
        height: isMaximized ? '100%' : isMinimized ? '32px' : `${size.height}px`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      {/* Resize handles */}
      {resizable && !isMaximized && !isMinimized && (
        <>
          {/* Corner handles */}
          <div
            className="absolute top-0 left-0 w-2 h-2 -translate-x-1 -translate-y-1"
            style={{ cursor: getResizeCursor('top-left') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'top-left')}
          />
          <div
            className="absolute top-0 right-0 w-2 h-2 translate-x-1 -translate-y-1"
            style={{ cursor: getResizeCursor('top-right') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'top-right')}
          />
          <div
            className="absolute bottom-0 left-0 w-2 h-2 -translate-x-1 translate-y-1"
            style={{ cursor: getResizeCursor('bottom-left') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-left')}
          />
          <div
            className="absolute bottom-0 right-0 w-2 h-2 translate-x-1 translate-y-1"
            style={{ cursor: getResizeCursor('bottom-right') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
          />

          {/* Edge handles */}
          <div
            className="absolute top-0 left-2 right-2 h-1 -translate-y-0.5"
            style={{ cursor: getResizeCursor('top') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'top')}
          />
          <div
            className="absolute bottom-0 left-2 right-2 h-1 translate-y-0.5"
            style={{ cursor: getResizeCursor('bottom') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')}
          />
          <div
            className="absolute left-0 top-2 bottom-2 w-1 -translate-x-0.5"
            style={{ cursor: getResizeCursor('left') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'left')}
          />
          <div
            className="absolute right-0 top-2 bottom-2 w-1 translate-x-0.5"
            style={{ cursor: getResizeCursor('right') }}
            onMouseDown={(e) => handleResizeMouseDown(e, 'right')}
          />
        </>
      )}

      {/* Title bar */}
      <div
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-1 py-0.5 flex justify-between items-center border-b border-gray-500 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="font-bold text-xs pl-1">{title}</span>
        <div className="flex gap-0.5">
          {minimizable && (
            <button
              className="w-4 h-3.5 bg-gray-300 border border-gray-300 text-black text-xs font-bold flex items-center justify-center hover:border-gray-400 active:border-gray-500"
              onClick={handleMinimize}
              title="Minimize"
            >
              <span className="mt-1">
                &#8213;
              </span>
            </button>
          )}
          {maximizable && (
            <button
              className="w-4 h-3.5 bg-gray-300 border border-gray-300 text-black text-xs font-bold flex items-center justify-center hover:border-gray-400 active:border-gray-500"
              onClick={handleMaximize}
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <>&#9635;</> : <>&#9633;</>}
            </button>
          )}
          {closable && (
            <button
              className="w-4 h-3.5 bg-gray-300 border border-gray-300 text-black text-xs font-bold flex items-center justify-center hover:border-gray-400 active:border-gray-500"
              onClick={handleClose}
              title="Close"
            >
              &#10005;
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="bg-gray-300 h-full" style={{ height: isMaximized ? 'calc(100% - 32px)' : `${size.height - 32}px` }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Window
