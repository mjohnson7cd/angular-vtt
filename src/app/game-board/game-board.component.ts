// game-board.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  gridColumns = 34; // Adjust the number of columns in the grid
  gridRows = 40; // Adjust the number of rows in the grid
  zoomLevel = 1;

  get gridTemplateColumns(): string {
    return `repeat(${this.gridColumns}, 70px)`;
  }

  get gridTemplateRows(): string {
    return `repeat(${this.gridRows}, 70px)`;
  }

  get gridCells(): number[] {
    // Generate an array of numbers to use in the ngFor loop
    return Array.from({ length: this.gridColumns * this.gridRows }, (_, index) => index);
  }

  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    if (this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
    }
  }
}
