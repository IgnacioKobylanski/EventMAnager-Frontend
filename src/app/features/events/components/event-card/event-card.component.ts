import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event as AppEvent } from '../../models/Event';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event!: AppEvent;
}
