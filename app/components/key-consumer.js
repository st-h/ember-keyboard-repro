import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class KeyConsumerComponent extends Component {

  @tracked count = 0;

  @action
  onKey(e) {
    e.preventDefault();
    console.log('key pressed');
    this.count++;
  }
}
