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
  scene = 0;
  cameraOrbit = '-45deg 55deg'

  introCircles = false;
  isLoading = false;
  introAvatar = true;

  section3text2 = false;
  section3text3 = false;

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

  changeState(){
    if (this.scene == 0) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/models/environment-whipple_creek_regional_park_04_1k.hdr';
      this.scene = 1;
    } if (this.scene == 1) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/models/environment-kloppenheim_02_4k.hdr';
      this.scene = 2;
    } else {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/models/environment-spruit_sunrise_1k_HDR.hdr';
      this.scene = 0;
    }
  }

  avatarCornerHi(){
    this.modelAvatarCorner.nativeElement.animationName = 'Wave';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.speed = 0;
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1500);
  }

  activeSection1(){
    this.pageState = 0;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 1m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.autoRotate = true;

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection2(){
    this.pageState = 1;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 55deg 3m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection3(){
    this.pageState = 2;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 5m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection4(){
    this.pageState = 3;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 70deg 5m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
      this.section3text2 = true;
    }, 1000);

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
      this.section3text3 = true;
    }, 2000);
  }

  activeSection5(){
    this.pageState = 4;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 70deg 8m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/models/environment-spruit_sunrise_1k_HDR.hdr';
    this.modelAvatarPrimary.nativeElement.exposure = 1;
    this.modelAvatarPrimary.nativeElement.requestAnimationFrame(animate);

    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
      this.modelAvatarPrimary.nativeElement.exposure = 0;
    }, 1000);
  }
}
