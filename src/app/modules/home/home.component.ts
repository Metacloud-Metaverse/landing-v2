import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      transition('inactive <=> active', animate('500ms ease-in')),
      transition('active <=> inactive', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  pageState = 0;
  cameraOrbit = '-45deg 55deg'

  introCircles = false;
  isLoading = false;
  introAvatar = true;

  isGradientVisible = false;
  gradientTop!: number;
  gradientLeft!: number;
  gradientRadius!: number;
  activeAnimation = 'inactive';


  @ViewChild('modelAvatarPrimary') modelAvatarPrimary: any;
  @ViewChild('modelAvatarCorner') modelAvatarCorner: any;

  constructor(public el: ElementRef<HTMLElement>,) { }

  ngOnInit(): void {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isGradientVisible = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isGradientVisible = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
    this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
  }

  ngAfterViewInit() {
    /* this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width; */
    this.activeSection1();

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = 'Wave';
      console.log('Hola');
      console.log(this.modelAvatarCorner);
    }, 5000);
  }

  get gradientStyle() {
    const top = this.gradientTop;
    const left = this.gradientLeft;
    const gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;

    return {
      'height.px': gradientRadius,
      'width.px': gradientRadius,
      'top.px': top,
      'left.px': left
    };
  }

  avatarCornerHi(){
    this.modelAvatarCorner.nativeElement.animationName = 'Wave';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.speed = 0;
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection1(){
    this.pageState = 0;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 0m';
    this.modelAvatarPrimary.nativeElement.autoRotate = true;

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection2(){
    this.pageState = 1;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 55deg 1m';

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection3(){
    this.pageState = 2;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 3em';

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection4(){
    this.pageState = 3;
    this.modelAvatarCorner.nativeElement.animationName = '';
  }

}
