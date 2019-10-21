import { DeveloperComponent } from './../developer/developer.component';
import { Skill } from './../common/skill.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {
  @Input() skillName: string;
  @Input() skillLogo: string;
  @Input() skillSite: string;

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
