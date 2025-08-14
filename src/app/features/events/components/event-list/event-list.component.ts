import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../event-card/event-card.component';
import { EventService } from '../../services/event-service';
import { Event as AppEvent } from '../../models/Event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: AppEvent[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error('Error al cargar eventos', err)
    });
  }
}
