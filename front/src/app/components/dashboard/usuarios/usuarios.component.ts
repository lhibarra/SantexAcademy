import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/usuario.service';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: User[] = [];
  page: number = 1;
  pageSize: number = 10;

  displayedColumns: string[] = ["firstName", "lastName", "username", "email", "phone", "rol", "acciones"];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  router: any;
  user: any;

  constructor(private userService: UserService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.dataSource.sort = this.sort;
  }

  async cargarUsuarios() {
    this.listUsuarios = [];
    const token = localStorage.getItem('token');
    if (token !== null) {
      try {
        this.userService.getUsersPaginator(this.page, this.pageSize).subscribe((data) => {
          console.log(data);
          this.listUsuarios = data;
          this.dataSource = new MatTableDataSource(this.listUsuarios);
        });
        // this.listUsuarios = await this.userService.getUsers(token);
        console.log(this.dataSource);
        // this.dataSource = new MatTableDataSource(this.listUsuarios);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        this._snackBar.open('Ocurrió un error al cargar la lista de usuarios. Por favor, inténtelo nuevamente.', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    } else {
      this._snackBar.open('Debe iniciar sesión con rol Admin para acceder a la lista de usuarios', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async deleteUser(id: number) {
    const token = localStorage.getItem('token');
    console.log(id);
    if (!token) {
      this._snackBar.open(
        'Debe iniciar sesión con rol Admin para acceder a la lista de usuarios',
        '',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
      return; // Salir de la función si no hay token
    }

    try {
      await this.userService.deleteUser({ userId: id, token });
      this.cargarUsuarios();
      this._snackBar.open('Usuario eliminado con éxito.', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    } catch (error) {
      this._snackBar.open(
        'Ocurrió un error al eliminar el usuario. Por favor, inténtalo nuevamente.',
        '',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
    }
  }

  search() {
    this.router.navigate('/dashboard');
  }

  abrirVistaDeUsuario(id: any): void {
    this.dialog.open(VerUsuarioComponent, {
      width: '700px',
      disableClose: true,
      data: { id: id },
    });
  }

}
