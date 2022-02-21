import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit, AfterViewInit {

  pageState = 0;
  scene = 0;
  cameraOrbit = '-45deg 55deg'

  introCircles = false;
  isLoading = false;

  section3text2 = false;
  section3text3 = false;

  isGradientVisible = false;
  gradientTop!: number;
  gradientLeft!: number;
  gradientRadius!: number;
  activeAnimation = 'inactive';


  @ViewChild('modelAvatarPrimary') modelAvatarPrimary: any;
  @ViewChild('modelAvatarCorner') modelAvatarCorner: any;

  constructor(
    public el: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    /* this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          activeSection2Mobile(){
            this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 55deg 10m';
          }
        }
      }); */
  }

  @HostListener('mousewheel', ['$event']) onMousewheel(event:any){
    if (event.wheelDelta > 0) {
      console.log('Mouse Scroll Up');
      switch (this.pageState) {
        case 1:
        this.activeSection1();
        this.pageState = 0;
        break;

        case 2:
        this.activeSection2();
        this.pageState = 1;
        break;

        case 3:
        this.activeSection3();
        this.pageState = 2;
        break;

        case 4:
        this.activeSection4();
        this.pageState = 3;
        break;

        case 5:
        this.activeSection5();
        this.pageState = 4;
        break;

        case 6:
        this.activeSection6();
        this.pageState = 5;
        break;

        case 7:
        this.activeSection7();
        this.pageState = 6;
        break;

        default:
        break;
      }
    }

    if (event.wheelDelta < 0) {
      console.log('Mouse Scroll Down');
      switch (this.pageState) {
        case 0:
        this.activeSection1();
        this.pageState = 1;
        break;

        case 1:
        this.activeSection2();
        this.pageState = 2;
        break;

        case 2:
        this.activeSection3();
        this.pageState = 3;
        break;

        case 3:
        this.activeSection4();
        this.pageState = 4;
        break;

        case 4:
        this.activeSection5();
        this.pageState = 5;
        break;

        case 5:
        this.activeSection6();
        this.pageState = 6;
        break;

        case 6:
        this.activeSection7();
        this.pageState = 7;
        break;

        default:
        break;
      }
    }
  }

  @HostListener('touchmove', ['$event']) handleMove(event:any){

    if (event < 0) {
      console.log('Touch Up');
    }
    if (event > 0) {
      console.log('Touch Down');
    }
  }

  /* @HostListener('window:mousewheel', ['$event'])
  scrollHandler(event: any) {
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
  } */

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

  changeScene() {
    switch (this.scene) {
      case 0:
      console.log(this.scene);
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
      this.scene = 1;
      break;

      case 1:
      console.log(this.scene);
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/bonfireHDRI.hdr';
      this.scene = 2;
      break;

      case 2:
      console.log(this.scene);
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/nieveHDRI.hdr';
      this.scene = 3;
      break;

      case 3:
      console.log(this.scene);
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/casinoHDRI.hdr';
      this.scene = 4;
      break;

      case 4:
      console.log(this.scene);
      this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/museoHDRI.hdr';
      this.scene = 0;
      break;

      default:
      break;
    }
  };

  /* changeScene1() {
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
  } */

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

  activeMusic(){

  }

  avatarCornerHi(){
    this.modelAvatarCorner.nativeElement.animationName = 'Wave';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.speed = 0;
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1500);
  }

  avatarCornerRun(){
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  }

  activeSection1(){
    this.pageState = 0;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 0m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.autoRotate = true;
    this.avatarCornerRun();
  }

  activeSection2(){
    this.pageState = 1;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 55deg 80%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarCorner.nativeElement.animationName = 'run';
    this.avatarCornerRun();

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 55deg 10m';
        }
    });
  }

  /* activeSection3(){
    this.pageState = 2;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 2m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  } */

  activeSection3(){
    this.pageState = 2;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 2m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 10m';
        }
    });
  }

  /* activeSection5(){
    this.pageState = 4;
    this.modelAvatarCorner.nativeElement.animationName = 'Running';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 2m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = '';
    }, 1000);
  } */

  activeSection4(){
    this.pageState = 3;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 70deg 5m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
    setTimeout(() => {
      this.section3text2 = true;
    }, 1000);
    setTimeout(() => {
      this.section3text3 = true;
    }, 2000);

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.modelAvatarPrimary.nativeElement.cameraOrbit = '-45deg 70deg 10m';
        }
    });
  }

  activeSection5(){
    this.pageState = 4;
    this.scene = 0;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '359deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
    /* this.modelAvatarPrimary.nativeElement.requestAnimationFrame(animate); */
    this.avatarCornerRun();
    /* setTimeout(() => { this.changeScene1(); }, 1000);
    setTimeout(() => { this.changeScene2(); }, 2000);
    setTimeout(() => { this.changeScene3(); }, 3000);
    setTimeout(() => { this.changeScene4(); }, 4000);
    setTimeout(() => { this.changeScene5(); }, 5000); */
  }

  activeSection6(){
    this.pageState = 5;
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }

  activeSection7(){
    this.pageState = 6;
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }
}
