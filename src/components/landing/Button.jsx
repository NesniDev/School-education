import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Button() {

    const [alert, setAlert] = useState(false)

  return (
    <>
        <button class="bg-indigo-500 px-3 py-2 hover:bg-indigo-400 transition-all rounded-xl" onClick={()=>setAlert(
            toast.success("Gracias por dar un click!!!"),
            !alert
            )}>
                    Más Información...
        </button>
        <ToastContainer/>
    </>
  )
}

export default Button
