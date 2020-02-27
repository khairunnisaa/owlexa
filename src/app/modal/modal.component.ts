import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) {   console.log("modoll",this.modalData);}

  ngOnInit() {
  }

  actionFunction() {
    alert("I am a work in progress");
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }


}
