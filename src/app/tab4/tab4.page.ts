import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  textInput: string = '';
  message: string = '';

  constructor(private file: File, private toastController: ToastController) {}

  async saveText() {
    try {
      // Ruta del archivo
      const filePath = this.file.dataDirectory;
      const fileName = 'texto.txt';

      // Verifica si el archivo existe antes de escribir
      const fileExists = await this.file.checkFile(filePath, fileName);
      if (!fileExists) {
        await this.file.createFile(filePath, fileName, true);
      }

      // Escribe el texto en el archivo
      await this.file.writeFile(filePath, fileName, this.textInput, { replace: true });
      this.message = `Texto guardado en: ${filePath}${fileName}`;
      this.showToast('Texto guardado con éxito!');
    } catch (error) {
      console.error('Error:', error);
      this.message = 'Error al guardar el texto.';
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
