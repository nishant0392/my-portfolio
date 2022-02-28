import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public videos: any[] = [];
  public clickedVideoUrl: string = "";
  public clickedVideoHeading: string = "";
  public youtubeChannelLink: string = "https://youtube.com/channel/UCjn3Re0MRJq2RMR7zkMrtmA";
  public closeResult = '';
  @ViewChild("myModal") myModal: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.videos = [
      {
        title: 'Sample video',
        url: 'https://www.youtube.com/embed/EngW7tLk6R8',
        description: 'This is a sample video.'
      },
      {
        title: 'Placeholder video',
        url: 'https://www.youtube.com/embed/il2ZAZX9KpQ',
        description: 'This is a placeholder video with no sound.'
      },
      {
        title: 'Test video',
        url: 'https://www.youtube.com/embed/C0DPdy98e4c',
        description: 'This is a test video for testing purpose only.'
      },
      {
        title: 'Sample external link video',
        url: 'https://www.youtube.com/embed/PCwL3-hkKrg',
        description: "It's a sample external link video with some advertisement."
      },
      {
        title: 'Bohemian Rhapsody',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        description: 'Bohemian Rhapsody music video. Just enjoy !!'
      }
    ];
  }

  showContent(item) {
    console.log(item)
    this.clickedVideoUrl = item.url + "?autoplay=1";
    this.clickedVideoHeading = item.title;
    this.openModal();
  }

  openModal() {
    console.log(this.myModal)
    this.modalService.open(this.myModal, { size: 'xl', backdrop: 'static' }).result
      .then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed `;
      });
  }

}
