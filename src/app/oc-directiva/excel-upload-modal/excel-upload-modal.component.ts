import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excel-upload-modal',
  templateUrl: './excel-upload-modal.component.html',
  styleUrls: ['./excel-upload-modal.component.scss']
})
export class ExcelUploadModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExcelUploadModalComponent>) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  uploadFile(): void {
    // Agregar lógica para subir el archivo aquí
    // Puedes comunicar resultados al componente principal
    this.dialogRef.close('Archivo subido exitosamente');
  }

  ngOnInit(): void {
  }
}