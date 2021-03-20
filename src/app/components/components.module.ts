import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'

import { LogoComponent } from './logo/logo.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PopoverComponent } from './popover/stock-crypto-filter/popover.component';
import { AlertsComponent } from './popover/alerts-filter/alerts.component';
import { SOneDayComponent } from './stocks/positive/s-one-day/s-one-day.component';
import { SPOneWeekComponent } from './stocks/positive/s-p-one-week/s-p-one-week.component';
import { SPThreeMonthComponent } from './stocks/positive/s-p-three-month/s-p-three-month.component';
import { SPSixMonthComponent } from './stocks/positive/s-p-six-month/s-p-six-month.component';
import { SPOneYearComponent } from './stocks/positive/s-p-one-year/s-p-one-year.component';
import { SPThreeYearComponent } from './stocks/positive/s-p-three-year/s-p-three-year.component';
import { SPAllComponent } from './stocks/positive/s-p-all/s-p-all.component';
import { SPOneMonthComponent } from './stocks/positive/s-p-one-month/s-p-one-month.component';
import { AllSDComponent } from './stocks/negative/all-s-d/all-s-d.component';
import { DayOneSDComponent } from './stocks/negative/day-one-s-d/day-one-s-d.component';
import { MonthOneSDComponent } from './stocks/negative/month-one-s-d/month-one-s-d.component';
import { MonthSixSDComponent } from './stocks/negative/month-six-s-d/month-six-s-d.component';
import { MonthThreeSDComponent } from './stocks/negative/month-three-s-d/month-three-s-d.component';
import { WeekOneSDComponent } from './stocks/negative/week-one-s-d/week-one-s-d.component';
import { YearOneSDComponent } from './stocks/negative/year-one-s-d/year-one-s-d.component';
import { YearThreeSDComponent } from './stocks/negative/year-three-s-d/year-three-s-d.component';
import { CPOneDayComponent } from './crypto/positive/c-p-one-day/c-p-one-day.component';
import { CPOneWeekComponent } from './crypto/positive/c-p-one-week/c-p-one-week.component';
import { CPOneMonthComponent } from './crypto/positive/c-p-one-month/c-p-one-month.component';
import { CPThreeMonthComponent } from './crypto/positive/c-p-three-month/c-p-three-month.component';
import { CPSixMonthComponent } from './crypto/positive/c-p-six-month/c-p-six-month.component';
import { CPOneYearComponent } from './crypto/positive/c-p-one-year/c-p-one-year.component';
import { CPThreeYearComponent } from './crypto/positive/c-p-three-year/c-p-three-year.component';
import { CPAllComponent } from './crypto/positive/c-p-all/c-p-all.component';
import { CNOneDayComponent } from './crypto/negative/c-n-one-day/c-n-one-day.component';
import { CNOneWeekComponent } from './crypto/negative/c-n-one-week/c-n-one-week.component';
import { CNOneMonthComponent } from './crypto/negative/c-n-one-month/c-n-one-month.component';
import { CNThreeMonthComponent } from './crypto/negative/c-n-three-month/c-n-three-month.component';
import { CNAllComponent } from './crypto/negative/c-n-all/c-n-all.component';
import { CNThreeYearComponent } from './crypto/negative/c-n-three-year/c-n-three-year.component';
import { CNOneYearComponent } from './crypto/negative/c-n-one-year/c-n-one-year.component';
import { CNSixMonthComponent } from './crypto/negative/c-n-six-month/c-n-six-month.component';

const routes: Routes = [
  { path: '' }
]

@NgModule({
  declarations: [LogoComponent, TimelineComponent, PopoverComponent, AlertsComponent,
    SOneDayComponent, SPOneWeekComponent, SPOneMonthComponent, SPThreeMonthComponent,
    SPSixMonthComponent, SPOneYearComponent, SPThreeYearComponent, SPAllComponent,
    AllSDComponent, DayOneSDComponent, MonthOneSDComponent, MonthSixSDComponent,
    MonthThreeSDComponent, WeekOneSDComponent, YearOneSDComponent, YearThreeSDComponent,
    CPOneDayComponent, CPOneWeekComponent, CPOneMonthComponent, CPThreeMonthComponent, 
    CPSixMonthComponent, CPOneYearComponent, CPThreeYearComponent, CPAllComponent,
    CNOneDayComponent, CNOneWeekComponent, CNOneMonthComponent, CNThreeMonthComponent, 
    CNSixMonthComponent, CNOneYearComponent, CNThreeYearComponent, CNAllComponent,
    
  ],
  exports: [LogoComponent, TimelineComponent, PopoverComponent, AlertsComponent,
    SOneDayComponent, SPOneWeekComponent, SPOneMonthComponent, SPThreeMonthComponent,
    SPSixMonthComponent, SPOneYearComponent, SPThreeYearComponent, SPAllComponent,
    AllSDComponent, DayOneSDComponent, MonthOneSDComponent, MonthSixSDComponent,
    MonthThreeSDComponent, WeekOneSDComponent, YearOneSDComponent, YearThreeSDComponent,
    CPOneDayComponent, CPOneWeekComponent, CPOneMonthComponent, CPThreeMonthComponent, 
    CPSixMonthComponent, CPOneYearComponent, CPThreeYearComponent, CPAllComponent,
    CNOneDayComponent, CNOneWeekComponent, CNOneMonthComponent, CNThreeMonthComponent,
    CNSixMonthComponent, CNOneYearComponent, CNThreeYearComponent, CNAllComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ComponentsModule { }
