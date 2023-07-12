import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" class="parent-form">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Enter name" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="message">
                <div *ngIf="name?.errors?.['required']">
                    Name is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                    Name must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Friendly url</mat-label>
            <input matInput placeholder="Enter url" formControlName="slug">
            <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)" class="message">
                <div *ngIf="slug?.errors?.['required']">
                    Url is required
                </div>
                <div *ngIf="slug?.errors?.['minlength']">
                    Url must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <textarea matInput rows="15" placeholder="Enter description" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="message">
                <div *ngIf="description?.errors?.['required']">
                    Description is required
                </div>
                <div *ngIf="description?.errors?.['minlength']">
                    Description must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Category</mat-label>
            <input matInput placeholder="Enter category" formControlName="category">
            <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="message">
                <div *ngIf="category?.errors?.['required']">
                    Category is required
                </div>
                <div *ngIf="category?.errors?.['minlength']">
                    Category must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Price</mat-label>
            <input matInput placeholder="Enter price" formControlName="price">
            <div *ngIf="price?.invalid && (price?.dirty || price?.touched)" class="message">
                <div *ngIf="price?.errors?.['required']">
                    Price is required
                </div>
                <div *ngIf="price?.errors?.['pattern']">
                    Price must be  number
                </div>
                <div *ngIf="price?.errors?.['min']">
                    Price must be greater than 0
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Currency</mat-label>
            <input matInput placeholder="Enter currency" formControlName="currency">
            <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)" class="message">
                <div *ngIf="currency?.errors?.['required']">
                    Currency is required
                </div>
            </div>
        </mat-form-field>

        <div class="buttons">
            <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Save</button>
        </div>
    </div>
    `,
    styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {
        
    }

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get category() {
        return this.parentForm.get("category");
    }

    get price() {
        return this.parentForm.get("price");
    }

    get currency() {
        return this.parentForm.get("currency");
    }

    get slug() {
        return this.parentForm.get("slug");
    }

}