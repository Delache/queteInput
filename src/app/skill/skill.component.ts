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


  constructor() { }

  ngOnInit() {
  }

}
