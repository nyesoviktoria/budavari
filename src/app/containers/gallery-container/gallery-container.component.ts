import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from '../../components/gallery-dialog/gallery-dialog.component';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';
import { Store } from '@ngrx/store';
import { fetchGallery } from './store/actions/gallery-actions';
import { selectGallery } from './store/selectors/gallery.selectors';
import { NgIf, AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';
import { GalleryFolderComponent } from '../../components/gallery-folder/gallery-folder.component';
import { TranslateModule } from '@ngx-translate/core';
import { HasErrorPipe } from '../../pipes/web-request-state/has-error.pipe';
import { HasResultPipe } from '../../pipes/web-request-state/has-result.pipe';
import { IsLoadingPipe } from '../../pipes/web-request-state/is-loading.pipe';

@Component({
    selector: 'bvkz-gallery-container',
    templateUrl: './gallery-container.component.html',
    styleUrls: ['./gallery-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        LoaderComponent,
        GalleryFolderComponent,
        AsyncPipe,
        TranslateModule,
        HasErrorPipe,
        HasResultPipe,
        IsLoadingPipe,
    ],
})
export class GalleryContainerComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}

  readonly galleryItems$ = this.store.select(selectGallery);

  ngOnInit(): void {
    this.store.dispatch(fetchGallery());
  }

  onImageSelected(selectedGalleryDialogData: SelectedGalleryDialogData): void {
    if (!selectedGalleryDialogData) {
      return;
    }

    this.dialog.open(GalleryDialogComponent, {
      data: selectedGalleryDialogData,
    });
  }
}
