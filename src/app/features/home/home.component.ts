import { Component, OnInit } from '@angular/core';
import { Event } from '../events/models/Event';
import { EventService } from '../events/services/event-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  errorMessage: string | null = null;

  constructor(private eventService: EventService){}

  ngOnInit(){
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error("Error fetching data:", err);
        this.errorMessage = "Events not found, try again later"; 
      }
    }
  );
  }
}
