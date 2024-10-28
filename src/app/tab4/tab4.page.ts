import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  textInput: string = '';
  nombre: string = '';
  message: string ="";

  constructor(private toastController: ToastController) {}

  async saveText() {
    try {
      const resultado = await Filesystem.writeFile({
        path: this.nombre,
        data: this.textInput,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });

      this.showToast(`Archivo guardado en ${resultado.uri}`)
      
    } catch (error) {
      console.error('Error:', error);
      this.showToast('Error al guardar el texto.');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
