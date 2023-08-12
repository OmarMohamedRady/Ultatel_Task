import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor() {}

  Success(message: string, title: string = '') {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      text: message,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  Error(message: string, title: string = '') {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      text: message,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  ServerError(message: string, title: string = '') {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      text: message,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  // COnfirm(title: string, message:string)
}
