import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {

}
