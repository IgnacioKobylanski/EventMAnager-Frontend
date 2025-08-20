import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event-service';
import { Event } from '../../models/Event';
import { Location } from '@angular/common';
@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {
  event?: Event;
  loading = true;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.getEventById(id).subscribe({
        next: (data) => {
          this.event = data;
          this.loading = false;
        },
        error: () => {
          this.error = 'No se pudo cargar el evento';
          this.loading = false;
        }
      });
    } else {
      this.error = 'ID de evento inválido';
      this.loading = false;
    }
  }

  goBack(): void {
    this.location.back();
  }
}