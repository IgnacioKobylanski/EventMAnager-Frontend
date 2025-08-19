import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event as AppEvent } from '../../models/Event';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event!: AppEvent;
}
