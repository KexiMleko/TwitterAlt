import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  categoriesExpanded = false;
  categories: { categoryName: string; matIconName: string }[] = [
    { categoryName: 'Sports', matIconName: 'sports' },
    { categoryName: 'Technology', matIconName: 'computer' },
    { categoryName: 'Health', matIconName: 'health_and_safety' },
    { categoryName: 'Entertainment', matIconName: 'theaters' },
    { categoryName: 'Finance', matIconName: 'attach_money' },
    { categoryName: 'Travel', matIconName: 'airplanemode_active' },
    { categoryName: 'Lifestyle', matIconName: 'style' },
    { categoryName: 'Education', matIconName: 'school' }
  ];

  toggleCategories() {
    this.categoriesExpanded = !this.categoriesExpanded;
  }

  // showElement = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   this.showElement = window.scrollY > 200; // Change 200 to the desired scroll threshold
  // }
}
