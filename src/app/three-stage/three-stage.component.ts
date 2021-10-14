import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-stage',
  templateUrl: './three-stage.component.html',
  styleUrls: ['./three-stage.component.scss']
})
export class ThreeStageComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasRef', { static: false })
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;

  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;


  private camera!: THREE.PerspectiveCamera;

  private getCanvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1, 1, 1);
  private material = new THREE.MeshBasicMaterial();
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // ...
  }

}
