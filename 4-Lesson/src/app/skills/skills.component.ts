import { Component, OnInit } from '@angular/core';
import { SkillModel } from '../models/skill';
import { Level } from '../types/level.enum';
import { SkillsService } from '../services/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: SkillModel[];
  dataService: SkillsService;

  constructor(private skillsService2: SkillsService) {
    this.dataService = this.skillsService2;
  }

  ngOnInit() {
    this.skills = this.dataService.skills;


  }
}
