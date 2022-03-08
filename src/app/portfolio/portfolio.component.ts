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
        title: 'Paani re paani song',
        url: 'https://www.youtube.com/embed/bXNQR3DE7ts',
        description: `A sad song sung by me to showcase my work, though not a singer. 
                      Used Voloco auto-tune app.`
      },
      {
        title: 'Tune haath jo thaama song',
        url: 'https://www.youtube.com/embed/XyllzBacoKY',
        description: `A romantic song sung by me to showcase my work, though not a singer. 
                    `
      },
      {
        title: 'Ye jo phoolon ki bele...',
        url: 'https://www.youtube.com/embed/1zYPtC8lmmQ',
        description: 'ROMANTIC. Acting video for demo purpose.'
      },
      {
        title: 'Makaan maalik se mera jhagra ho gaya...',
        url: 'https://www.youtube.com/embed/HlmPmPXzkyY',
        description: "COMEDY. A different but unique voice of mine."
      },
      {
        title: 'Kabhi kabhi mere dil mein khayaal aata hai',
        url: 'https://www.youtube.com/embed/TggDL9rx0ig',
        description: 'COMEDY. A comedy clip.'
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
