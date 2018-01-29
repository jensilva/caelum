import {Component, Input} from "@angular/core";


@Component({
  selector: "foto",
  template: '<img src="{{url}}" class="img-fluid" alt="{{titulo}}">',
})

export class FotoComponent {

  @Input() titulo =""
  @Input() url = ""
           descricao =""
           _id
}
