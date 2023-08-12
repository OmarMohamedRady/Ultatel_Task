import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor() {}
  Error(message: string, title: string = '') {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      text: message,
      showConfirmButton: false,
      timer: 5000,
    });
  }
}
