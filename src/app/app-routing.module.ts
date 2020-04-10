import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { GoalsComponent } from './modules/goals/goals.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { ChoosenSkillComponent } from './modules/skills/_common/_components/choosen-skill/choosen-skill.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
      path: 'goals',
      component: GoalsComponent
  },
  {
      path: 'profile',
      component: ProfileComponent
  },
  {
      path: 'skills',
      component: SkillsComponent,
      children: [
        {
          path: ':id',
          component: ChoosenSkillComponent
        }
      ]
  },
  {
      path: 'statistics',
      component: StatisticsComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
