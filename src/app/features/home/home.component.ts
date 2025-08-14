import { Component, OnInit } from '@angular/core';
import { Event } from '../events/models/Event';
import { EventService } from '../events/services/event-service';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { EventListComponent } from '../events/components/event-list/event-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, EventListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  featuredEvents: Event[] = [];
  errorMessage: string | null = null;

  constructor(private eventService: EventService){}

  ngOnInit(){
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.featuredEvents = this.getRandomEvents(data, 3);
        this.errorMessage = null;
      },
      error: (err) => {
        console.error("Error fetching data:", err);
        this.errorMessage = "Events not found, try again later"; 
      }
    });
  }

  private getRandomEvents(array: Event[], count: number): Event[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
  }
}