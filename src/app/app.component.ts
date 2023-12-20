import {AfterViewInit, Component} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {TreksService} from "./services/treks.service";
import {Trek} from "./models/Trek";
import {MatDialog} from "@angular/material/dialog";
import {TrekEditDialogComponent} from "./components/trek-edit-dialog/trek-edit-dialog.component";
import {parseGPX} from "@we-gold/gpxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import firebase from "firebase/compat";
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import {updateDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Treks view';
  displayGpx: string[] = [];

  constructor(public authService: AuthenticationService,
              public snackBar: MatSnackBar,
              public trekService: TreksService,
              public dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
  }


  displayTrek(trek: Trek) {
    if(trek.data) {
      this.displayGpx = [trek.data];
    }
  }

  async onUpload(event: Event) {

    //@ts-ignore
    const filename = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      const data = e.target?.result;
      if (typeof data === 'string') {
        const [parsedFile, error] = parseGPX(data);
        if (error) throw error; //FIXME

        const trek = new Trek();
        trek.data = data;
        if(parsedFile?.metadata.name) {
          trek.title = parsedFile.metadata.name;
        }

        this.authService.authState$.subscribe((user) => {
          if(user && user.email) {
            trek.owner = user.email;
          } //FIXME

          const dateString = parsedFile?.metadata.time;
          if (dateString) {
            trek.date = new Date(dateString).getTime();
          }

          this.openEditDialog(trek)
            .subscribe((trek?: Trek) => {
              if(trek) {
                this.trekService.add(trek)
                  .then(() => this.snackBar.open(`${trek.title} saved`,"OK", {duration: 2000}));
              }
            });
        })

      }
    };
    reader.readAsText(filename);

  }

  private openEditDialog(trek: Trek): Observable<Trek> {
    return this.dialog
      .open(TrekEditDialogComponent, {data: {trek}, width: "500px", height: "500px" })
      .afterClosed()
  }

  edit(trekDocument: QueryDocumentSnapshot<Trek>) {
    this.openEditDialog(trekDocument.data())
      .subscribe((trek?: Trek) => {
        if(trek) {
          this.trekService.update(trekDocument.id, trek)
            .then(() => this.snackBar.open(`trek ${trek.title} updated`,"OK", {duration: 2000}));
        }
      })
  }
}
