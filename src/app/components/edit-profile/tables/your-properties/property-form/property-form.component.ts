import {AfterViewInit, Component, EventEmitter, Host, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Property} from "../../../../../models/Property";
import {UserService} from "../../../../../public/shared/services/userservice/user.service";
import {PropertyService} from "../../../../../public/shared/services/propertyservice/property.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-property-form',
    templateUrl: './property-form.component.html',
    styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit, AfterViewInit{
    propertyForm: FormGroup;

    @Input()isInProperties:boolean=false
    @Input()editMode:boolean = false
    @Input()property:Property
    @Output()editProperty = new EventEmitter<Property>()
    @Output()cancelEdit=new EventEmitter<boolean>()

    constructor(private formBuilder: FormBuilder,
                private _propertyService:PropertyService,
                private _router:Router,
                private _userService:UserService,) {

        this.propertyForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required],
            urlImg: ['', Validators.required],
            characteristics: ['', Validators.required],
            location: ['', Validators.required],
            available: ['', Validators.required],
        });

        this.property = {
            id:0,
            authorId: this._userService.getIdUserLoged(),
            name: '',
            urlImg: '',
            description: '',
            characteristics: '',
            location: '',
            category: '',
            available: true,
            reservedUsers:[],
            isPosted:false,
        };
    }

    ngAfterViewInit() {
        if (this.editMode) {
            this.propertyForm.setValue({
                name: this.property.name,
                description: this.property.description,
                category: this.property.category,
                urlImg: this.property.urlImg,
                characteristics: this.property.characteristics,
                location: this.property.location,
                available: this.property.available,
            });
        }
    }

    ngOnInit() {

    }
  propertyValuesFromForm() {
    this.property = {
      id: this.property && this.property.id ? this.property.id : 0,
      authorId: this._userService.getIdUserLoged(),
      name: this.propertyForm.get('name')?.value,
      description: this.propertyForm.get('description')?.value,
      category: this.propertyForm.get('category')?.value,
      urlImg: this.propertyForm.get('urlImg')?.value,
      characteristics: this.propertyForm.get('characteristics')?.value,
      location: this.propertyForm.get('location')?.value,
      available: this.propertyForm.get('available')?.value,
      reservedUsers: [],
      isPosted: false,
    };
  }

    addProperty() {
        if (this.propertyForm.valid) {
            this.propertyValuesFromForm()

            if (this.editMode) {
                this.editProperty.emit(this.property);
            }else{
                this._propertyService.create(this.property).subscribe(() => {
                  if(this.isInProperties){
                    this.isInProperties=false
                    this.cancelEdit.emit(true)
                  }else {
                    this._router.navigate(['/add-post']);
                  }

                });
            }

        } else {
            alert("Please complete all the fields");
        }
    }

  onCancelEdit() {
      if(this.isInProperties){
        this.isInProperties=false
        this.cancelEdit.emit(true)
      }else {
        window.history.back()
      }

  }
}
