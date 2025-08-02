"use client"

import WindowsButton from "./WindowsButton"

type StowedWindow = {
  id: string
  title: string
  onRestore: () => void
}

type StowBarProps = {
  stowedWindows: StowedWindow[]
  onRemove: (id: string) => void
}

const StowBar = ({ stowedWindows, onRemove }: StowBarProps) => {
  if (stowedWindows.length === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-200 border-t-2 border-gray-400 shadow-lg z-50">
      <div className="flex gap-1 p-1 overflow-x-auto">
        {stowedWindows.map((window) => (
          <div
            key={window.id}
          >
            <WindowsButton
              onClick={window.onRestore}
              className="text-xs text-black truncate mr-2 px-2 py-1 max-w-32"
              title={`Restore ${window.title}`}
              closeButton
              onClose={() => onRemove(window.id)}
            >
              {window.title}
            </WindowsButton>

          </div>
        ))}
      </div>
    </div>
  )
}

export default StowBar

