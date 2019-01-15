import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatProgressSpinnerModule,
         MatCardModule,
         MatChipsModule,
         MatSidenavModule,
         MatChip,
         MatTabsModule,
         MatGridListModule,
         MatListModule,
         MatIconModule,
         MatTableModule,
         MatSelectModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatPaginatorModule,
         MatSnackBarModule,
         MatMenuModule,
         MatButtonToggleModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatSidenavModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule,
        MatGridListModule, MatTableModule, MatDialogModule, MatListModule, MatIconModule, MatSelectModule, MatDatepickerModule,
        MatNativeDateModule, MatPaginatorModule, MatSnackBarModule, MatMenuModule, MatButtonToggleModule ],
    exports: [ MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatSidenavModule, MatCardModule, MatChipsModule,
        MatTabsModule, MatGridListModule, MatTableModule, MatDialogModule, MatListModule, MatIconModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatSnackBarModule, MatMenuModule, MatButtonToggleModule ]
})

export class MaterialModule {}

