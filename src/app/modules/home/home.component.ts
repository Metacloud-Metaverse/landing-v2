import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { StepFComponent } from './sections/step-f/step-f.component';

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

    trigger('leaveElements', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  // Scroll
  mouseScrollExecuting = false;

  // Touch
  touchY = 0;

  // StepF
  currentAnimateSceneOrbit = 0;
  animatedSceneOrbit = [
    '1deg 70deg 1000%',
    '90deg 70deg 1000%',
    '180deg 70deg 1000%',
    '270deg 70deg 1000%',
    '359deg 70deg 1000%',
  ];
  showChangeSceneButton = false;
  activeScenes = false;

  currentAnimateBackground = 0;
  preloadState = 0; // 0 = Preload, 1 = In Progress, 2 = Completed
  preloadBackgroundNumber = 0;
  assets = [
    '/assets/hdr/concert-optimized.jpg',
    '/assets/hdr/bonfire-optimized.jpg',
    '/assets/hdr/nieve-optimized.jpg',
    '/assets/hdr/casino-optimized.jpg',
    '/assets/hdr/museo-optimized.jpg'
  ];


  pageState = 0;
  scene = 0;

  isLoading = false;

  section2Text1 = false;
  section2AvatarAnimation = 0;
  section3text2 = false;
  section3text3 = false;

  sectionActive = 0;

  activeAnimation = 'inactive';

  @ViewChild('modelAvatarPrimary') modelAvatarPrimary: any;
  @ViewChild('modelAvatarCorner') modelAvatarCorner: any;

  // Timeouts
  listTimeouts = new Array<any>();

  constructor(
    public el: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  @HostListener('mousewheel', ['$event']) onMousewheel(event:any){
    if(this.mouseScrollExecuting){
      return;
    }

    this.mouseScrollExecuting = true;

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

        case 8:
        this.activeSection8();
        this.pageState = 7;
        break;

        case 9:
        this.activeSection9();
        this.pageState = 8;
        break;

        case 10:
        this.activeSection10();
        this.pageState = 9;
        break;

        /* case 11:
        this.activeSection11();
        this.pageState = 10;
        break; */

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

        case 6:
        this.activeSection8();
        this.pageState = 7;
        break;

        case 7:
        this.activeSection9();
        this.pageState = 8;
        break;

        case 8:
        this.activeSection10();
        this.pageState = 9;
        break;

        /* case 9:
        this.activeSection11();
        this.pageState = 10;
        break; */

        default:
        break;
      }
    }

    setTimeout(() => {
        this.mouseScrollExecuting = false;
    }, 1000);
  }

  @HostListener('touchstart', ['$event']) handleTouchStart(event:any){
    this.touchY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event']) handleTouchEnd(event:any){
    console.log(this.touchY);

    let te = event.changedTouches[0].clientY;
   if(this.touchY > te+5){

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

      case 6:
      this.activeSection8();
      this.pageState = 7;
      break;

      case 7:
      this.activeSection9();
      this.pageState = 8;
      break;

      case 8:
      this.activeSection10();
      this.pageState = 9;
      break;

      /* case 9:
      this.activeSection11();
      this.pageState = 10;
      break; */

      default:
      break;
    }


   }else if(this.touchY < te-5){

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

      case 8:
      this.activeSection8();
      this.pageState = 7;
      break;

      case 9:
      this.activeSection9();
      this.pageState = 8;
      break;

      case 10:
      this.activeSection10();
      this.pageState = 9;
      break;

      /* case 11:
      this.activeSection11();
      this.pageState = 10;
      break; */

      default:
      break;
    }

   }
  }

  @HostListener('touchmove', ['$event']) onMove(event:any){
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches && event.clienY > 0) {
          console.log(event.clientY);

        }
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome to the metacloud metaverse | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Metacloud is a Metaverse that connects you with anyone, anywhere in a VR world. Move over Meta. Theres a new sheriff in town.' }
    );

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
    /* this.loadConfigModelViewer(); */
    this.activeSection1();

    /* setTimeout(() => {
      this.modelAvatarCorner.nativeElement.animationName = 'Wave';
      console.log('Hola');
      console.log(this.modelAvatarCorner);
    }, 5000); */
  }

  mouseWheelConfig(event: any) {
    event.stopPropagation();
  }



  changeScene(asset: string) {
    this.modelAvatarPrimary.nativeElement.skyboxImage = asset;
    //this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/sceneback.png';
  }

  animateScene(modelViewer: any) {
    this.currentAnimateSceneOrbit = 0;

    modelViewer.cameraOrbit = this.getAnimatedSceneOrbit();
    modelViewer.timescale = '1';

    this.currentAnimateSceneOrbit++;

    setTimeout(() => {
      modelViewer.cameraOrbit = this.getAnimatedSceneOrbit();
      this.currentAnimateSceneOrbit++;
    }, 1000);
    setTimeout(() => {
      modelViewer.cameraOrbit = this.getAnimatedSceneOrbit();
      this.currentAnimateSceneOrbit++;
    }, 2000);
    setTimeout(() => {
      modelViewer.cameraOrbit = this.getAnimatedSceneOrbit();
      this.currentAnimateSceneOrbit = 0;
      this.showChangeSceneButton = true;
    }, 3000);
  }

  avatarBackgroundScene() {
    this.currentAnimateSceneOrbit = 0;
    this.currentAnimateBackground = 0;

    this.modelAvatarPrimary.nativeElement.cameraOrbit = this.getAnimatedSceneOrbit();
    this.modelAvatarPrimary.nativeElement.timescale = '1';

    this.currentAnimateBackground++;
    this.currentAnimateSceneOrbit++;

    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = this.getAnimatedSceneOrbit();
      this.modelAvatarPrimary.nativeElement.skyboxImage = this.getAnimatedBackgrund();
      this.currentAnimateSceneOrbit++;
      this.currentAnimateBackground++;
    }, 3000);
    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = this.getAnimatedSceneOrbit();
      this.modelAvatarPrimary.nativeElement.skyboxImage = this.getAnimatedBackgrund();
      this.currentAnimateSceneOrbit++;
      this.currentAnimateBackground++;
    }, 4000);
    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = this.getAnimatedSceneOrbit();
      this.modelAvatarPrimary.nativeElement.skyboxImage = this.getAnimatedBackgrund();
      this.currentAnimateSceneOrbit++;
      this.currentAnimateBackground++;
    }, 6000);
    setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = this.getAnimatedSceneOrbit();
      this.modelAvatarPrimary.nativeElement.skyboxImage = this.getAnimatedBackgrund();
      this.currentAnimateSceneOrbit = 0;
      this.currentAnimateSceneOrbit = 0;
      this.showChangeSceneButton = true;
    }, 8000);
  }

  changeAnimationAvatarPrimary(){
    if (this.pageState == 1) {
      switch (this.section2AvatarAnimation) {
        case 0:
        this.modelAvatarPrimary.nativeElement.animationName = 'dancing';
        this.section2AvatarAnimation = 1;
        break;

        case 1:
        this.modelAvatarPrimary.nativeElement.animationName = 'run';
        this.section2AvatarAnimation = 2;
        break;

        case 2:
        this.modelAvatarPrimary.nativeElement.animationName = 'looking';
        this.section2AvatarAnimation = 3;
        break;

        case 3:
        this.modelAvatarPrimary.nativeElement.animationName = 'waving';
        this.section2AvatarAnimation = 0;
        break;

        default:
        break;
      }
    } return
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
    this.clearTimeouts();

    this.pageState = 0;
    this.section3text2 = false;
    this.section3text3 = false;
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.autoRotate = false;
    /* this.avatarCornerRun(); */
  }

  activeSection2(){
    this.clearTimeouts();

    this.pageState = 1;
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '30deg 65deg 80%';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.cameraControls = true;
    this.modelAvatarPrimary.nativeElement.autoRotate = false;
    /* this.avatarCornerRun(); */
    this.section2Text1 = true;
    this.modelAvatarPrimary.nativeElement.animationName = 'waving';

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.modelAvatarPrimary.nativeElement.cameraOrbit = '-30deg 65deg 10000%';
        }
    });
  }

  activeSection3(){
    this.clearTimeouts();

    this.pageState = 2;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    /* this.avatarCornerRun(); */

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.modelAvatarPrimary.nativeElement.cameraOrbit = '45deg 80deg 10m';
        }
    });
  }

  activeSection4(){
    this.clearTimeouts();

    this.pageState = 3;
    this.sectionActive = 0;
    this.section3text2 = false;
    this.section3text3 = false;
    /* this.modelAvatarPrimary.nativeElement.cameraControls = false; */
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '25deg 70deg 1000%';
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.cameraControls = false;
    this.modelAvatarPrimary.nativeElement.autoRotate = false;
    /* this.avatarCornerRun(); */
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
          this.modelAvatarPrimary.nativeElement.cameraOrbit = '25deg 70deg 1000%';
          this.section3text2 = true;
          this.section3text3 = true;
        }
    });
  }

  activeSection5(){
    this.clearTimeouts();

    this.pageState = 4;
    /* this.scene = 0; */
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.autoRotate = false;
    /* this.avatarCornerRun(); */
  }

  activeSection6(){
    this.clearTimeouts();

    this.pageState = 5;
    this.scene = 0;
    this.activeScenes = true;
    this.modelAvatarPrimary.nativeElement.cameraControls = true;
    this.modelAvatarPrimary.nativeElement.autoRotate = true;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.interpolationDecay = 600;
    this.modelAvatarPrimary.nativeElement.skyboxImage = '/assets/hdr/concert-optimized.jpg';

    this.listTimeouts.push(setTimeout(() => {
      this.modelAvatarPrimary.nativeElement.cameraOrbit = '-90deg 90deg 100%';
    }, 500));
  }

  clearTimeouts() {
    for (const time of this.listTimeouts) {
      clearTimeout(time);
    }
    this.listTimeouts = [];
  }

  activeSection7(){
    this.clearTimeouts();
    this.pageState = 6;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.autoRotate = false;
    /* this.avatarCornerRun(); */
  }

  activeSection8(){
    this.clearTimeouts();
    this.pageState = 7;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.autoRotate = true;
    /* this.avatarCornerRun(); */
  }

  /* activeSection9(){
    this.clearTimeouts();
    this.pageState = 8;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    this.modelAvatarPrimary.nativeElement.animationName = 'idle0';
    this.modelAvatarPrimary.nativeElement.autoRotate = true;
  } */

  activeSection9(){
    this.clearTimeouts();
    this.pageState = 8;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    /* this.avatarCornerRun(); */
  }

  activeSection10(){
    this.clearTimeouts();
    this.pageState = 9;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
    /* this.avatarCornerRun(); */
  }

  /* activeSection12(){
    this.clearTimeouts();
    this.pageState = 11;
    this.modelAvatarPrimary.nativeElement.cameraOrbit = '0deg 0deg 100m';
    this.modelAvatarPrimary.nativeElement.skyboxImage = '';
  } */


  loadConfigModelViewer() {
    this.modelAvatarPrimary.nativeElement.addEventListener('load', (event: any) => {
      console.log('Loaded');
      this.loadBackgroundScenes();
    }, true);

    this.modelAvatarPrimary.nativeElement.addEventListener('environment-change', (event: any) => {
      if(this.pageState != 5){
        return;
      }
    }, true);

    this.modelAvatarPrimary.nativeElement.addEventListener('progress', (event: any) => {
      if(this.preloadState == 2){
        return;
      }

      if(event.detail.totalProgress < 1){
        return;
      }

      this.preloadBackgroundNumber++;
      this.loadBackgroundScenes();
    }, true);
  }

  loadBackgroundScenes() {
    if(this.preloadState == 2){
      return;
    }

    if(this.preloadBackgroundNumber >= (this.assets.length-1)){
      this.preloadState = 2;
      return;
    }

    this.modelAvatarPrimary.nativeElement.skyboxImage = this.getSceneAsset();
  }

  getAnimatedSceneOrbit(): string {
    return this.animatedSceneOrbit[this.currentAnimateSceneOrbit];
  }

  getAnimatedBackgrund(): string {
    return this.assets[this.currentAnimateBackground];
  }

  getSceneAsset(): string {
    return this.assets[this.preloadBackgroundNumber];
  }









  onMouseOverGames(event: any) {
    if (this.pageState == 3) {
      this.activeGames();
    } return
  }

  onMouseOverMusic(event: any) {
    if (this.pageState == 3) {
      this.activeMusic();
    } return
  }

  onMouseOverCreativity(event: any) {
    if (this.pageState == 3) {
      this.activeCreativity();
    } return
  }

  @HostListener('mouseover', ['$event']) onMouse(event: any) {
    if (this.pageState == 3) {
      this.sectionActive = 0;
      this.modelAvatarPrimary.nativeElement.animationName = 'idle';
    } return
  }

  activeGames(){
    this.sectionActive = 1;
    this.modelAvatarPrimary.nativeElement.animationName = 'sitting';
  }

  activeMusic(){
    this.sectionActive = 2;
    this.modelAvatarPrimary.nativeElement.animationName = 'dancing';
  }

  activeCreativity(){
    this.sectionActive = 3;
    this.modelAvatarPrimary.nativeElement.animationName = 'looking';
  }
}
