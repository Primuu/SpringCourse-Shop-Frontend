import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" class="parent-form">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Enter name" formControlName="name">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <textarea matInput rows="15" placeholder="Enter description" formControlName="description"></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Category</mat-label>
            <input matInput placeholder="Enter category" formControlName="category">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Price</mat-label>
            <input matInput placeholder="Enter price" formControlName="price">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Currency</mat-label>
            <input matInput placeholder="Enter currency" formControlName="currency">
        </mat-form-field>

        <div class="buttons">
            <button mat-flat-button color="primary">Save</button>
        </div>
    </div>
    `,
    styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {
        
    }

}