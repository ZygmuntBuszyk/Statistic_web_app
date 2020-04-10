import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { GoalsComponent } from './modules/goals/goals.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { SkillCardComponent } from './modules/skills/_common/_components/skill-card/skill-card.component';
import { ChoosenSkillComponent } from './modules/skills/_common/_components/choosen-skill/choosen-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    StatisticsComponent,
    ProfileComponent,
    GoalsComponent,
    SkillsComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    SkillCardComponent,
    ChoosenSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
