// game-area.component.ts

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent {
  // Variable to track the zoom level
  zoom = 1;

  // Variables to track the scroll visibility
  showHorizontalScroll = false;
  showVerticalScroll = false;

  // Function to handle zooming in
  zoomIn() {
    this.zoom *= 1.1; // Adjust the zoom factor as needed
    this.updateScrollVisibility();
  }

  // Function to handle zooming out
  zoomOut() {
    this.zoom /= 1.1; // Adjust the zoom factor as needed
    this.updateScrollVisibility();
  }

  // Function to update scroll visibility based on the zoom level
  private updateScrollVisibility() {
    const container = document.getElementById('game-board-container');
    if (container) {
      this.showHorizontalScroll = container.scrollWidth > container.clientWidth;
      this.showVerticalScroll = container.scrollHeight > container.clientHeight;
    }
  }

  // HostListener to detect window resize and update scroll visibility
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateScrollVisibility();
  }
}
