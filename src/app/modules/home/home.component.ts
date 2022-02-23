import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
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

  isLoading = false;

  section3text2 = false;
  section3text3 = false;

  activeAnimation = 'inactive';

  @ViewChild('modelAvatarPrimary') modelAvatarPrimary: any;
  @ViewChild('modelAvatarCorner') modelAvatarCorner: any;

  constructor(
    public el: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver,
  ) { }

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
        this.activeSection2();
        this.pageState = 1;
        break;

        case 1:
        this.activeSection3();
        this.pageState = 2;
        break;

        case 2:
        this.activeSection4();
        this.pageState = 3;
        break;

        case 3:
        this.activeSection5();
        this.pageState = 4;
        break;

        case 4:
        this.activeSection6();
        this.pageState = 5;
        break;

        case 5:
        this.activeSection7();
        this.pageState = 6;
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

  ngAfterViewInit() {
    /* this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width; */
    this.activeSection1();

    /* setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = 'Wave';
      console.log('Hola');
      console.log(this.modelAvatarCorner);
    }, 5000); */
  }

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

  activeMusic(){
    this.modelAvatarPrimary.nativeElement.animationName = 'dancing';
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

  activeSection4(){
    this.pageState = 3;
    this.section3text2 = false;
    this.section3text3 = false;
    /* this.modelAvatarPrimary.nativeElement.cameraControls = false; */
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.autoRotate = false;
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
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '10deg 10deg 1m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }

  activeSection6(){
    this.pageState = 5;
    this.scene = 0;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '1deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
    this.modelAvatarPrimary.nativeElement.timescale = '1';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concertHDRI.hdr';
    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = '90deg 70deg 1000%';
    }, 1000);
    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = '180deg 70deg 1000%';
    }, 2000);
    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = '270deg 70deg 1000%';
    }, 3000);
    /* this.modelAvatarPrimary.nativeElement.requestAnimationFrame(animate); */
    this.avatarCornerRun();
    /* setTimeout(() => { this.changeScene1(); }, 1000);
    setTimeout(() => { this.changeScene2(); }, 2000);
    setTimeout(() => { this.changeScene3(); }, 3000);
    setTimeout(() => { this.changeScene4(); }, 4000);
    setTimeout(() => { this.changeScene5(); }, 5000); */
  }

  activeSection7(){
    this.pageState = 6;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '359deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }

  activeSection8(){
    this.pageState = 7;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '359deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }

  activeSection9(){
    this.pageState = 8;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '359deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }

  activeSection10(){
    this.pageState = 9;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '359deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.avatarCornerRun();
  }
}
