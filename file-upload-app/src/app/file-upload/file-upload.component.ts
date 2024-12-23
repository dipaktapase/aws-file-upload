import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent {
  file: File | null = null;
  fileUrl: string | null = null;

  constructor(private uploadService: UploadService) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      this.file = input.files[0];
    }
  }

  upload() {
    if (this.file) {
      this.uploadService.uploadFile(this.file).subscribe((response) => {
        this.fileUrl = response.url;
      });
    }
  }
}
