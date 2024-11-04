import {Toaster, toast } from 'sonner'


export default function ToastExamples() {
  const showDefaultToast = () => {
    toast('My first toast')
  }

  const showSuccessToast = () => {
    toast.success('Successfully saved!')
  }

  const showErrorToast = () => {
    toast.error('An error occurred')
  }

  const showInfoToast = () => {
    toast.info('Did you know? This is an info toast.')
  }

  const showWarningToast = () => {
    toast.warning('Warning: Please save your changes')
  }

  const showPromiseToast = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Loading...',
        success: 'Promise resolved!',
        error: 'Promise rejected!'
      }
    )
  }

  const showCustomToast = () => {
    toast('Custom Toast', {
      description: 'With a detailed description',
      icon: '👋',
      duration: 5000,
      position: 'top-center'
    })
  }

  const showActionToast = () => {
    toast('Document created', {
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo clicked')
      }
    })
  }

  const showMultipleActionsToast = () => {
    toast('Multiple actions available', {
      action: {
        label: 'Action 1',
        onClick: () => console.log('Action 1 clicked')
      },
      cancel: {
        label: 'Cancel',
        onClick: () => console.log('Cancelled')
      }
    })
  }

  const showPersistentToast = () => {
    toast('This toast will persist', {
      duration: Infinity,
      onDismiss: () => console.log('Toast dismissed')
    })
  }

  return (
    <div className="space-y-4 p-4">
       <Toaster />
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={showDefaultToast}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Default Toast
        </button>

        <button 
          onClick={showSuccessToast}
          className="p-2 bg-green-500 text-white rounded"
        >
          Success Toast
        </button>

        <button 
          onClick={showErrorToast}
          className="p-2 bg-red-500 text-white rounded"
        >
          Error Toast
        </button>

        <button 
          onClick={showInfoToast}
          className="p-2 bg-blue-400 text-white rounded"
        >
          Info Toast
        </button>

        <button 
          onClick={showWarningToast}
          className="p-2 bg-yellow-500 text-white rounded"
        >
          Warning Toast
        </button>

        <button 
          onClick={showPromiseToast}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Promise Toast
        </button>

        <button 
          onClick={showCustomToast}
          className="p-2 bg-gray-500 text-white rounded"
        >
          Custom Toast
        </button>

        <button 
          onClick={showActionToast}
          className="p-2 bg-indigo-500 text-white rounded"
        >
          Action Toast
        </button>

        <button 
          onClick={showMultipleActionsToast}
          className="p-2 bg-pink-500 text-white rounded"
        >
          Multiple Actions Toast
        </button>

        <button 
          onClick={showPersistentToast}
          className="p-2 bg-orange-500 text-white rounded"
        >
          Persistent Toast
        </button>
      </div>
    </div>
  )
}