import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>(); //generic annotation // submit a string
  
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    const t = event.target as HTMLInputElement;
    const tVal = t.value;
    this.term = tVal;
  }

  onFormSubmit(event: any) {
    event.preventDefault(); // stop browser from pushing input to backend
    //console.log(this.term);
    this.submitted.emit(this.term);
  }
}
