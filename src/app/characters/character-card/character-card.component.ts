import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../core/character.model';
import { ContextService } from '../../core/core.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() character: Character;
  @Output() select = new EventEmitter<Character>();

  constructor(private contextService: ContextService) { }

  getCharacterImage(): string {
    return this.contextService.getImage('landscape_incredible', this.character.thumbnail);
  }

  getCharacterLink(): string {
    return this.contextService.getCharacterDetailsUrl(this.character);
  }

  showCharacter() {
    this.select.emit(this.character);
  }



}
