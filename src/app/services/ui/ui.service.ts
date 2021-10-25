import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

    // This method is responsible for show toast
    toastShow(title, icon: any, text = null) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon,
            title,
            text
        })
    }

    // This method is responsible for show alert
    showAlert(title: string, icon: any, text: string = null) {
        Swal.fire({
            icon,
            title,
            text,
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: true,
        });
    }

    // This method is responsible for show a loading
    showLoading() {
        Swal.fire({
            allowOutsideClick: false,
            showCloseButton: true,
            icon: 'info',
            text: 'Please, wait...'
        })
        Swal.showLoading()
    }
    
    // This method is responsible for closing a loading
    closeLoading() {
        Swal.close()
    }
}
