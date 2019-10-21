import { SkillComponent } from './../skill/skill.component';
import { Developer } from './../common/developer.model';
import { Component, OnInit} from '@angular/core';
import { Skill } from '../common/skill.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  developer: Developer = {
    lastName: 'Delache',
    firstName: 'Eric',
    age: 38,
    sexe: 'Male',
    bio: 'Bla-bla-bla très intéressant'
  };

  skills: Skill[] = [{
    name: 'JavaScript',
    logo: 'Js',
    site: 'www.js.com',
    }, {
    name: 'Web semantique',
    logo: 'Html',
    site: 'www.html.com',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
