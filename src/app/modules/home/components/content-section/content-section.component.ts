import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScrollDirection } from '@angular/material/tabs';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss'],
  animations: [

    /* trigger('h2Animation', [
      state('visible', style({ opacity: 1, lineHeight: 1.1 })),
      state('enter', style({ opacity: 0, lineHeight: 4, transform: 'translateY(300)' })),
      state('leave', style({ opacity: 0, lineHeight: 4, transform: 'translateY(-300)' })),
      transition('enter => visible', animate('1000ms ease')),
      transition('visible => leave', animate('500ms ease')),
    ]), */

    /* trigger('h2Animation', [
      state('void', style({ opacity: 0, lineHeight: 4 })),
      transition(':enter', [
        animate('1000ms ease', style({ opacity: 1, lineHeight: 1.1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('1000ms ease', style({ opacity: 0, lineHeight: 4, transform: 'translateY(-300)' }))
      ]),
    ]), */

    trigger('paragraphAnimation', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, transform: 'translateY(-200px)', filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class ContentSectionComponent implements OnInit {

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

  @HostListener('window:mousewheel', ['$event'])
  scrollHandler(event: any) {
    console.log("Scroll Event");

    // Is Scroll Down
    if (this.pageState = 0) {
      this.activeSection1();
    } if (this.pageState = 1) {
      this.activeSection2();
    } if (this.pageState = 2) {
      this.activeSection3();
    } if (this.pageState = 3) {
      this.activeSection4();
    } if (this.pageState = 4) {
      this.activeSection5();
    } if (this.pageState = 5) {
      this.activeSection6();
    } return
  }

  /* @HostListener('mouseenter')
  onMouseEnter() {
    this.isGradientVisible = true;
  } */

  /* @HostListener('mouseleave')
  onMouseLeave() {
    this.isGradientVisible = false;
  } */

  /* @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
    this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
  } */

  ngAfterViewInit() {
    /* this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width; */
    this.activeSection1();

    /* setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = 'Wave';
      console.log('Hola');
      console.log(this.modelAvatarCorner);
    }, 5000); */
  }

  /* get gradientStyle() {
    const top = this.gradientTop;
    const left = this.gradientLeft;
    const gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;

    return {
      'height.px': gradientRadius,
      'width.px': gradientRadius,
      'top.px': top,
      'left.px': left
    };
  } */

  changeScene1() {
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
  }

  changeScene2() {
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/bonfireHDRI.hdr';
  }

  changeScene3() {
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/nieveHDRI.hdr';
  }

  changeScene4() {
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/casinoHDRI.hdr';
  }

  changeScene5() {
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/museoHDRI.hdr';
  }

  /* changeState(){
    if (this.scene == 0) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
      this.scene = 1;
    } if (this.scene == 1) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/bonfireHDRI.hdr';
      this.scene = 2;
    } if (this.scene == 2) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/nieveHDRI.hdr';
      this.scene = 3;
    } if (this.scene == 3) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/casinoHDRI.hdr';
      this.scene = 4;
    } if (this.scene == 4) {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/museoHDRI.hdr';
      this.scene = 5;
    } else {
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
      this.scene = 0;
    }
  } */

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
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 0m';
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
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 55deg 1m';
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
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 2m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection4(){
    this.pageState = 3;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 2m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection5(){
    this.pageState = 4;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 2m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection6(){
    this.pageState = 5;
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

  activeSection7(){
    this.pageState = 6;
    this.scene = 0;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 70deg 10m';
    /* this.modelAvatarPrimary.nativeElement.requestAnimationFrame(animate); */
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
    }, 1000);
  }

  activeSection8(){
    this.pageState = 7;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection9(){
    this.pageState = 8;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = 'Wave';
    }, 1000);
  }

}
