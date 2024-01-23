import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { RegisterService } from '../../services/register.service';

@Component({
    standalone: true,
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports: [RegisterFormComponent],
})
export class RegisterComponent {

}
