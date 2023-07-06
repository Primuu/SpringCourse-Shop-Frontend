import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminProductUpdate } from './model/adminProductUpdate';
import { Observable } from 'rxjs';
import { UploadResponse } from './model/uploadResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminProductUpdateService {

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<AdminProductUpdate> {
    return this.http.get<AdminProductUpdate>("/api/admin/products/" + id);
  }

  saveProduct(id: number, value: AdminProductUpdate) {
    return this.http.put<AdminProductUpdate>("/api/admin/products/" + id, value);
  }

  uploadImage(formData: FormData): Observable<UploadResponse> {
    return this.http.post<UploadResponse>('/api/admin/products/upload-image', formData);
  }

}
