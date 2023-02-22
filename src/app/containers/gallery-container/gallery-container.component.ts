import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from '../../components/gallery-dialog/gallery-dialog.component';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';

@Component({
  selector: 'bvkz-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryContainerComponent {
  constructor(public dialog: MatDialog) {}

  onImageSelected(selectedGalleryDialogData: SelectedGalleryDialogData): void {
    if (!selectedGalleryDialogData) {
      return;
    }

    this.dialog.open(GalleryDialogComponent, {
      data: selectedGalleryDialogData,
    });
  }
}
