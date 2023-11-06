import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ExcelUploadModalComponent } from './excel-upload-modal/excel-upload-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-oc-directiva',
  templateUrl: './oc-directiva.component.html',
  styleUrls: ['./oc-directiva.component.scss']
})
export class OcDirectivaComponent implements OnInit {

  dataSource = [
    { id: 1, name: 'John', age: 30, city: 'New York', country: 'USA', job: 'Engineer', date: new Date('2023-11-01') },
    { id: 2, name: 'Alice', age: 25, city: 'Los Angeles', country: 'USA', job: 'Designer', date: new Date('2023-12-01') },
    { id: 3, name: 'Bob', age: 35, city: 'Toronto', country: 'Canada', job: 'Manager', date: new Date('2023-11-05') },
    { id: 4, name: 'Eva', age: 28, city: 'London', country: 'UK', job: 'Developer', date: new Date('2023-11-09') },
    { id: 5, name: 'Michael', age: 40, city: 'Berlin', country: 'Germany', job: 'Architect', date: new Date('2021-06-01') },
  ];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    
  }

  openFileUploadModal(): void {
    const dialogRef = this.dialog.open(ExcelUploadModalComponent, {
      width: '28%'
    });

    // Opcional: Manejar resultados del modal
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró con resultado:', result);
    })
  }
  
  

  filterTable(selectedDate: Date | null) {
    if (selectedDate) {
      this.dataSource = this.dataSource.filter(item => {
        return new Date(item.date).toDateString() === selectedDate.toDateString();
      });
    } else {
      // Si no se selecciona una fecha, muestra todos los datos originales
      this.dataSource = [
        { id: 1, name: 'John', age: 30, city: 'New York', country: 'USA', job: 'Engineer', date: new Date('2023-11-01') },
        { id: 2, name: 'Alice', age: 25, city: 'Los Angeles', country: 'USA', job: 'Designer', date: new Date('2023-11-01') },
        { id: 3, name: 'Bob', age: 35, city: 'Toronto', country: 'Canada', job: 'Manager', date: new Date('2023-11-01') },
        { id: 4, name: 'Eva', age: 28, city: 'London', country: 'UK', job: 'Developer', date: new Date('2023-11-01') },
        { id: 5, name: 'Michael', age: 40, city: 'Berlin', country: 'Germany', job: 'Architect', date: new Date('2023-11-01') },
      ];
    }
  }



  displayedColumns: string[] = ['id', 'name', 'age', 'city', 'country', 'job', 'date'];


  ngOnInit(): void {
  }

}
